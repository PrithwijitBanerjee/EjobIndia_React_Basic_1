import { useState } from 'react'
import ChildRes from './ChildRes';

const initial_state = {
    name: '',
    email: '',
    course: '',
    status: false
}


const ParentForm = () => {
    const [user, setUser] = useState(initial_state);
    const handleInput = e => {
        if (e.target.name === 'name') {
            setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
        }
        if (e.target.name === 'email') {
            setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
        }
        if (e.target.name === 'course') {
            setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        setUser(prevUsr => ({ ...prevUsr, status: true }));
    }
    const handleReset = e => {
        e.preventDefault();
        setUser(initial_state);
    }
    return (
        <div>
            <fieldset>
                <legend>Students Form</legend>
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <input
                        value={user?.name}
                        type="text"
                        name="name"
                        placeholder='your name'
                        onChange={handleInput} /><br /><br />
                    <input
                        value={user?.email}
                        type="email"
                        name="email"
                        placeholder='xyz@gmail.com'
                        onChange={handleInput} /><br /><br />
                    <label htmlFor='course'>Select Course:</label>
                    <select name="course" id="course" onChange={handleInput}>
                        <option value="Math">Math</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry" selected>Chemistry</option>
                        <option value="Computer Science">Computer Science</option>
                    </select>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </form>
            </fieldset>
            <div className="mt-5">
                {
                    user.status && <ChildRes
                        name={user.name}
                        email={user.email}
                        course={user.course} />
                }
            </div>
        </div>
    )
}

export default ParentForm