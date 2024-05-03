import axios from "axios"
import { useEffect, useState } from "react"

function Display() {
    
    const [users,setUsers] = useState([])    

    useEffect(()=>{
        axios.get('/api/sheet')
        .then((res) =>{
            setUsers(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    },[])

    return (
        <>
            <h2>UserData</h2>
            <p>No of users : {users.length}</p>
            <br /><br />
            {
                users.map((user,index) =>(
                    <div key={user}>
                        <h3>UserName : {user[0]}</h3>
                        <h3>PassWord : {user[1]}</h3>
                        <hr />
                    </div>
                    
                ))
            }

        </>
    )
}

export default Display