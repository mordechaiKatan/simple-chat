import {useState, useEffect,useRef} from "react";
import axios from 'axios';
import './App.css';
import socketClient  from "socket.io-client";
import Chat from "./components/Chat/Chat";



function App() {

  const [messages, setMessages]=useState([]);
  const [message,setMessage]=useState();
  const [theName,setName] = useState();
  

  useEffect(()=> {
    axios.get("/api/get").then((res)=>{ setMessages(res.data)});
    if (localStorage.getItem("name"))
    {
      axios.post("/api/saveUser",
      {savedName: localStorage.getItem("name"),
      userId: localStorage.getItem("socketId")}
    )}
   } ,[])
    
   useEffect(()=> {    
    let socket = socketClient ("/");     
    socket.on("getId", (data)=>localStorage.setItem("socketId",data));
    socket.on('newMessage', (data)=>{
      setMessage({...data});
    });
    socket.on('clear', ()=> setMessages([]))
  },[]) 

  useEffect(()=>{
    setMessages([message,...messages])
  },[message])

  return (    
    <div className="App">
      <Chat
        messages={messages}
        setName={setName}
        theName={theName}/>
    </div>
  );
}

export default App;
