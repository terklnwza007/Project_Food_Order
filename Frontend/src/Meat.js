import './App.css';
import Popup from './Popup';
import { useState, useEffect } from 'react';
import axios from "axios";
function Meat(){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [meat,setMeat]=useState([])
    const onClickSelect=(id)=>{
        setButtonPopup(true)
        console.log({id});
    }
    
    useEffect(()=>{
        console.log("request to api")
        axios.get("http://127.0.0.1:5000/products")
        .then(response=>setMeat(response.data))
        .catch(error => {
            console.error('Error fetching data:', error);
          })
    },[])
    const show_meat = meat.map((item) => {
        return <div className="App-background-image">
            <p className = "App-descript1">{item.name}<br/> {item.price} บาท</p>
            <img className = "App-image" src= {item.image}/>
            <br/>
            <button onClick={onClickSelect.bind(item._id)} className = "App-descript2" >เพิ่มลงในตะกร้า</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}></Popup>
        </div>
    })
    return(
    <div className = "App-grid">
        {show_meat}        
    </div>
    )
}
export default Meat;