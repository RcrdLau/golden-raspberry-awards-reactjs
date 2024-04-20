import styled from 'styled-components'

export const CommonTableContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;
    padding: 10px;
`;

export const CommonTableTitle = styled.h1`
   font-size: 18px;
   font-weight: bold;
   color: black;
   text-transform: capitalize;
   margin: 6px 0;
`;

export const TableContainer = styled.div`
    margin-top: 6px;
    font-size: 12px;
    font-weight: normal;
    color: black;
    text-transform: capitalize;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* border: 1px solid whitesmoke; */
`;

export const TableHeader = styled.div`
    text-align: center;
    /* border: 1px solid whitesmoke; */
    
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
export const TableTitle = styled.h1`
    font-size: 12px;
    padding: 6px;
    font-weight: bold;
    color: black;
    text-transform: capitalize;
    text-align: left;
    justify-content: start;
    border: 1px solid whitesmoke;
`;

