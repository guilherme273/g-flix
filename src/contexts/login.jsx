import { useContext, createContext, useState, useEffect } from "react";

const AuthenticatorContext = createContext();

export const Authenticator = ({ children }) => {
  const [User, setUser] = useState();
  const [logado, setLogado] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [isSuccessType, setisSuccessType] = useState("");

  const logar = async ({ e_mail, password }) => {
    const data = { e_mail, password };
    const json = JSON.stringify(data);

    const response = await fetch("https://mybackend.eco.br/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });

    if (!response.ok) {
      return response.json();
    } else {
      const UserToken = await response.json();
      setUser(UserToken.user);
      setisSuccess(true);
      setisSuccessType("logado");

      setLogado(true);
      localStorage.setItem("@auth:", UserToken.token);
      localStorage.setItem("@user:", JSON.stringify(UserToken.user));
    }
  };

  const getAuthHeaders = () => {
    const token = localStorage.getItem("@auth:");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };
  const getUser = () => {
    const user = localStorage.getItem("@user:");
    return user ? user : false;
  };

  const deslogar = () => {
    localStorage.removeItem("@auth:");
    localStorage.removeItem("@user:");
    setLogado(false);
  };

  useEffect(() => {
    const x = async () => {
      try {
        const storedUser = await localStorage.getItem("@user:");
        const storedToken = await localStorage.getItem("@auth:");

        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setLogado(true);
        } else {
          setLogado(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    x();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setisSuccess(false);
      setisSuccessType("");
    }, 3000);
  }, [isSuccess]);

  return (
    <AuthenticatorContext.Provider
      value={{
        logar,
        User,
        getAuthHeaders,
        logado,
        getUser,
        deslogar,
        setisSuccess,
        isSuccess,
        setisSuccessType,
        isSuccessType,
      }}
    >
      {children}
    </AuthenticatorContext.Provider>
  );
};

export const useAuthenticator = () => {
  const context = useContext(AuthenticatorContext);

  if (!context) {
    throw new Error(
      "useAuthenticator must be used within an AuthenticatorProvider"
    );
  }
  return context;
};
