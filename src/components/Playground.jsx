import React, { useState, useEffect } from 'react';
import DtTitle from '../assets/dt-title.svg';
import { Link } from 'react-router-dom';


const Playground = (props) => {

    const [text] = useState(props.location.state.text.split(""));
    const [time] = useState(props.location.state?props.location.state.time:5);
    
    const [start, setStart ] = useState(false);
    const [completedText, setCompletedText] = useState([])
    const [pendingText, setPendingText] = useState(props.location.state.text.split(""))
    const [typedText, setTypedText] = useState();

    const updateTypedText=(e)=>{
        console.log('received text', text)
        let updatedTypedText = e.target.value.split("")
        let remainingText = [...text]
        remainingText.splice(0,completedText.length+1)
        if(JSON.stringify([...updatedTypedText, ...remainingText])===JSON.stringify(text)){
            setStart(true)
            setCompletedText(updatedTypedText)
            setTypedText(e.target.value)
            setPendingText(remainingText)
        }
    }

    useEffect(()=>{
        setTimeout(alert('timeup'), time*60*1000);
        setInterval()
    },[start])
    return ( 
        <>
        <div style={{display:'flex', flexDirection:'column', height:'100vh', width:'100vw', backgroundColor:'#6F4533'}}>
            <div style={{display:'flex', width:'80%', margin:'auto', justifyContent:'space-between'}}><Link to="/"><img style={{height:'3vw'}} src={DtTitle} alt="deeType"/></Link><span>{time}:00</span></div>
            <div style={{height:'40vh', width:'80%', margin:'auto', backgroundColor:'white', border:'solid black 1px', color:'grey', textAlign:'start', padding:'0.5rem', overflow:'scroll'}}><span style={{color:'black'}}>{completedText?completedText:''}</span><span style={{borderLeft:'solid black 2px'}}>{pendingText[0]}</span><span>{pendingText.map((elem,index)=>index>0&&elem)}</span></div>

            <div style={{ display:'flex', height:'40vh', width:'95%', margin:'auto', justifyContent:'center', alignItems:'center'}}>
                    <textarea onChange={updateTypedText} value={typedText} style={{height:'80%', width:'85%', border:'solid black 1px', overflow:'scroll', padding:'0.5rem', fontSize:'20px'}}></textarea>
            </div>
            <div style={{display:'flex', backgroundColor:'#621A1A', height:'3rem', width:'8rem', borderRadius:'5px', alignItems:'center', justifyContent:'center', margin:'auto', cursor:'pointer'}}>
                END
            </div>
        </div>
        </>
     );
}
 
export default Playground;