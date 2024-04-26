import React, { useEffect } from "react";
import {
    CommonTableContainer,
    CardTitle,
    TableContainer,
    TableText,
    TableTitle
} from "../DashboardCommonTable/style";
import {
    CardSubtitle,
    TableHeader4Col,
    TablesRow4Col
} from "./style";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { LoadIntervalWinnersData } from "./utils";

const DashboardIntervalTable = () => {
    const dispatch = useAppDispatch();
    const { tableIntervalWinners } = useAppSelector((store) => store.table);

    useEffect(() => {
        LoadIntervalWinnersData(dispatch)
    }, [])

    return (
        <CommonTableContainer>
            <CardTitle>producers with longest and shortest interval between wins</CardTitle>
            <CardSubtitle>maximum</CardSubtitle>
            <TableContainer>
                <TableHeader4Col>
                    <TableTitle>producer</TableTitle>
                    <TableTitle>interval</TableTitle>
                    <TableTitle>previous year</TableTitle>
                    <TableTitle>following year</TableTitle>
                </TableHeader4Col>
                <TablesRow4Col bgcolor="white">
                    <TableText>{tableIntervalWinners.maxProducer}</TableText>
                    <TableText>{tableIntervalWinners.maxInterval}</TableText>
                    <TableText>{tableIntervalWinners.maxPreviousWin}</TableText>
                    <TableText>{tableIntervalWinners.maxFollowingWin}</TableText>
                </TablesRow4Col>
            </TableContainer>
            <CardSubtitle>minimum</CardSubtitle>
            <TableContainer>
                <TableHeader4Col>
                    <TableTitle>producer</TableTitle>
                    <TableTitle>interval</TableTitle>
                    <TableTitle>previous year</TableTitle>
                    <TableTitle>following year</TableTitle>
                </TableHeader4Col>
                <TablesRow4Col bgcolor="white">
                    <TableText>{tableIntervalWinners.minProducer}</TableText>
                    <TableText>{tableIntervalWinners.minInterval}</TableText>
                    <TableText>{tableIntervalWinners.minPreviousWin}</TableText>
                    <TableText>{tableIntervalWinners.minFollowingWin}</TableText>
                </TablesRow4Col>
            </TableContainer>
        </CommonTableContainer>
    );
}

export default DashboardIntervalTable;
