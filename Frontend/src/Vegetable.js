import './App.css';
import Popup from './Popup';
import { useState } from 'react';
function Vegetable(){
    const [buttonPopup, setButtonPopup] = useState(false);
    return(
    <div className = "App-grid">
        <div className="App-background-image">
            <p className = "App-descript1">ไข่ไก่<br/> 10 บาท</p>
            <img className = "App-image" src= "Menu-photo/MEAT/ไข่ไก่.jpg"/>
            <br/>
            <button onClick={() => setButtonPopup(true)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
        

    </div>
    )
}
export default Vegetable;