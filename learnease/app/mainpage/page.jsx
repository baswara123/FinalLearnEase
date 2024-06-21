import Header from "./Header";
import Banner from "./Banner";
import Tema from "./Tema";
import Content from "./Content";
import Footer from "./Footer";
import './page.css'

function Homepage(){
    return(
        <>
            <Header></Header>
            <Tema></Tema>
            <Banner></Banner>
            <Content></Content>
            <Footer></Footer>
        </>
        
    );
}

export default Homepage