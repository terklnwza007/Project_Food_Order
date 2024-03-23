import './List_order.css';
import { useState, useEffect } from 'react';
import axios from "axios";
function List_order(){
    const [meat,setMeat]=useState([])
    const [check,setCheck]=useState([])
    const [sum, setSum] = useState(0)
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        console.log("request to api")
        axios.get("http://127.0.0.1:5000/order")
        .then(response=>{
            setMeat(response.data)
        }).catch(error => {
            console.error('Error fetching data:', error);
        })

        axios.get("http://127.0.0.1:5000/total/order")
        .then(response=>{
            setSum(response.data)
        }).catch(error => {
            console.error('Error fetching data:', error);
        })

    },[])
    const onClickDeleteOrder=(id)=>{
        axios.delete("http://127.0.0.1:5000/order/"+id)
        .then((response) => {
            setMeat(response.data);
        })
        axios.get("http://127.0.0.1:5000/total")
        .then(response=>{
            setSum(response.data)
        }).catch(error => {
            console.error('Error fetching data:', error);
        })
        window.location.reload();
    }
    const show_order = meat.map((item) => {
        return <div className="grid_order">
            <text>{item.name}</text><text className='Text-in-order'>{item.price}</text>
            <button onClick={onClickDeleteOrder.bind(this, item._id)} >ลบ</button>
        </div>
    })
    const onClickSubmit=()=>{
        axios.delete("http://127.0.0.1:5000/order")
        .then((response) => {
            setMeat(response.data);
            setSum(0)
        })
        console.log(meat)
        // console.log(check)

    }

    const onClickPay=()=>{
        axios.get("http://127.0.0.1:5000/check")
        .then((response) => {
            setCheck(response.data);
            console.log(check)
        })
        
        axios.get("http://127.0.0.1:5000/total/check")
        .then((response) => {
            setTotal(response.data);
            console.log(total)
        })
        
    }

    return(
        <>
        <nav className='nav-background'>
            <h1 className = "App-text">ตะกร้า</h1>
        </nav>
        <div className='grid_order'>

            <h2>เมนูอาหาร</h2> <h2>ราคา</h2> <text></text>
        </div>
        {show_order}
        <text ></text><text></text>
        <text ></text><text></text>
        <text ></text><text></text>
        <div className='grid_order'>
            <text >ยอดชำระ</text><text></text><text className='Text-in-order'>{sum}</text>
        </div>
        <button className = "button-order" onClick={onClickSubmit.bind()} >สั่งอาหาร</button>
        <button className = "button-pay" onClick={onClickPay.bind()} >ชำระเงิน</button>
        {/* <button className = "button" onClick={onClickSum.bind()} >Sum</button> */}
        </>
    )
}
export default List_order;