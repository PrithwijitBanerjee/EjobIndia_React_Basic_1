import PropTypes from 'prop-types';

const SignOutBtn = ({ setProfile }) => {
    return (
        <button onClick={() => setProfile({
            isLoggedIn: false
        })}>SignOut</button>
    )
}

SignOutBtn.propTypes = {
    setProfile: PropTypes.func
}
export default SignOutBtn