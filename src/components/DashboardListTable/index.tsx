import React, { useState } from "react";
import {
    CommonTableContainer,
    CardTitle,
    TableContainer,
    TableText,
    TableTitle
} from "../DashboardCommonTable/style";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { ErrorMessage, SearchContainer, SearchIcon, SearchInput, TableHeader3Col, TablesRow3Col } from "./style";
import { HandleSearch } from "./utils";

const DashboardListTable = () => {
    const dispatch = useAppDispatch();
    const { tableMovieYearWinners } = useAppSelector((store) => store.table);
    const [searchValue, setSearchValue] = useState<number | undefined>()
    const [errorText, setErrorText] = useState<string>("")

    return (
        <CommonTableContainer>
            <CardTitle>list movie winners by year</CardTitle>
            <SearchContainer>
                <SearchInput
                    type="number"
                    value={searchValue}
                    onChange={(e) => { setSearchValue(Number(e.target.value)) }}
                    placeholder="Search by year"
                    min="0"
                    max={2024}
                    step="1"
                />
                <SearchIcon
                    onClick={() => HandleSearch(
                        searchValue,
                        setErrorText,
                        dispatch
                    )}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={800}
                        height={800}
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16.672 16.641 21 21m-2-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                        />
                    </svg>
                </SearchIcon>
            </SearchContainer>
            <ErrorMessage>{errorText}</ErrorMessage>
            <TableContainer>
                <TableHeader3Col>
                    <TableTitle>id</TableTitle>
                    <TableTitle>year</TableTitle>
                    <TableTitle>title</TableTitle>
                </TableHeader3Col>
                {tableMovieYearWinners.id !== "" && (
                    <TablesRow3Col bgcolor="white">
                        <TableText>{tableMovieYearWinners.id}</TableText>
                        <TableText>{tableMovieYearWinners.year}</TableText>
                        <TableText>{tableMovieYearWinners.title}</TableText>
                    </TablesRow3Col>
                )}
            </TableContainer>
        </CommonTableContainer>
    );
}

export default DashboardListTable;
