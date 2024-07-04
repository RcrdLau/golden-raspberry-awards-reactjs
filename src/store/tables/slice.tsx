import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MultipleWinners, IntervalWinners, MovieYearWinners, ListWinners } from "./types";


type ITableProps = {
    tableMultipleWinners: MultipleWinners;
    tableTopStudios: MultipleWinners;
    tableIntervalWinners: IntervalWinners;
    tableMovieYearWinners: MovieYearWinners;
    tableListWinners: ListWinners;
    paginationNumber: number;
};

const tableInitialState: ITableProps = {
    tableMultipleWinners: [],
    tableTopStudios: [],
    tableIntervalWinners: {
        maxProducer: "",
        maxInterval: 0,
        maxPreviousWin: 0,
        maxFollowingWin: 0,
        minProducer: "",
        minInterval: 0,
        minPreviousWin: 0,
        minFollowingWin: 0,
    },
    tableMovieYearWinners: [{
        id: "",
        title: "",
        year: 0,
    }],
    tableListWinners: [{
        id: "",
        title: "",
        studios: "",
        producers: "",
        winner: true,
        page: 0,
        year: 1980,
    }],
    paginationNumber: 1,
}

export const tableSlice = createSlice({
    name: "table",
    initialState: tableInitialState,
    reducers: {
        tableMultipleWinners: (state, action: PayloadAction<MultipleWinners>) => {
            state.tableMultipleWinners = action.payload;
        },
        tableTopStudios: (state, action: PayloadAction<MultipleWinners>) => {
            state.tableTopStudios = action.payload;
        },
        tableIntervalWinners: (state, action: PayloadAction<IntervalWinners>) => {
            state.tableIntervalWinners = action.payload;
        },
        tableMovieYearWinners: (state, action: PayloadAction<MovieYearWinners>) => {
            state.tableMovieYearWinners = action.payload;
        },
        tableListWinners: (state, action: PayloadAction<ListWinners>) => {
            state.tableListWinners = action.payload;
        },
        paginationNumber: (state, action: PayloadAction<number>) => {
            state.paginationNumber = action.payload;
        },
    },
});