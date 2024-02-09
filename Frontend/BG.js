import './BG.css'
import imageSlide from './dataPromotion'
import { useEffect, useState } from 'react'
const BG = () =>{
    const[currentState,setCurrentState] = useState(0)
    useEffect(()=>{
        const timer = setTimeout(() => {
            if(currentState === 2){
                setCurrentState(0)
            }else{
                setCurrentState(currentState+1)
            }
        },3000)
        return ()=> clearTimeout(timer)
    },[currentState])
    const bgImageStyle={
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    }
    const goToNext =()=>{
        setCurrentState(currentState)
    }
    return(
        <div className="BG-promotion">
            <div style={bgImageStyle}></div>
            <div>
                <div>
                    {
                        imageSlide.map((imageSlide,currentState)=>(
                            <span key = {currentState} onClick={()=>goToNext(currentState)}></span>
                        ))
                    }
                
                </div>
            
            </div>
        </div>
    )
}
export default BG; 