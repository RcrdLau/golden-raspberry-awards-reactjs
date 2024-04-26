import React, { useEffect, useState } from "react";
import {
    CardTitle,
    TableContainer,
} from "../DashboardCommonTable/style";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { ListContainer, ListPagination, ListPaginationButton, ListSelect, ListTableHeader, ListTableHeaderContainer, ListTableTitle, YearInput, } from "./style";
import { LoadListData, renderRows } from "./utils";
import { useAppSelector } from "../../store/hooks/useAppSelector";


const ListFilterTable = () => {
    const dispatch = useAppDispatch();
    const { tableListWinners } = useAppSelector((store) => store.table);
    const [yearValue, setYearValue] = useState<string>("2024")
    const [winnerValue, setWinnerValue] = useState<boolean>(true)
    const [pageNumber, setPageNumber] = useState<string>("1")

    const handleChange = (event: { target: { value: any; }; }) => {
        event.target.value === "yes" ? setWinnerValue(true) : setWinnerValue(false)
    };

    useEffect(() => {
        LoadListData(
            pageNumber,
            winnerValue,
            yearValue,
            dispatch
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber])

    return (
        <ListContainer>
            <ListTableHeaderContainer>
                <CardTitle>list movies</CardTitle>
                <TableContainer>
                    <ListTableHeader>
                        <ListTableTitle><h1>ID</h1></ListTableTitle>
                        <ListTableTitle>
                            <h1>year</h1>
                            <YearInput
                                type="text"
                                value={yearValue}
                                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {
                                    setYearValue(e.target.value)
                                }}
                                placeholder="Filter by year"
                                min="0"
                                max={2024}
                                step="1"
                            />
                        </ListTableTitle>
                        <ListTableTitle><h1>title</h1></ListTableTitle>
                        <ListTableTitle>
                            <h1>winner?</h1>
                            <ListSelect onChange={() => handleChange}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </ListSelect>
                        </ListTableTitle>
                    </ListTableHeader>
                    {renderRows(tableListWinners)}
                </TableContainer>
                <ListPagination>
                    <ListPaginationButton active={false} onClick={() => setPageNumber("1")}>{"|<"}</ListPaginationButton>
                    <ListPaginationButton
                        active={false}
                        onClick={() => pageNumber !== "1" && setPageNumber(String(Number(pageNumber) - 1))}
                    >
                        {"<"}
                    </ListPaginationButton>
                    <ListPaginationButton
                        active={pageNumber === "1"}
                        onClick={() => setPageNumber("1")}
                    >
                        1
                    </ListPaginationButton>
                    <ListPaginationButton
                        active={pageNumber === "2"}
                        onClick={() => setPageNumber("2")}
                    >
                        2
                    </ListPaginationButton>
                    <ListPaginationButton
                        active={pageNumber === "3"}
                        onClick={() => setPageNumber("3")}
                    >
                        3
                    </ListPaginationButton>
                    <ListPaginationButton
                        active={pageNumber === "4"}
                        onClick={() => setPageNumber("4")}
                    >
                        4
                    </ListPaginationButton>
                    <ListPaginationButton
                        active={pageNumber === "5"}
                        onClick={() => setPageNumber("5")}
                    >
                        5
                    </ListPaginationButton>
                    <ListPaginationButton
                        active={false}
                        onClick={() => pageNumber !== "5" && setPageNumber(String(Number(pageNumber) + 1))}
                    >
                        {">"}
                    </ListPaginationButton>
                    <ListPaginationButton active={false} onClick={() => setPageNumber("5")}>{">|"}</ListPaginationButton>
                </ListPagination>
            </ListTableHeaderContainer>
        </ListContainer>
    );
}

export default ListFilterTable;
