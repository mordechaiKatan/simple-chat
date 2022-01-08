import {useState, useEffect} from "react"
import "./Chat2.css"
import MessageItem from "../MessageItem/MessageItem"

let Chat2 = ({ messages, addMessage})=>{
   
    const [value,setValue]=useState("");

    let handleKeyDown = (e)=> {if (e.key === 'Enter') {addMessage(value); setValue("")}}

    return (
        <div className="chat-app2">
            <div className="list-message2">
               {messages && messages.map((m, index)=><MessageItem key={index} text={m}/>)}
            </div>
            <div >
                <button className='chat-button' onClick={()=>{addMessage(value); setValue("")}}></button>
                <input className="chat-input" value={value} onChange={(e)=>setValue(e.target.value)}  onKeyDown={handleKeyDown}></input>        
            </div>
        </div>
    )
}

export default Chat2