import React, { FC } from "react";
import { CommonTableContainer, CommonTableTitle, TableContainer, TableHeader, TableTitle } from "./style";

interface IDashboardCommonTable {
    title: string,
    tableTitle: string,
    tableSubtitle: string,
}

const DashboardCommonTable: FC<IDashboardCommonTable> = (props): JSX.Element => {

    return (
        <CommonTableContainer>
            <CommonTableTitle>{props.title}</CommonTableTitle>
            <TableContainer>

                <TableHeader>
                    <TableTitle>Ano</TableTitle>
                    <TableTitle>Informação</TableTitle>
                </TableHeader>
                <div className="row">
                    <div className="cell">2022</div>
                    <div className="cell">Informação para o ano de 2022</div>
                </div>
                <div className="row">
                    <div className="cell">2023</div>
                    <div className="cell">Informação para o ano de 2023</div>
                </div>
                <div className="row">
                    <div className="cell">2024</div>
                    <div className="cell">Informação para o ano de 2024</div>
                </div>
            </TableContainer>
        </CommonTableContainer>
    );
}

export default DashboardCommonTable;
