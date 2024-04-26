import React, { FC } from "react";
import {
    CommonTableContainer,
    CardTitle,
    TableContainer,
    TableHeader,
    TablesRow,
    TableText,
    TableTitle
} from "./style";
import { MultipleWinners } from "../../store/tables/types";

interface IDashboardCommonTable {
    title: string,
    tableTitle: string,
    tableSubtitle: string,
    data: MultipleWinners
}

const DashboardCommonTable: FC<IDashboardCommonTable> = (props): JSX.Element => {

    return (
        <CommonTableContainer>
            <CardTitle>{props.title}</CardTitle>
            <TableContainer>
                <TableHeader>
                    <TableTitle>{props.tableTitle}</TableTitle>
                    <TableTitle>{props.tableSubtitle}</TableTitle>
                </TableHeader>
                {props.data.map((item, index) => (
                    <TablesRow key={index} bgcolor={index % 2 === 0 ? "white" : "whitesmoke"}>
                        <TableText>{item ? item.year : ""}</TableText>
                        <TableText>{item ? item.winCount : ""}</TableText>
                    </TablesRow>
                ))}
            </TableContainer>
        </CommonTableContainer>
    );
}

export default DashboardCommonTable;
