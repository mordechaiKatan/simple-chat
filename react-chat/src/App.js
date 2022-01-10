import {useState, useEffect} from "react";
import axios from 'axios';
import './App.css';
import socketClient  from "socket.io-client";
import Chat from "./components/Chat/Chat";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./redux/reducer";
import Chat2 from "./components/Chat2/Chat2";


function App() {

  // const [initialState, setInitialState]=useState({messages:["hello!", "how are you", "whats your name"]});
  // const store = createStore (reducer, initialState);

  const [messages, setMessages]=useState()

  useEffect(()=> 
    axios.get("/api/get").then((res)=>{ setMessages(res.data)})
    ,[])
    
  useEffect(()=> {
    let socket = socketClient ("/");
    socket.on('connection', (data) => {
      console.log(`I'm connected with the back-end`);
    });
    socket.on('newMessages', (data)=>{
      setMessages([...data]); console.log(data)
    });
    socket.on('clear', ()=>  setMessages([]))
  },[])

 
 

  return (

    <div className="App">    
      {messages && <Chat2 messages={messages}></Chat2>}  
      {/* <Provider store={store}>
        <Chat></Chat>
        </Provider> */}
    </div>
  );
}

export default App;
