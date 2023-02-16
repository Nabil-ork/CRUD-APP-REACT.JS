export const addUser =(user) => {
    return {type: "Add_user", payload:user}
}
export const updateUser =(newuser) => {
    return {type: "Update_user", payload:newuser}
}
export const deleteUser =(id) => {
    return {type: "Delete_user", payload:id}
}


