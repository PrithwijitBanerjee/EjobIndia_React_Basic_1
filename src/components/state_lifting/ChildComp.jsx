import PropTypes from 'prop-types'

const ChildComp = ({ count, setCount }) => {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>increment count by one</button>
        </div>
    )
}

ChildComp.propTypes = {
    count: PropTypes.number,
    setCount: PropTypes.func
}

export default ChildComp