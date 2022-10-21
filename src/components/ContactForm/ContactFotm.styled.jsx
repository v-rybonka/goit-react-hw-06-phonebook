import styled from 'styled-components';

export const ContactsForm = styled.form`
  display: flex;
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  padding-left: 5px;
`;
export const InputContacts = styled.input`
  display: block;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 4px;
  &:focus,
  :hover {
    background-color: #add8e6;
  }
`;
export const BoxImg = styled.div`
  width: 180px;
  height: 180px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const Wrap = styled.div`
  margin-left: auto;
`;
export const FormBtn = styled.button`
  padding: 2px 10px;

  cursor: pointer;
  border-radius: 4px;
  &:hover,
  :focus {
    background-color: #eec900;
  }
`;
