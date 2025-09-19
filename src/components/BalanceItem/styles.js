import styled from "styled-components/native";

export const Container = styled.View`
  background: #${(props) => props.bg};
  margin: 14px 14px;
  border-radius: 4px;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
  padding-left: 14px;
`;
export const Label = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const Balance = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-size: 30px;
`;
