import { useEffect, useState } from 'react'
import axios from 'axios'

export default function API1() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            // console.log(res.data)
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
        // .finally(()=>{
        //     alert("API Called succesfully")
        // })
    },[])
    return (
        <div>
            <h1>API1</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data, index) => (
                            <tr key={index}>
                                <th>{data.id}</th>
                                <th>{data.name}</th>
                                <th>{data.username}</th>
                                <th>{data.email}</th>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
