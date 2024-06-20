import { useState } from "react"
import User from "./User"


const Users = () => {
    const [user, setUser] = useState({
        id: 1,
        name: 'John Doe',
        age: 27,
        disability: false
    })
    return (
        <>
            <User user={user} setUser={setUser} />
        </>
    )
}

export default Users