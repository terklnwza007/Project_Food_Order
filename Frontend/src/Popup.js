import React from 'react'
import './Popup.css'

function Popup(props){
    return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <p>เพิ่มลงในตะกร้าเรียบร้อย</p>
            <div className="setPosition-button">
                
                <button className="close-btn" onClick={() => props.setTrigger(false)}>
                    เลือกสินค้าต่อไป
                </button>
            </div>
            
            {props.chidren}
        </div> 
        
    </div>
    ): "";
}
export default Popup;