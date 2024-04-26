import styled from 'styled-components'
import { ITablesRow } from '../DashboardCommonTable/style';

export const ListContainer = styled.section`
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 10px;
`;

export const ListTableHeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;

export const ListTableHeader = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const ListTableTitle = styled.div`
    font-size: 12px;
    /* padding: 20px; */
    height: 70px;
    font-weight: bold;
    color: black;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    background-color: whitesmoke;
`;

export const ListTablesRow = styled.div<ITablesRow>`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: ${props => props.bgcolor};
`;

export const ListPagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 27px;
    background-color: whitesmoke;
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
`;

interface IListPaginationButton {
    active: boolean
}

export const ListPaginationButton = styled.button<IListPaginationButton>`
    background-color: ${props => props.active ? "#7ab8ff" : "transparent"};
    height: 100%;
    width: 27px;
    font-size: 10px;
`;

export const ListSelect = styled.select`
    background-color: white;
    text-align: left;
    height: 27px;
    margin: 6px 16px 0;
    font-size: 12px;
    border-radius: 2px;
    border: 1px solid gray;
  
`;

export const YearInput = styled.input`
    min-height: 27px;
    background-color: white;
    border: 1px solid gray;
    padding-left: 4px;
    font-size: 12px;
    border-radius: 2px;
    margin: 6px 16px 0;
`;