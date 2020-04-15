import React from 'react';

import CloseIcon from '../assets/close-white-24dp.svg'

const TextSelection = (props) => {
    const { openSelector, toggleTextSelector } = props;
    return ( 
        <>
        <div style={{ height:'100vh', width:'100vw', position:'fixed', display:!openSelector&&'none', zIndex:'50'}}>
            <div style={{height:'fit-content', position:'fixed', width:'50vw',top:'50%', left:'50%', transform:'translate(-50%, -50%)', backgroundColor:'white', padding:'3rem 0', borderRadius:'0.5rem'}}>
                <div onClick={()=>toggleTextSelector(false)} style={{color:'black', backgroundColor:'black', height:'fit-content', width:'fit-content', cursor:'pointer', padding:'1rem', position:'absolute', right:'2rem', top:'0px'}}><img src={CloseIcon} alt="Close" /></div>
                <div style={{display:'flex', height:'fit-content', width:'100%', padding:'1rem 0', backgroundColor:'#90AFB6'}}>
                    <span style={{fontSize:'1.4rem', textAlign:'start', margin:'0 1rem'}}>paste some text to begin</span>
                </div>
                <div style={{ display:'flex', height:'30vh', width:'100%', justifyContent:'center', alignItems:'center'}}>
                    <textarea style={{height:'80%', width:'85%', border:'solid black 1px', overflow:'scroll', padding:'0.5rem'}}></textarea>
                </div>
                <div>
                    <div style={{height:'fit-content', width:'fit-content', cursor:'pointer', padding:'0.5rem 2rem', borderRadius:'5rem', margin:'0.5rem auto', color:'white', backgroundColor:'#1A5260'}}>Continue</div>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default TextSelection;