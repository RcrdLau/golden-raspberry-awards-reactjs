import React, {
    useState
} from "react";
import {
    CardTitle,
    TableContainer,
} from "../DashboardCommonTable/style";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import {
    ListContainer,
    ListPagination,
    ListPaginationButton,
    ListSelect,
    ListTableHeader,
    ListTableHeaderContainer,
    ListTableTitle,
    YearInput,
} from "./style";
import {
    LoadListData,
    renderPagination,
    renderRows
} from "./utils";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { listArrayMock } from "../../mocks/ListPaginationMock";

const ListFilterTable = () => {
    const dispatch = useAppDispatch();
    const { tableListWinners, paginationNumber } = useAppSelector((store) => store.table);
    // let paginationNumber = 3
    // se quiser testar o funcionamento da paginação, use o paginationNumber = 3 e insira o listArrayMock na função 'renderRows()' abaixo no codigo
    const [yearValue, setYearValue] = useState<string>("")
    const [winnerValue, setWinnerValue] = useState<string>("all")
    const [pageNumber, setPageNumber] = useState<string>("1")
    const notify = (text: string) => toast(text);
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setWinnerValue(value);
        LoadListData(
            yearValue,
            value,
            dispatch,
            notify
        )
        setPageNumber("1")
    };

    return (
        <ListContainer>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                theme="dark"
            />
            <ListTableHeaderContainer>
                <CardTitle data-testid="list-movies">list movies</CardTitle>
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
                                onBlur={(e: { target: { value: string }; }) => {
                                    LoadListData(
                                        e.target.value,
                                        winnerValue,
                                        dispatch,
                                        notify
                                    )
                                    setPageNumber("1")
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
                            <ListSelect onChange={handleChange}>
                                <option value="all">Yes/No</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </ListSelect>
                        </ListTableTitle>
                    </ListTableHeader>
                    {renderRows(tableListWinners, pageNumber)}
                    {/* {renderRows(listArrayMock, pageNumber)} */}
                </TableContainer>
                <ListPagination>
                    <ListPaginationButton active={false} onClick={() => setPageNumber("1")}>{"|<"}</ListPaginationButton>
                    <ListPaginationButton
                        active={false}
                        onClick={() => pageNumber !== "1" && setPageNumber(String(Number(pageNumber) - 1))}
                    >
                        {"<"}
                    </ListPaginationButton>
                    {renderPagination(
                        paginationNumber,
                        pageNumber,
                        setPageNumber
                    )}
                    <ListPaginationButton
                        active={false}
                        onClick={() => pageNumber !== String(paginationNumber) && setPageNumber(String(Number(pageNumber) + 1))}
                    >
                        {">"}
                    </ListPaginationButton>
                    <ListPaginationButton active={false} onClick={() => setPageNumber(String(paginationNumber))}>{">|"}</ListPaginationButton>
                </ListPagination>
            </ListTableHeaderContainer>
        </ListContainer>
    );
}

export default ListFilterTable;
