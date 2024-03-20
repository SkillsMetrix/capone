


import React, { useState } from 'react';

function UsersApp(props) {
    const [users,setUsers]= useState([])
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')

    const addUser=(e)=>{
       e.preventDefault();
       setUsers([
            ...users,{uname,email}
       ])
       setUname('')
       setEmail('')
    }
    const deleteUser=(user)=>{
 setUsers(users.filter((note) => note.uname !== user))
    }
     return (
        <div>
            <div>
                {users.map((data) => (
                    <div>{data.uname} --- {data.email}
                     <button onClick={() => deleteUser(data.uname)}>Delete</button>
                    </div>
                  
                ))}
               
                <hr/>
                <form onSubmit={addUser}>
                    <input type='text' value={uname} onChange={(e)=> setUname(e.target.value)}/>
                    <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <button>Add User</button>
                </form>
            </div>
        </div>
    );
}

export default UsersApp;
