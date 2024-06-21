import Header from "../mainpage/Header";
import Tema from "../mainpage/Tema";
import Footer from "../mainpage/Footer";
import Contentcart from "./Contentcart";
import "./Pagec.css"
function Cartpage(){
    return(
        <>
            <Header></Header>
            <Tema/>
            <Contentcart></Contentcart>
            <div className="footercart"><Footer></Footer></div>
            
        </>
        
    );
}

export default Cartpage