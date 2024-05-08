import { useEffect, useState } from 'react'
import axios from 'axios';
import './LoginForm.css'

function LoginForm() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [formData, setFormData] = useState([])
  const [editId, setEditId] = useState(-1)

  useEffect(() => {
    axios.get('/api/sheet')
      .then((res) => {
        setFormData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleEdit = (id) => {
    axios.get('/api/sheet'+id)
      .then((res) => {
        console.log(res.data);
        // setFormData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      setEditId(id);
  }

  const handleUpadte = async(e) => {
    e.preventDefault();
    const Data = {
      user: user,
      pass : pass
    }
      await axios.put('/api/sheet',Data)
      .then(res => {
        console.log(res.data)
        // location.reload()
        setEditId(-1)
      })
      .catch((err) => {
        console.log(err)
      })
    

    console.log(Data);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = {
      user: user,
      pass: pass
    }
    try {
      await axios.post('/api/sheet', Data);
      console.log("User Added Successfully");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h2>UserLogin</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username : </label>
        <input type="text" onChange={(e) => setUser(e.target.value)} placeholder='Enter A Username' />
        <br />
        <label htmlFor="">Password : </label>
        <input type="text" onChange={(e) => setPass(e.target.value)} placeholder='Enter A Password' />
        <br />
        <br />
        <button >Submit</button>
      </form>


      <h2>UserData</h2>
      <p>No of users : {formData.length}</p>

      <div className="App">
        <table>
          <tr>
            <th>UserName</th>
            <th>PassWord</th>
            <th>Action</th>
          </tr>
          {formData.map((form, key) => (
            key === editId ?
              <tr>
                <td><input type="text" value={user} onChange={(e) => setUser(e.target.value)}/></td>
                <td><input type="text" value={pass} onChange={(e) => setPass(e.target.value)}/></td>
                <td><button onClick={handleUpadte}>Update</button></td>
              </tr>
              :
              <tr key={key}>
                <td>{form[0]}</td>
                <td>{form[1]}</td>
                <button onClick={() => handleEdit(key)}>Edit</button>
              </tr>
          ))}
        </table>
      </div>
      {/* <button onClick={sendDataToBackend}>submit 2</button> */}
    </>
  )

}

export default LoginForm




