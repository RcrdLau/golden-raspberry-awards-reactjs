import styled from 'styled-components'

export const CommonTableContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;

export const CardTitle = styled.h1`
   font-size: 18px;
   font-weight: bold;
   color: black;
   margin: 6px 0;
   &:first-letter {
        text-transform: uppercase;
    }
`;

export const TableContainer = styled.div`
    margin-top: 6px;
    font-size: 12px;
    font-weight: normal;
    color: black;
    text-transform: capitalize;
    display: grid;
    border-radius: 2px;
    grid-template-columns: repeat(1, 1fr);
    border-top: 1px solid gray;
    border-left: 1px solid gray;
`;

export const TableHeader = styled.div`
    text-align: center;
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
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    background-color: whitesmoke;
`;

export interface ITablesRow {
    bgcolor: string
}

export const TablesRow = styled.div<ITablesRow>`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${props => props.bgcolor};
`;

export const TableText = styled.p`
    font-size: 12px;
    padding: 6px;
    font-weight: normal;
    color: black;
    text-transform: capitalize;
    text-align: left;
    justify-content: start;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    min-height: 27px;
`;