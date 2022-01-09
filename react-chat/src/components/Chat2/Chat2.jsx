import {useState, useEffect} from "react"
import "./Chat2.css"
import MessageItem from "../MessageItem/MessageItem";
import axios from 'axios';
import SendIcon from '@material-ui/icons/Send';


let Chat2 = ({ messages, addMessage})=>{
   
    const [value,setValue]=useState("");

    let handleKeyDown = (e)=> {if (e.key === 'Enter') {addMessage(value); setValue("")}}

    function clear () {
        // axios.get("/api/clear")
        console.log("sababa")
    }

    return (
        <div className="chat-app2">
            <div className="list-message2">
               {messages && messages.map((m, index)=><MessageItem key={index} text={m}/>)}
            </div>
            <div className="futer" >
                <SendIcon style={{transform: "rotate(-180deg)"}} onClick={()=>{addMessage(value); setValue("")}}/>                
                <input className="chat-input" value={value} onChange={(e)=>setValue(e.target.value)}  onKeyDown={handleKeyDown}></input>        
                <button onClick={clear}>CLEAR CHAT</button>
            </div>
        </div>
    )
}

export default Chat2