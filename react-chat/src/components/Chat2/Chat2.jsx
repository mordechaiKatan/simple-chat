import {useState, useEffect} from "react"
import "./Chat2.css"
import MessageItem from "../MessageItem/MessageItem";
import axios from 'axios';
import icon from "./Arrow_icon.png"


let Chat2 = ({ messages, addMessage})=>{
   
    const [value,setValue]=useState("");

    let handleKeyDown = (e)=> {if (e.key === 'Enter') {addMessage(value); setValue("")}}

    function clear () {
        axios.get("/api/clear")
        console.log("sababa")
    }

    return (
        <div className="chat-app2">
            <div className="header">MY CHAT</div>
            <div className="list-message2">
               {messages && messages.map((m, index)=><MessageItem key={index} text={m}/>)}
            </div>
            <div className="futer" >
                <img style={{height: 20, width: 20, transform: "rotate(-180deg)"}} src={icon} onClick={()=>{addMessage(value); setValue("")}}/>
                <input className="chat-input" value={value} onChange={(e)=>setValue(e.target.value)}  onKeyDown={handleKeyDown}></input>        
                <button onClick={clear}>CLEAR CHAT</button>
            </div>
        </div>
    )
}

export default Chat2