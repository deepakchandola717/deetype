import React from 'react';
import DtTitle from '../assets/dt-title.svg';


const Playground = (props) => {

    const [text, setText] = React.useState(props.location.state.text.split(""));
    const [completedText, setCompletedText] = React.useState()
    const [typedText, setTypedText] = React.useState();

    const updateTypedText=(e)=>{
        let typedText = e.target.value.split("")
        setCompletedText(typedText)
        setTypedText(e.target.value)
    }

    console.log('text', text)
    console.log('typedText', typedText)
    return ( 
        <>
        <div style={{display:'flex', flexDirection:'column', height:'100vh', width:'100vw', backgroundColor:'#6F4533'}}>
            <div style={{display:'flex', width:'80%', margin:'auto', justifyContent:'space-between'}}><img style={{height:'3vw'}} src={DtTitle} alt="deeType"/><span>5:00</span></div>
            <div style={{height:'40vh', width:'80%', margin:'auto', backgroundColor:'white', border:'solid black 1px', color:'grey', textAlign:'start', padding:'0.5rem'}}>{text}</div>

            <div style={{ display:'flex', height:'40vh', width:'95%', margin:'auto', justifyContent:'center', alignItems:'center'}}>
                    <textarea onChange={updateTypedText} value={typedText} style={{height:'80%', width:'85%', border:'solid black 1px', overflow:'scroll', padding:'0.5rem'}}></textarea>
            </div>
        </div>
        </>
     );
}
 
export default Playground;