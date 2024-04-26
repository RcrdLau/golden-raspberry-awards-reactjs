export type MultipleWinners = {
    year: string,
    winCount: string
}[];

export type TopStudios = {
    name: string,
    winCount: string
}[];

export type IntervalWinners = {
    maxProducer: string,
    maxInterval: number,
    maxPreviousWin: number,
    maxFollowingWin: number,
    minProducer: string,
    minInterval: number,
    minPreviousWin: number,
    minFollowingWin: number,
}

export type MovieYearWinners = {
    id: string,
    title: string,
    year: number,
}

export type ListWinners = {
    id: string;
    title: string;
    studios: string;
    producers: string;
    winner: boolean;
    year: number;
    page: number;
}[]
