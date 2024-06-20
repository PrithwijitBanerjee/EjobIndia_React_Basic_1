import { useState } from "react"
import StudentRes from "./StudentRes"


const StudentForm = () => {
    const [sub, setSub] = useState({
        phy: '',
        chem: '',
        math: '',
        status: false
    });
    const handleInput = e => {
        if (e.target.name === 'phy') {
            setSub(prevSub => {
                return { ...prevSub, [e.target.id]: e.target.value };
            });
        } else if (e.target.name === 'chem') {
            setSub(prevSub => {
                return { ...prevSub, [e.target.id]: e.target.value };
            });
        } else {
            setSub(prevSub => {
                return { ...prevSub, [e.target.id]: e.target.value };
            });
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        setSub(prevSub => {
            return { ...prevSub, status: true };
        })
    }
    const handleReset = e => {
        e.preventDefault();
        setSub({
            phy: '',
            chem: '',
            math: '',
            status: false
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <label htmlFor="phy">Physics Marks:</label>
                <input type="number" name="phy" id="phy" value={sub.phy} onChange={handleInput} /><br /><br />
                <label htmlFor="chem">Chemistry Marks:</label>
                <input type="number" name="chem" id="chem" value={sub.chem} onChange={handleInput} /><br /><br />
                <label htmlFor="math">Math Marks:</label>
                <input type="number" name="math" id="math" value={sub.math} onChange={handleInput} /><br /><br />
                <button type="submit">submit</button>
                <button type="reset">reset</button>
            </form>
            {
                !!sub?.status && <StudentRes phy={sub.phy} chem={sub.chem} math={sub.math}/>
            }
        </>
    )
}

export default StudentForm