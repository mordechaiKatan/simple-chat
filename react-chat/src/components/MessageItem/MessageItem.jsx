import "./MessageItem.css"

let MessageItem = ({text})=> {
    return (
        <div className="message-item">
            <div>{text}</div>
        </div>
    )
}

export default MessageItem