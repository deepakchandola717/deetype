import React, {useState} from 'react';

import TextSelection from "./TextSelection";

import DtTitle from '../assets/dt-title.svg';
import EnterBackground from '../assets/enter-background.svg';

const Home = () => {

    const [openTextSelector, setOpenTextSelector] = useState(false);

    const toggleTextSelector=(toggleValue)=>{
        const newTextSelector = toggleValue?toggleValue:!openTextSelector;
        setOpenTextSelector(newTextSelector);
    }

    const buttonStyle={width:'16rem', padding:'0.5vw', margin:'0.4vw',zIndex:'2', backgroundColor:'white', borderRadius:'0.5rem', color:'#1A5261', cursor:'pointer', pointerEvents:openTextSelector&&'none', opacity:openTextSelector&&'0.6'};

    return ( 
        <>
            <TextSelection openSelector={openTextSelector} toggleTextSelector={toggleTextSelector}/>
            <div style={{display:'flex', flexDirection:'column', opacity:openTextSelector&&'0.4'}}>
                <div style={{width:'100vw', height:'20vh', backgroundColor:'#1A5261'}}/>
                <img style={{position:'absolute', zIndex:'1', top:'18vh', left:'2vw', height:'28vh', width:'94vw'}} src={DtTitle} alt="deeType"/>
                <div style={{width:'100vw', height:'35vh', backgroundColor:'#2A2136'}}/>
                <div style={{width:'100vw', height:'45vh', backgroundColor:'#823030'}}>
                <img style={{position:'absolute', zIndex:'0', bottom:'10.0vh', right:'0', height:'40vh', overflow:''}} src={EnterBackground} alt="deeType"/>

                    <div style={{display:'flex', width:'90vw',padding:'3rem 0', margin:'auto', justifyContent:'space-around'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <div style={buttonStyle}>choose file</div>
                            <div style={buttonStyle} onClick={toggleTextSelector}>copy-paste text</div>
                            <div style={{display:'flex'}}>
                                <div style={{height:'2rem', width:'4rem', zIndex:'2', backgroundColor:'#2A2136', border:'solid white 3px', padding:'0.2rem', margin:'1rem'}}></div>
                                <span style={{alignSelf:'center',zIndex:'2'}}>Minutes</span>
                            </div>
                        </div>
                        <span style={{alignSelf:'center', fontSize:'7vw', margin:'1rem', cursor:'pointer',zIndex:'2', border:'dotted white 2px', padding:'1rem', borderRadius:'1rem'}}>ENTER</span>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Home;