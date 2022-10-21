import PropTypes from 'prop-types';
import { SectionContacts, TitleContact } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <SectionContacts>
      <TitleContact>{title}</TitleContact>
      {children}
    </SectionContacts>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
