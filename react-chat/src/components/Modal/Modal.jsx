import { useState } from "react";
import axios from "axios";
import "./Modal.css";
import v from "./v.png";

let Modal = ({setName, setShowModal, newName})=> {

    const [checkedName,setCheckedName]=useState();
    const [nameMessage,setNameMessage]=useState();

    function addNameToStorage () {
        axios.post("/api/checkNmae", {checkedName: checkedName})
        .then ((res)=> {
            if (res.data) {
                localStorage.setItem("name",checkedName);
                setName(checkedName);
                setShowModal(false);
                console.log(res.data)
        }
            else {setNameMessage("The name already exists. Choose another userName"); console.log(res.data)}
        })
    }

    return (
        <div className="modal-content">
            <h4>What's your full name?</h4>
            <input className="modal-input" onChange={(e)=>setCheckedName(e.target.value)}></input>
            {nameMessage && <h3>{nameMessage}</h3>}
            <img className="modal-img" src={v} onClick={addNameToStorage}/>
        </div>
    )
}

export default Modal;