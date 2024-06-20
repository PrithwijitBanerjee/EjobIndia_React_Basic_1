import PropTypes from 'prop-types'

const Welcome = ({ ...props }) => {
    // console.log('props: ', props);
    return (
        <div style={{ border: '2px dotted green', 'borderRadius': '20px', margin: '5px' }}>
            <h4>{(!!props) && `name: ${props?.name} age: ${props?.age}`}</h4>
        </div>
    )
}

Welcome.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
export default Welcome