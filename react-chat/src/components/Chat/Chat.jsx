import "./Chat.css"
import MessageList from "../MessageList/MessageList";
import MessageInput from "../MessageInput/MessageInput";

let Chat = ()=>{
    return (
        <div className="chat-app">
            <div className="list-message"><MessageList/></div>
            <div className="input-message"><MessageInput/></div>
        </div>
    )
}

export default Chat