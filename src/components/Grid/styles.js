import styled from 'styled-components'

export const Table = styled.table`
max-width: 1120px;
width: 98%;
margin: 20px auto;
background-color: #fff;
padding: 20px;
border-radius: 5px;
`

export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
  border-radius: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`


