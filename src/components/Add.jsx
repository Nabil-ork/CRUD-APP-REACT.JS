import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addUser } from "../Config/actions";

function Add() {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const count = useSelector(data => data.users.length);
    const handleclick = () =>{
        dispatch(addUser({
            id:count+1,
            name:name,
            email:email
        }))
        navigate('/')
    }
    return(
        <form>
            <label>Name : </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Email : </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={handleclick} >Enregistrer</button>
        </form>
    )

}


export default Add