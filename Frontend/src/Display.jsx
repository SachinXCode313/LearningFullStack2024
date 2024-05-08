import axios from "axios"
import { useEffect, useState } from "react"
import './Display.css'

function Display() {

    const [users, setUsers] = useState([])
    const [editId,setEditId] = useState(-1)


    const handleEdit = (id) => {
        setEditId(id);
    }

    const handleUpadte = () => {
        axios.put('/api/sheet' , )
    }

    useEffect(() => {
        axios.get('/api/sheet')
            .then((res) => {
                setUsers(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <h2>UserData</h2>
            <p>No of users : {users.length}</p>
            
            {/* {
                users.map((user, key) => (
                    <div key={user}>
                        <h3>UserName : {user[0]}</h3>
                        <h3>PassWord : {user[1]}</h3>
                        <hr />
                    </div>
                ))
            } */}


        </>
    )
}

export default Display