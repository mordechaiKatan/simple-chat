import {useState, useEffect} from "react";
import axios from 'axios';
import './App.css';
import socketClient  from "socket.io-client";
import Chat from "./components/Chat/Chat";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./redux/reducer";
import Chat2 from "./components/Chat2/Chat2"


function App() {

  const [initialState, setInitialState]=useState({messages:["hello!", "how are you", "whats your name"]})
  const [initialState2, setInitialState2]=useState()

  useEffect(()=> 
    axios.get("/api/get").then((res)=>{setInitialState2(res.data)})
    ,[])
    
  useEffect(()=> {
    let socket = socketClient ("/");
    socket.on('connection', (data) => {
      console.log(`I'm connected with the back-end`);
    });
    socket.on('newMessages', (data)=>{
      setInitialState2([...data], console.log(data))
    });
    socket.on('clear', ()=> setInitialState2([]))
  },[])

  function addMessage (newMessage) {
    axios.post("/api/post", {newMessage: newMessage} )
  }

  const store = createStore (reducer, initialState)

  return (

    <div className="App">    
      {initialState2 && <Chat2 messages={initialState2} addMessage={addMessage}></Chat2>}  
      {/* <Provider store={store}>
        <Chat></Chat>
      </Provider> */}
    </div>
  );
}

export default App;
