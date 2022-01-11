import "./MessageItem.css"

let MessageItem = ({msg})=> {
    return (
        <>
            {msg && <div className="message-item">
                <div style={{color:"blue", fontSize: "x-small"}}>{msg.name}</div>
                <div>{msg.newMessage}</div>
            </div>}
        </>
    )
}

export default MessageItem