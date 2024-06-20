
import PropTypes from 'prop-types';
const StudentRes = ({phy, chem, math}) => {
  return (
        <>
            <h3>Total marks: {+(phy) + +(chem) + +(math)}</h3>
            <h3>Avg Marks: {(+(phy) + +(chem) + +(math)) / 3}</h3>
        </>
  )
}

StudentRes.propTypes = {
    phy: PropTypes.number,
    chem: PropTypes.number,
    math: PropTypes.number,
};
export default StudentRes