import {useState, useEffect} from "react"
import "./Chat.css"
import MessageItem from "../MessageItem/MessageItem";
import Modal from "../Modal/Modal";
import axios from 'axios';
import icon from "./arrow2.png"
import icon2 from "./5211.png_860.png";
import xicon from "./xicon.png";



let Chat = ({ messages, setName, newName})=>{
   
    const [value,setValue]=useState("");
    const [showModal,setShowModal] = useState(false);

    useEffect(()=>{
        let nameFromStorage = localStorage.getItem("name");
        !nameFromStorage ? setShowModal(true) : setName(nameFromStorage)
    },[])

    let handleKeyDown = (e)=> {if (e.key === 'Enter' && value) {send()}}

    function addMessage (newMessage) {
        console.log(newMessage);
        axios.post("/api/post", {newMessage: newMessage, name: newName} )
      }

    function clear () {
        axios.get("/api/clear")
    }

    function send () {
        addMessage(value);
        setValue("")
    }

    return (
        <div className="chat-app2">
            <div className="header">MY CHAT</div>
            {showModal && <div className="modal"><Modal setName={setName} setShowModal={setShowModal} newName={newName}/></div>}
            <div className="list-message2">
               {messages && messages.map((msg, index)=><MessageItem key={index} msg={msg} newName={newName}/>)}
            </div>
            <div className="futer" >
                {value
                ? <img style={{height: 40, width: 40}} src={icon} onClick={send}/>
                : <img style={{height:40, width:40}} src={xicon}/>}
                <input
                    className="chat-input"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={showModal}
                    ></input>        
                <img src={icon2} style={{width:40,height:40}} onClick={clear}/>
            </div>
        </div>
    )
}

export default Chat