import styled from 'styled-components'

export const MenuContainer = styled.aside`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: whitesmoke;
`;

export const MenuList = styled.ul`
    margin: 14px;
    font-size: 14px;
`;

export const MenuListItemActive = styled.li`
    margin-bottom: 6px;
    cursor: pointer;
    color:  blue;
    font-weight: bold;
    `;
/* color: ${props => props.active ? "blue" : "black"}; */
/* font-weight: ${props => props.active ? "bold" : "normal"}; */

export const MenuListItem = styled.li`
    margin-bottom: 6px;
    cursor: pointer;
    color:  black;
    font-weight: normal;
`;

