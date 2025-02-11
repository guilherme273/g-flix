import Footer from "../MyFlix/components/footer/Footer";
import Header from "../MyFlix/components/header/Header";
import SectionAdd from "../MyFlix/components/SectionAdd/SectionAdd";
import './AddVideosStyle.css'

 function AddVideos ()
 {
    return <>

        <Header />
        <section className="add-add-section">

            <SectionAdd />

        </section>
        <Footer />
    </>
 }

 export default AddVideos;