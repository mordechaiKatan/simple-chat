import "./MessageItem.css"

let MessageItem = ({msg})=> {
    return (
        <>
            {msg && <div className="message-item">
                <div className="name">{msg.name}</div>
                <div>{msg.newMessage}</div>
            </div>}
        </>
    )
}

export default MessageItem