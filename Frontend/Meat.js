import './App.css';
import Popup from './Popup';
import { useState } from 'react';
function Meat(){
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
        <div className="App-background-image">
            <p className = "App-descript1">เนื้อปลาสด<br/> 39 บาท</p>
            <img className = "App-image" src= "Menu-photo/MEAT/เนื้อปลาสด.jpg"/>
            <br/>
            <button onClick={() => setButtonPopup(true)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
        <div className="App-background-image">
            <p className = "App-descript1">เนื้อปลาสวรรค์<br/> 30 บาท</p>
            <img className = "App-image" src= "Menu-photo/MEAT/เนื้อปลาสวรรค์.jpg"/>
            <br/>
            <button onClick={() => setButtonPopup(true)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
        <div className="App-background-image">
            <p className = "App-descript1">ปลาหมึกสด<br/> 39 บาท</p>
            <img className = "App-image" src= "Menu-photo/MEAT/ปลาหมึกสด.jpg"/>
            <br/>
            <button onClick={() => setButtonPopup(true)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
        <div className="App-background-image">
            <p className = "App-descript1">เนื้อวัว<br/> 40 บาท</p>
            <img className = "App-image" src= "Menu-photo/MEAT/เนื้อวัว.jpg"/>
            <br/>
            <button onClick={() => setButtonPopup(true)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
        <div className="App-background-image">
            <p className = "App-descript1">เนื้อสไลซ์<br/> 10 บาท</p>
            <img className = "App-image" src= "Menu-photo/MEAT/เนื้อสไลซ์.jpg"/>
            <br/>
            <button onClick={() => setButtonPopup(true)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
        <div className="App-background-image">
            <p className = "App-descript1">เนื้อสไลด์นำเข้า<br/> 10 บาท</p>
            <img className = "App-image" src= "Menu-photo/MEAT/เนื้อสไลด์นำเข้า.jpg"/>
            <br/>
            <button onClick={() => setButtonPopup(true)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
        <div className="App-background-image">
            <p className = "App-descript1">หมูคุโรบุตะ<br/> 10 บาท</p>
            <img className = "App-image" src= "Menu-photo/MEAT/หมูคุโรบุตะ.jpg"/>
            <br/>
            <button onClick={() => setButtonPopup(true)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
        <div className="App-background-image">
            <p className = "App-descript1">หมูชาบู<br/> 10 บาท</p>
            <img className = "App-image" src= "Menu-photo/MEAT/หมูชาบู.jpg"/>
            <br/>
            <button onClick={() => setButtonPopup(true)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
        <div className="App-background-image">
            <p className = "App-descript1">หมูสไลด์<br/> 10 บาท</p>
            <img className = "App-image" src= "Menu-photo/MEAT/หมูสไลด์.jpg"/>
            <br/>
            <button onClick={() => setButtonPopup(true)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
        <div className="App-background-image">
            <p className = "App-descript1">หมูกรอบ<br/> 10 บาท</p>
            <img className = "App-image" src= "Menu-photo/MEAT/หมูกรอบ.jpg"/>
            <br/>
            <button onClick={() => setButtonPopup(true)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
        <div className="App-background-image">
            <p className = "App-descript1">เป็ดย่าง<br/> 10 บาท</p>
            <img className = "App-image" src= "Menu-photo/MEAT/เป็ดย่าง.jpg"/>
            <br/>
            <button onClick={() => setButtonPopup(true)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
        
    </div>
    )
}
export default Meat;