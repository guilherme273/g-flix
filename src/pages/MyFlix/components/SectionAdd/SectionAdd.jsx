import './SectionAddStyle.css';
import {categoryes} from '../container/Container';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMovies } from '../../../../contexts/allMovies';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


function SectionAdd()
{

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const [error, setError] = useState(null);

    const {atualizarMovies} = useMovies();
    
    const extractYouTubeID = (url) => {
        const regex = /(?:\?v=|&v=|youtu\.be\/|embed\/|\/v\/|\/e\/|watch\?v=|watch\?.+&v=)([^&]+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const funcAdd = async (data) => {
        const key = 'AIzaSyDPgwMfC0qgWFQyBzHtTfVszEDJ6a8G_pQ';
        const url = data.url.trim(); 
        const shortenedUrl = url.slice(0, 43); 
        const id = extractYouTubeID(shortenedUrl);


        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet,contentDetails,statistics&key=${key}`,{
            method:'GET'
        });

        const result = await response.json();
        if(response.ok){
            const imageUrl = result.items[0]?.snippet?.thumbnails?.maxres?.url;
            const title = result.items[0]?.snippet?.title;
            console.log(imageUrl);
        
            if (!imageUrl) {
                toast('O vídeo em questão não possui as propriedades necessárias para ser indexado no projeto!', {
                    autoClose: 5000, 
                    hideProgressBar: true, 
                    closeButton: true,
                    pauseOnHover: true, 
                    style: {
                      backgroundColor: "#dc3545", 
                      color: "white", 
                      fontWeight: "bold", 
                    },
                });
                return;
            }
            const obj = {
                id: extractYouTubeID(shortenedUrl),
                title,
                url: shortenedUrl,
                cover:imageUrl,
                category:data.category,

            }
            const json = JSON.stringify(obj);
            const atualizou = await atualizarMovies(json);

            if(atualizou.success)
            {

                toast(`${atualizou.msg}`, {
                    autoClose: 5000, // Duração do toast (5 segundos)
                    hideProgressBar: true, // Mostrar barra de progresso
                    closeButton: true, // Mostrar botão de fechar
                    pauseOnHover: true, // Pausar o tempo quando o mouse estiver sobre o toast
                    style: {
                      backgroundColor: "#28a745", // Cor de fundo verde 
                      color: "white", // Cor do texto
                      fontWeight: "bold", // Texto em negrito
                    },
                  });
                  reset();
            }else {

                toast(`${atualizou.msg}`, {
                    autoClose: 5000, 
                    hideProgressBar: true, 
                    closeButton: true,
                    pauseOnHover: true, 
                    style: {
                      backgroundColor: "#dc3545", 
                      color: "white", 
                      fontWeight: "bold", 
                    },
                  });

            }

        } else {

            alert('deu ruim na requisição');
        }


    }



    return <>
    
            <section className='section-add' >
                <h1>Adicione um Video</h1>
     
                <div className="info">
                    <p className='p-info'>
                        Adicione um vídeo do youtube colocando a URL do mesmo e selecionando uma categoria disponivel.
                    </p>
                </div>
                <div className="formulario">
                    <form onSubmit={handleSubmit(funcAdd)}>

                        <div className='div-url'>
                            <input
                            placeholder='Cole a URL aqui'
                            type="text"
                            name="url"
                            id="" 
                            {...register("url", { required: true })}
                            />
                            {errors?.url?.type === "required" && (
                                <p className="p-alert">Digite uma url</p>
                            )}
                        </div>


                    <div className="div-url">

                    <select
                        {...register("category", {
                            required: "Selecione uma categoria",
                            validate: (value) => value !== "0" || "Selecione uma categoria válida",
                        })}
                        >
                        <option value="0">Escolha uma categoria</option>
                        {categoryes.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>

                    {errors.category && (
                        <p className="p-alert">{errors.category.message}</p>
                    )}

                    </div>


                        <button type='submit'>Adicionar</button>
                    </form>
                </div>
            </section>

           </>
}


export default SectionAdd;