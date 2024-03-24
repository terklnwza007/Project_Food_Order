import './App.css';
import Popup from './Popup';
import { useState, useEffect } from 'react';
import axios from "axios";
function Meat(){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [meat,setMeat]=useState([])
    const [searchQuery, setSearchQuery] = useState('');
    
    useEffect(()=>{
        console.log("request to api")
        axios.get("http://127.0.0.1:5000/products")
        .then(response=>setMeat(response.data))
        .catch(error => {
            console.error('Error fetching data:', error);
          })
    },[])
    const onClickSelect=(id)=>{
        // setButtonPopup(true)
        axios.post("http://127.0.0.1:5000/order/" + id)
        .then()
        .catch(error => {
            console.error('Error fetching data:', error);
            })
        window.location.reload();
    }

    const handlePopupClose = () => {
        setButtonPopup(false);
    };

    const filteredMeat = meat.filter(item => {
        // Filter based on search query, you can customize this logic as needed
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    const show_meat = filteredMeat.map(item => {
        return (<div key={item._id} className="App-background-image">
            <p className="App-descript1">{item.name}<br /> {item.price} บาท</p>
            <img className="App-image" src={item.image} alt={item.name} />
            <br />
            <button onClick={() => onClickSelect(item._id)} className="App-descript2">เพิ่มลงในตะกร้า</button>
        </div>)
    })
    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search meat"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="App-grid">
                {show_meat}
            </div>
        </div>
    );
}
export default Meat;