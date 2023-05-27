// import PropTypes from 'prop-types';

function FilterButton({ children, clickAction }) {
  return (
    <div aria-hidden="true" className="filter__button" onClick={clickAction}>
      {children}
    </div>
  );
}

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default FilterButton;
