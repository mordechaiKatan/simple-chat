import "./Users.css"
import {useState,useEffect} from "react";
import axios from "axios";

let Users = ()=> {

    const [users, setUsers]=useState();

    useEffect(()=> {
        axios.get("/api/users")
        .then ((res)=> {console.log(res.data);setUsers(res.data)})
    },[])

    return (
        <div className="user-content">
        {users && users.map((user)=>
            <div className="user-name" onClick={()=>console.log(user)}>{user}</div>)
        }
        </div>
    )
}

export default Users;