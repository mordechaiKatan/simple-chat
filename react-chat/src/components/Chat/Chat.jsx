import {useState, useEffect} from "react"
import "./Chat.css"
import MessageItem from "../MessageItem/MessageItem";
import Modal from "../Modal/Modal";
import axios from 'axios';
import icon from "../Chat/icons/arrow2.png"
import icon2 from "../Chat/icons/garbage.png";
import xicon from "../Chat/icons/xicon.png";
import Users from "../Users/Users"



let Chat = ({ messages, setName, theName})=>{
   
    const [value,setValue]=useState("");
    const [showModal,setShowModal] = useState(false);
    const [showUsers,setShowUsers] = useState(false);
    const [buttonText,setButtonText] = useState();

    useEffect(()=>{
        let nameFromStorage = localStorage.getItem("name");
        !nameFromStorage ? setShowModal(true) : setName(nameFromStorage)
    },[])

    useEffect(()=> {
        if (showUsers) {setButtonText("Hide users")}
        else {setButtonText("Display users")}
    },[showUsers])

    let handleKeyDown = (e)=> {if (e.key === 'Enter' && value) {addMessage()}}

    function addMessage () {
        axios.post("/api/post", {newMessage: value, fullName: theName});
        setValue("")
      }

    function clear () {
        axios.get("/api/clear")
    }

    // function send () {
    //     addMessage(value);
    //     setValue("")
    // }

    return (
        <div className="chat-app2">

            <div className="header">MY CHAT</div>

            <button className="menu-button" onClick={()=>setShowUsers(!showUsers)}>{buttonText}</button>

            {showUsers && 
            <div className="users">
                <Users setShowUsers={setShowUsers}/>
            </div>}
            
            {showModal &&
            <div className="modal">
                <Modal
                    setName={setName}
                    setShowModal={setShowModal}
                    theName={theName}/>
            </div> }
            
            <div className="list-message2">
               {messages &&
               messages.map((msg, index)=>
                <MessageItem
                    key={index}
                    msg={msg}
                    theName={theName}/>)}
            </div>
            
            <div className="futer" >
                {value
                ? <img className="chat-img" src={icon} onClick={addMessage}/>
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