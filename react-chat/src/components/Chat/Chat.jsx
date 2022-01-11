import {useState, useEffect} from "react"
import "./Chat.css"
import MessageItem from "../MessageItem/MessageItem";
import Modal from "../Modal/Modal";
import axios from 'axios';
import icon from "../Chat/icons/arrow2.png"
import icon2 from "../Chat/icons/garbage.png";
import xicon from "../Chat/icons/xicon.png";



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
        axios.post("/api/post", {newMessage: newMessage, fullName: newName} )
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
            
            {showModal &&
            <div className="modal">
                <Modal
                    setName={setName}
                    setShowModal={setShowModal}
                    newName={newName}/>
            </div> }
            
            <div className="list-message2">
               {messages &&
               messages.map((msg, index)=>
                <MessageItem
                    key={index}
                    msg={msg}
                    newName={newName}/>)}
            </div>
            
            <div className="futer" >
                {value
                ? <img className="chat-img" src={icon} onClick={send}/>
                : <img className="chat-img" src={xicon}/>}
                
                <input
                    className="chat-input"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={showModal}
                    ></input>

                <img className="chat-img" src={icon2} onClick={clear}/>
            </div>

        </div>
    )
}

export default Chat