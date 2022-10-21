import styled from 'styled-components';
export const ContactsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const ItemContacts = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-right: 7px;
`;

export const ContactsInfo = styled.p`
  display: inline-block;
  margin: 0;
  padding: 0;
`;
export const ContactsBtn = styled.button`
  padding: 2px 10px;
  cursor: pointer;
  border-radius: 4px;
  &:hover,
  :focus {
    background-color: #eec900;
  }
`;
