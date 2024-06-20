import PropTypes from 'prop-types';

const User = ({ user }) => {
    return (
        <>
            <h1>Name: {user?.name}</h1>
            <h1>Age: {user?.age}</h1>
        </>
    )
}

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        id: PropTypes.number,
        disability: PropTypes.bool
    })
    // user: PropTypes.object.isRequired
}
export default User