import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #f0f4ff;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 24px;
`;

export const Name = styled.Text`
  font-size: 24px;
  margin-top: 8px;
  margin-bottom: 24px;
  padding: 0 14px;
  color: #121212;
`;

export const NewLink = styled.TouchableOpacity`
  background-color: #3b3dbf;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const NewText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #c62c36;
`;

export const LogoutText = styled.Text`
  color: #c62c36;
  font-size: 18px;
  font-weight: bold;
`;
