import axios from 'axios'
import { apiBaseUrl } from '../../constants/apiBaseUrl';
import { Dispatch } from '@reduxjs/toolkit';
import { tableIntervalWinners } from '../../store/tables/actions';

export const LoadIntervalWinnersData = async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(
            apiBaseUrl + "?projection=max-min-win-interval-for-producers"
        );

        const data = response.data;
        let listIntervalWinners = {
            maxProducer: data.max[0].producer,
            maxInterval: data.max[0].interval,
            maxPreviousWin: data.max[0].previousWin,
            maxFollowingWin: data.max[0].followingWin,
            minProducer: data.min[0].producer,
            minInterval: data.min[0].interval,
            minPreviousWin: data.min[0].previousWin,
            minFollowingWin: data.min[0].followingWin,
        }

        dispatch(tableIntervalWinners(listIntervalWinners));
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
};
