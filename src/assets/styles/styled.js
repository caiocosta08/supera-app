import styled from 'styled-components/native';

export const BtnCTA = styled.TouchableOpacity`

  flex: 1;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 5px;
  border-color: #fff;
  background-color: #08D6A0;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
  padding: 10px;

`;

export const TxtBtnCTA = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const SectionHeader = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 90%;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #18446B;
`;

export const SectionButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const SectionButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #108AB2;
`;

export const SubjectItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #108AB2;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  padding-left: 20px;
`;

export const SubjectTitle = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`;

export const TrashIcon = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 10px;
  background-color: red;
`;

export const BtnSelect = styled.TouchableOpacity`

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-color: #fff;
  background-color: ${props => props.selected ? "#2A4F90" : "#999"};
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  margin: 5px;

`;

export const TxtBtnSelect = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const SelectionRow = styled.View`

  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;

`;

export const SelectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #2A4F90;
  width: 90%;
`;