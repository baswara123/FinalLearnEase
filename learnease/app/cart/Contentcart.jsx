import './Contentcart.css'
import photography from '../assets/photography.jpg'
import Image from 'next/image';
import { FaRegTrashCan, FaAngleRight } from "react-icons/fa6";
import Link from 'next/link';
function Contentcart(){
    return(
        <div className="fullcart">
            
            <div className="kiricart">
                <h1>Your Orders</h1>
                <div className="productcard">
                    <Image className="fotoproduct" src={photography} width={350} height={200}></Image>
                    <div className="details1">
                        <div className="atas">
                        <h1 className="titlecart">Festival & Event Photography</h1>
                        <FaRegTrashCan fontSize={22}/>
                        </div>
                        <h1 className="creatorcart">Created by : Mark</h1>
                        <div className="subtotal">Subtotal : Rp 250.000,00</div>
                    </div>               
                </div>
               
            </div>
            <div className="kanancart">
                <h1 className="judulkanan">Order Summary</h1>
                <div className="detailkanan">
                   <h1>Subtotal</h1>
                   <h1>Rp 250.000,00</h1>
                </div>
                <div className="detailkanan">
                    <h1>Tax</h1>
                    <h1>Rp 12.500,00</h1>
                </div>
                <div className="voucher">
                    <h1 className="voucherp">Voucher</h1>
                    <FaAngleRight fontSize={20}/>
                </div>
                <div className="detailkanantot">
                    <h1>Total</h1>
                   <h1>Rp 262.500,00</h1>
                </div>
                <Link href="/mainpage"><button className="purchasebtn">Purchase</button></Link>
                
            </div>
        </div>
        
    );
}

export default Contentcart