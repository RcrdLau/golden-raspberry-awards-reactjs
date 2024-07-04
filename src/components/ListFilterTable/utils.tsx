import axios from "axios";
import { apiBaseUrl } from "../../constants/apiBaseUrl";
import { TableText } from "../DashboardCommonTable/style";
import { ListPaginationButton, ListTablesRow } from "./style";
import { Dispatch } from "redux";
import { tableListWinners, paginationNumber } from "../../store/tables/actions";
import { Dispatch as ReactDispatch, SetStateAction } from "react";

export const renderPagination = (
    paginationNumber: number,
    pageNumber: string,
    setPageNumber: ReactDispatch<SetStateAction<string>>,
) => {
    const rows = [];
    for (let i = 0; i < paginationNumber; i++) {
        rows.push(
            <ListPaginationButton
                key={`id-${i}`}
                active={pageNumber === String(i + 1)}
                onClick={() => setPageNumber(String(i + 1))}
            >
                {i + 1}
            </ListPaginationButton>
        );
    }
    return rows;
}

export const renderRows = (data: any, pageNumber: string) => {
    const rows = [];
    let position = Number(pageNumber) * 15
    let i = position - 15
    for (i; i < position; i++) {
        if (data[0].id === "" || !!!data[i]) {
            rows.push(
                <ListTablesRow key={i} bgcolor={i % 2 === 0 ? "white" : "whitesmoke"}>
                    <TableText></TableText>
                    <TableText></TableText>
                    <TableText></TableText>
                    <TableText></TableText>
                </ListTablesRow>
            );
        } else {
            rows.push(
                <ListTablesRow key={i} bgcolor={i % 2 === 0 ? "white" : "whitesmoke"}>
                    <TableText>{data[i] ? data[i].id : ""}</TableText>
                    <TableText>{data[i] ? data[i].year : ""}</TableText>
                    <TableText>{data[i] ? data[i].title : ""}</TableText>
                    <TableText>{data[i] && data[i].winner === true ? "Yes" : "No"}</TableText>
                </ListTablesRow>
            );
        }
    }
    return rows;
}

export const LoadListData = async (
    yearValue: string,
    winnerValue: string,
    dispatch: Dispatch,
    notify: any
) => {
    try {
        let convertWinnerValue: string = ""
        switch (winnerValue) {
            case "all":
                convertWinnerValue = ""
                break;
            case "yes":
                convertWinnerValue = "true"
                break;
            case "no":
                convertWinnerValue = "false"
                break;
            default:
                convertWinnerValue = ""
        }

        const response = await axios.get(apiBaseUrl + `?page=0&size=15&winner=${convertWinnerValue}&year=${yearValue}`)

        const data = response.data;
        if (response.data.content.length === 0) {
            notify("Nenhum resultado encontrado para o ano escolhido.")
        } else {
            let listWinnersArray: any[] = []

            data.content.forEach((contentItem: any, index: number) => {
                listWinnersArray.push({
                    id: contentItem.id ? contentItem.id : String(index),
                    title: contentItem.title ? contentItem.title : "",
                    studios: "",
                    producers: "",
                    winner: contentItem.winner ? contentItem.winner : "",
                    page: 0,
                    year: contentItem.year ? contentItem.year : "",
                })
            })

            dispatch(paginationNumber(data.totalPages))
            dispatch(tableListWinners(listWinnersArray));
        }

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        notify("Algo deu errado: " + error)
    }
}