import { useEffect, useLayoutEffect, useState } from "react"


const Hook_Example1 = () => {
    const [student, setStudent] = useState({
        name: '',
        email: '',
        age: null
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setStudent({
                name: 'John Doe',
                email: 'john98@gmail.com',
                age: 47
            });
        }, 2000);
        return () => { //clean up function ....
            clearTimeout(timer);
        }
    }, []); // works as componentDidMount() in Class Component ...

    useLayoutEffect(() => {
        alert('are you ready to watch the ui');
    }, []); // works as componentWillMount() in Class Component ...
    
    useLayoutEffect(() => {
        alert('this useLayoutEffect called as componentWillMount() as well as componentWillUpdate()');
    },[student]);
    
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="row">
                <div className="col-12">
                    <ul>
                        <li>Name: {student.name}</li>
                        <li>Email Id: {student.email}</li>
                        <li>Age: {student.age}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hook_Example1