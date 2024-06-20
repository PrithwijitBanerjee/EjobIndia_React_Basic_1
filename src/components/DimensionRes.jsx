import PropTypes from 'prop-types';
const DimensionRes = ({ amt, rate, time }) => {
    return (
        <>
            <h3>Pricipal Amt is : {amt}</h3>
            <h3>Rate is : {rate}</h3>
            <h3>Time is : {time}</h3>
            <h3>SI is : {(amt * rate * time) / 100}</h3>
            <h3>Total Amt is: {+((amt * rate * time) / 100) + +(amt)}</h3>
        </>
    )
}

DimensionRes.propTypes = {
    amt: PropTypes.number,
    rate: PropTypes.number,
    time: PropTypes.number,
};
export default DimensionRes