import {useState, useEffect} from "react"
import "./Chat2.css"
import MessageItem from "../MessageItem/MessageItem";
import axios from 'axios';
import icon from "./Arrow_icon.png";
import icon2 from "./5211.png_860.png";
import xicon from "./xicon.png"


let Chat2 = ({ messages})=>{
   
    const [value,setValue]=useState("");

    let handleKeyDown = (e)=> {if (e.key === 'Enter') {send()}}

    function addMessage (newMessage) {
        axios.post("/api/post", {newMessage: newMessage} )
      }

    function clear () {
        axios.get("/api/clear")
        console.log("sababa")
    }

    function send () {
        addMessage(value);
        setValue("")
    }

    return (
        <div className="chat-app2">
            <div className="header">MY CHAT</div>
            <div className="list-message2">
               {messages && messages.map((m, index)=><MessageItem key={index} text={m}/>)}
            </div>
            <div className="futer" >
                {value
                ? <img style={{height: 40, width: 40, transform: "rotate(-180deg)"}} src={icon} onClick={send}/>
                : <img style={{height:40, width:40}} src={xicon}/>}
                <input className="chat-input" value={value} onChange={(e)=>setValue(e.target.value)}  onKeyDown={handleKeyDown}></input>        
                <img src={icon2} style={{width:40,height:40}} onClick={clear}/>
            </div>
        </div>
    )
}

export default Chat2