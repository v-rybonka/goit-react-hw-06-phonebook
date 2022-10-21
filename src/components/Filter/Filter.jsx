import PropTypes from 'prop-types';
import { LabelFilter, InputFiltr } from './Filter.styled';
export const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <LabelFilter htmlFor="filter">Find contacts by name</LabelFilter>
      <InputFiltr
        type="text"
        id="filter"
        value={filter}
        onChange={event => onFilterChange(event.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};
