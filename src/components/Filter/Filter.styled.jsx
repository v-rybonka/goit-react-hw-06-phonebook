import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: block;
  text-align: center;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
`;

export const InputFiltr = styled.input`
  display: block;
  width: 80%;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 4px;
  &:focus,
  :hover {
    background-color: #add8e6;
  }
`;
