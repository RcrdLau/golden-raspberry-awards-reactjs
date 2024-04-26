import axios from 'axios'
import { apiBaseUrl } from '../../constants/apiBaseUrl';
import { Dispatch } from '@reduxjs/toolkit';
import { tableMultipleWinners, tableTopStudios } from '../../store/tables/actions';

export const LoadMultipleWinnersData = async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(apiBaseUrl + "?projection=years-with-multiple-winners");

        const data = response.data.years;

        let listWinners: any[] = [];

        for (let i = 0; i < 3; i++) {
            listWinners.push({
                year: data[i].year,
                winCount: data[i].winnerCount
            });
        }

        dispatch(tableMultipleWinners(listWinners));
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
};

export const LoadTopStudiosData = async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(apiBaseUrl + "?projection=studios-with-win-count");

        const data = response.data;

        // ordenar o array por winCount
        const orderedData = data.studios.sort((a: { winCount: number; }, b: { winCount: number; }) => b.winCount - a.winCount);

        let listTopStudios: any[] = [];

        for (let i = 0; i < 3; i++) {
            listTopStudios.push({
                year: orderedData[i].name ? orderedData[i].name : '',
                winCount: orderedData[i].winCount ? orderedData[i].winCount : '',
            });
        }

        dispatch(tableTopStudios(listTopStudios));
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
};
