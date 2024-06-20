import PropTypes from 'prop-types';

const PropsChild = (props) => {
    return (
        <div>
            <h1>Data1: {props.dt}</h1>
            <h1>Data2: {props.dt2}</h1>
        </div>
    )
}

PropsChild.propTypes = {
    dt: PropTypes.string,
    dt2: PropTypes.string
}
export default PropsChild