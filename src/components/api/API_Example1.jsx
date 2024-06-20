import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function API_Example1() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                // console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => {
                // alert("API Execution Completed")
            })
    }, [])
    return (
        <div>
            <h2>API_Example1</h2>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data, index) => {
                            return <tr key={index}>
                                <td>{data.userId}</td>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
