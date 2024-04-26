import axios from "axios";
import { apiBaseUrl } from "../../constants/apiBaseUrl";
import { TableText } from "../DashboardCommonTable/style";
import { ListTablesRow } from "./style";
import { Dispatch } from "redux";
import { tableListWinners } from "../../store/tables/actions";

export const renderRows = (data?: any) => {
    const rows = [];

    if (data.length === 1) {

        for (let i = 0; i < 15; i++) {
            rows.push(
                <ListTablesRow key={i} bgcolor={i % 2 === 0 ? "white" : "whitesmoke"}>
                    <TableText></TableText>
                    <TableText></TableText>
                    <TableText></TableText>
                    <TableText></TableText>
                </ListTablesRow>
            );
        }
    } else {
        for (let i = 0; i < 15; i++) {
            rows.push(
                <ListTablesRow key={i} bgcolor={i % 2 === 0 ? "white" : "whitesmoke"}>
                    <TableText>{data[i].id ? data[i].id : ""}</TableText>
                    <TableText>{data[i].year ? data[i].year : ""}</TableText>
                    <TableText>{data[i].title ? data[i].title : ""}</TableText>
                    <TableText>{data[i].winner === true ? "Yes" : "No"}</TableText>
                </ListTablesRow>
            );

        }
        return rows;
    }
}
const generateRandomString = () => {
    return Math.random().toString(36).substring(7);
};

// Função para gerar um valor booleano aleatório
const generateRandomBoolean = () => {
    return Math.random() < 0.5; // Gera true ou false com probabilidade de 50%
};

const RandomListData = Array(75).fill(null).map((_, index) => {
    const pageNumber = Math.floor(index / 15) + 1; // Calcular o número da página
    return {
        id: String(index + 1), // Incrementa o id em 1
        title: `Title ${generateRandomString()}`, // Muda a string do title
        studios: `Studios ${generateRandomString()}`, // Muda a string do studios
        producers: `Producers ${generateRandomString()}`, // Muda a string do producers
        winner: generateRandomBoolean(), // Gera um valor booleano aleatório para winner
        year: 2024,
        page: pageNumber // Adiciona o número da página
    };
});

export const LoadListData = async (
    pageNumber: string,
    winnerValue: boolean,
    yearValue: string,
    dispatch: Dispatch
) => {
    try {
        const response = await axios.get(apiBaseUrl + `?page=1&size=15&winner=true&year=20
        23`)
        // const response = await axios.get(apiBaseUrl + `?page=${pageNumber}&size=15&winner=${winnerValue}&year=${yearValue}`)

        // const data = response.data;
        const data = RandomListData;

        let listWinnersArray = RandomListData.filter(item => item.page === Number(pageNumber));

        dispatch(tableListWinners(listWinnersArray));
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
};

