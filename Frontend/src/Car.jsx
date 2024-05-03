import { useState,useEffect } from "react"
import axios from "axios"



function Car() {

    let [cars,setCars] = useState([])

    useEffect(()=> {
        axios.get('/api/car')
        .then((res)=>{
          setCars(res.data)
        })
        .catch((error)=>{
          console.log(error)
        })
      },[])


    return(
        <>
        <h1>Car Data</h1>
        <p>Number Of Car : {cars.length}</p>
        <hr />

                
            
        {
            cars.map((car,index) =>(
                <div key={car.id}>
                    <p>Id : {car.id}</p>
                    <p>Name : {car.model}</p>
                    <p>Year : {car.year}</p>
                </div>
            
            ))
        }
            
        </>
    )
}

export default Car