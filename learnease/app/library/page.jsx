import Librarycontent from "./Librarycontent";
import Header from "../mainpage/Header";
import Tema from "../mainpage/Tema";
import Footer from "../mainpage/Footer";
import "./Pagel.css"
function Librarypage(){
    return(
        <>
        <Header></Header>
        <Tema/>
        <Librarycontent></Librarycontent>
        <div className="footercart"><Footer></Footer></div>
        </>
        
    );
}

export default Librarypage