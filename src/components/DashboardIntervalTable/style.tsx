import styled from 'styled-components'
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

export const TableHeader4Col = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
`;

export const TablesRow4Col = styled.div<ITablesRow>`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: ${props => props.bgcolor};
`;