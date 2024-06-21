import Header from '../mainpage/Header'
import Footer from '../mainpage/Footer'
import Tema from '../mainpage/Tema'
import Left from '../profile/left'
import Right from '../profile/right'
import '../profile/pagestyle.css'


function profile(){
    return(
        <>
            <Header/>
            <Tema/>
            <div className="container">
                <Left/>
                <Right/>
            </div>
            <Footer/>
            
        </>
        
    );


}

export default profile