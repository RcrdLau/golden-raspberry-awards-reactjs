import styled from 'styled-components'
import { TableHeader4Col, TablesRow4Col } from '../DashboardIntervalTable/style';
import { ITablesRow } from '../DashboardCommonTable/style';

export const CardSubtitle = styled.h2`
   font-size: 16px;
   font-weight: normal;
   color: black;
   text-transform: capitalize;
   margin: 6px 0;
   &:first-letter {
        text-transform: uppercase;
    }
`;

export const TableHeader3Col = styled(TableHeader4Col)`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const TablesRow3Col = styled(TablesRow4Col)`
    grid-template-columns: 1fr 1fr 1fr;
`;

export const SearchContainer = styled.div`
    width: 100%;
    min-height: 24px;
    display: flex;
    padding: 0 12px;
    align-items: center;
`;

export const SearchInput = styled.input`
    width: 100%;
    min-height: 24px;
    background-color: white;
    border: 1px solid gray;
    padding-left: 4px;
    border-radius: 2px;
`;

export const SearchIcon = styled.button`
    width: 24px;
    height: 24px;
    padding: 5px; 
    margin-left: 10px; 
    display: flex;
    align-items: center;
    background-color: #7ab8ff;
    border-radius: 2px;
    & svg {
        width: 28px;
        height: 28px;
    }
`;

export const ErrorMessage = styled.p`
    width: 100%;
    min-height: 11px;
    margin: 6px 10px; 
    color: red;
    font-size: 10px;
    font-weight: normal;
    &:first-letter {
        text-transform: uppercase;
    }
`;