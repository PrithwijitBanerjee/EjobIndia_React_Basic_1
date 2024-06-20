import PropTypes from 'prop-types';

const SignInButton = ({setProfile}) => {
    return (
        <button onClick={() => setProfile({
            isLoggedIn: true
        })}>SignIn</button>
    )
}

SignInButton.propTypes = {
    setProfile: PropTypes.func
}
export default SignInButton