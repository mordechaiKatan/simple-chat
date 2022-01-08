import MessageItem from "../MessageItem/MessageItem";
import {useSelector} from 'react-redux'


let MessageList = ()=> {

    const messages = useSelector(state => state.messages)
    let list = messages.map((m, index)=><MessageItem key={index} text={m}/>)
    return (
        <div className="message-list">
        {list}
        </div>
    )

}

export default MessageList