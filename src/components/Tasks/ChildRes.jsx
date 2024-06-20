import PropTypes from 'prop-types'

const ChildRes = ({ name, email, course }) => {
    return (
        <div>
            <h1>Student Details: </h1>
            <h3>Name: {name}</h3>
            <h3>Email id: {email}</h3>
            <h3>Course: {course}</h3>
        </div>
    )
}

ChildRes.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    course: PropTypes.string
}

export default ChildRes