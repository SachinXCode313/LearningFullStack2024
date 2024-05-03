import { react, useEffect, useState } from 'react'
import axios from 'axios';

function LoginForm() {
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    useEffect(()=>{
        console.log("login effect");
    },[])


    const sendDataToBackend = async (e) => {
      e.preventDefault(); 

      const formData = {
        user : user,
        pass : pass
      }
        try {
          const response = await axios.post('/api/sheet', formData);
          
          console.log("User Added Successfully");

        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
        <>
            <h2>UserLogin</h2>
            <form onSubmit={sendDataToBackend}>
                <label htmlFor="">Username : </label>
                <input type="text" onChange={(e) =>setUser(e.target.value)} placeholder='Enter A Username'/>
                <br />
                <label htmlFor="">Password : </label>
                <input type="text" onChange={(e) => setPass(e.target.value)} placeholder='Enter A Password'/>
                <br />
                <br />
                <button >Submit</button>
            </form>
            {/* <button onClick={sendDataToBackend}>submit 2</button> */}
        </>
    )

}

export default LoginForm




