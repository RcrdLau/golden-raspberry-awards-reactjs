import React, { useEffect } from "react";
import {
    DashboardCommonTableWrapper,
    DashboardContainer,
    DashboardTableWrapper
} from "./style";
import DashboardCommonTable from "../../components/DashboardCommonTable";
import {
    LoadMultipleWinnersData,
    LoadTopStudiosData
} from "./utils";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import DashboardIntervalTable from "../../components/DashboardIntervalTable";
import DashboardListTable from "../../components/DashboardListTable";

const DashboardPage = () => {
    const dispatch = useAppDispatch();
    const { tableMultipleWinners, tableTopStudios } = useAppSelector((store) => store.table);
    useEffect(() => {
        LoadMultipleWinnersData(dispatch)
        LoadTopStudiosData(dispatch)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <DashboardContainer>
            <DashboardCommonTableWrapper>
                <DashboardCommonTable
                    title={"list years with multiple winners"}
                    tableTitle={"year"}
                    tableSubtitle={"win count"}
                    data={tableMultipleWinners}
                />
                <DashboardCommonTable
                    title={"top 3 studios with winners"}
                    tableTitle={"name"}
                    tableSubtitle={"win count"}
                    data={tableTopStudios}
                />
            </DashboardCommonTableWrapper>
            <DashboardTableWrapper>
                <DashboardIntervalTable />
                <DashboardListTable />
            </DashboardTableWrapper>
        </DashboardContainer>
    );
}

export default DashboardPage;
