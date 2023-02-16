import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUser } from "../Config/actions";

function Userlist() {
    const users= useSelector((data) => data.users);
    const dispatch = useDispatch();
    const handleDelete = (id) =>{
        dispatch(deleteUser(id))
    }
    return(
    <div>
            <div>
                <Link to='/addu'><button>Add User</button></Link>
            </div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                </thead>
                <tbody>    
                {users.map((user, index) =>{
                    return (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                        <Link to={`/update/${user.id}`}><button>UPDATE</button></Link>
                        <Link to='/'><button onClick={handleDelete(user.id)}>DELETE</button></Link>
                        </td>
                    </tr>)
                    })}
                    
                </tbody>
            </table>
    </div>
    )

}


export default Userlist