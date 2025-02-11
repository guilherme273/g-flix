import Footer from "../MyFlix/components/footer/Footer";
import Header from "../MyFlix/components/header/Header";
import SectionAdd from "../MyFlix/components/SectionAdd/SectionAdd";
import './AddVideosStyle.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

 function AddVideos ()
 {
    return <>

        <Header />
        <section className="add-add-section">

            <SectionAdd />

        </section>
        <Footer />
        <ToastContainer />
    </>
 }

 export default AddVideos;