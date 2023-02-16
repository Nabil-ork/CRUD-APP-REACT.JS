import { useParams } from "react-router-dom"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import {  updateUser } from "../Config/actions";

function Update() {
    const {id} = useParams();
    const user = useSelector(data => data.users.find((u) => u.id === parseInt({id})));
    const [name,setName]=useState(user.name);
    const [email,setEmail]=useState(user.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleclick = () =>{
        dispatch(updateUser({
            id:id,
            name:name,
            email:email
        }))
        navigate('/')
    }
    return(
        <form>
            <label>Name : </label>
            <input type="text" value={name} onchange={(e) => setName(e.target.value)}/>
            <label>Email : </label>
            <input type="text" value={email} onchange={(e) => setEmail(e.target.value)}/>
            <button onClick={handleclick} >Enregistrer</button>
        </form>
    )

}



export default Update