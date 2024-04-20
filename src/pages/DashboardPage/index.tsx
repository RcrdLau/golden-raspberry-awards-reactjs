import React from "react";
import {
    ContainerTest3,
    ContainerTest4,
    DashboardCommonTableWrapper,
    DashboardContainer,
    DashboardTableWrapper
} from "./style";
import DashboardCommonTable from "../../components/DashboardCommonTable";

const DashboardPage = () => {

    return (
        <DashboardContainer>
            <DashboardCommonTableWrapper>
                <DashboardCommonTable
                    title={"list years with multiple winners"}
                    tableTitle={""}
                    tableSubtitle={""} />
                <DashboardCommonTable
                    title={"top 3 studios with winners"}
                    tableTitle={""}
                    tableSubtitle={""} />
            </DashboardCommonTableWrapper>
            <DashboardTableWrapper>
                <ContainerTest3>
                    <p>oi</p> <p>oi</p> <p>oi</p> <p>oi</p> <p>oi</p>
                </ContainerTest3>
                <ContainerTest4>
                    tchau
                </ContainerTest4>
            </DashboardTableWrapper>
        </DashboardContainer>
    );
}

export default DashboardPage;
