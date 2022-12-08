import styled from "styled-components";


export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin: ${props => props.theme.space[1]}px;
  padding: ${props => props.theme.space[2]}px ${props => props.theme.space[3]}px;
  border: none;
  border-radius: 2px;
  color: ${props => props.theme.colors.secondaryTextColor};
  background-color: ${props => props.theme.colors.isOnline};
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.colors.isOffline};
  }
  > svg {
    margin-right: ${props => props.theme.space[2]}px
  }
`;

export const Button = ({ icon: Icon, children }) => {
  return (
    <StyledButton>
      {Icon && <Icon size='16px' />}
      {children}
    </StyledButton>
  );
};