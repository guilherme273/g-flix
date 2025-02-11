import './SectionAddStyle.css';
import {categoryes} from '../container/Container';
function SectionAdd()
{

    return <>
    
            <section className='section-add' >
                <h1>Adicione um Video</h1>
     
                <div className="info">
                    <p className='p-info'>
                        Adicione um vídeo do youtube colocando a URL do mesmo e selecionando uma categoria disponivel.
                    </p>
                </div>
                <div className="formulario">
                    <form action="">
                        <input placeholder='Cole a URL aqui' type="text" name="" id="" />
                        <select name="" id="">
                            <option selected value="">Escolha uma categoria</option>
                            {categoryes.map((cat, index)=> {

                                return <option key={index} value="">{cat}</option> 

                            })}
                        </select>
                        <button type='submit'>Adicionar</button>
                    </form>
                </div>
            </section>

           </>
}


export default SectionAdd;