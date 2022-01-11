import {useState, useEffect,useRef} from "react";
import axios from 'axios';
import './App.css';
import socketClient  from "socket.io-client";
import Chat from "./components/Chat/Chat";



function App() {

  const [messages, setMessages]=useState([]);
  const [message,setMessage]=useState();
  const [helpState,setHelpState]=useState([]);
  const [newName,setName] = useState();
  

  useEffect(()=> 
    axios.get("/api/get").then((res)=>{ setMessages(res.data)})
    ,[])
    
   useEffect(()=> {
    let socket = socketClient ("/");
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
      <Chat messages={messages} setName={setName} newName={newName}/>
    </div>
  );
}

export default App;
