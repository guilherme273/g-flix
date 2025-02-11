
import BannerFavoritos from '../MyFlix/components/bannerFavoritos/Banner';
import Footer from '../MyFlix/components/footer/Footer';
import Header from '../MyFlix/components/header/Header';
import SectionFavoritos from '../MyFlix/components/SectionFavoritos/SectionFavoritos';
import './favoritos.css';

function Favoritos()
{

    return <>
    
            <Header />
            <BannerFavoritos  />
            <SectionFavoritos />
            <Footer />
           </>
}


export default Favoritos;