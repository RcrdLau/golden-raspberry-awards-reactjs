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
import { renderEmptyTable } from "./utils";

interface IDashboardCommonTable {
    title: string,
    tableTitle: string,
    tableSubtitle: string,
    data: MultipleWinners
    dataTestId: string
}

const DashboardCommonTable: FC<IDashboardCommonTable> = (props): JSX.Element => {
    return (
        <CommonTableContainer>
            <CardTitle data-testid={props.dataTestId}>{props.title}</CardTitle>
            <TableContainer>
                <TableHeader>
                    <TableTitle>{props.tableTitle}</TableTitle>
                    <TableTitle>{props.tableSubtitle}</TableTitle>
                </TableHeader>
                {props.data.length === 0 && renderEmptyTable(props.tableTitle)}
                {props.data.map((item, index) => (
                    <TablesRow key={index} bgcolor={index % 2 === 0 ? "white" : "whitesmoke"}>
                        <TableText data-testid={`testid-${item.year}-${index}`}>{item ? item.year : ""}</TableText>
                        <TableText data-testid={`testid-${item.winCount}-${index}`}>{item ? item.winCount : ""}</TableText>
                    </TablesRow>
                ))}
            </TableContainer>
        </CommonTableContainer>
    );
}

export default DashboardCommonTable;
