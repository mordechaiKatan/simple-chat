import { useState } from 'react';
import {addMessage} from '../../redux/action';
import {useDispatch} from 'react-redux';
import "./MessageInput.css"

let MessageInput = ()=> {

    const [value,setValue]=useState("")

    const dispatch = useDispatch();
    let handleKeyDown = (e)=> {if (e.key === 'Enter') {dispatch(addMessage(value)); setValue("")}}

    return(
    <div >
        <button className='chat-button' onClick={()=>{dispatch(addMessage(value)); setValue("")}}></button>
        <input className="chat-input" value={value} onChange={(e)=>setValue(e.target.value)}  onKeyDown={handleKeyDown}></input>
        
    </div>
    )
}

export default MessageInput