import "./Modal.css";
import v from "./v.png";

let Modal = ({setName, setShowModal, newName})=> {

    function addNameToStorage () {
        localStorage.setItem("name",newName)
        setShowModal(false)
    }

    return (
        <div className="modal-content">
            <h4>What's your full name?</h4>
            <input className="modal-input" onChange={(e)=>setName(e.target.value)}></input>
            <img className="modal-img" src={v} onClick={addNameToStorage}/>
        </div>
    )
}

export default Modal;