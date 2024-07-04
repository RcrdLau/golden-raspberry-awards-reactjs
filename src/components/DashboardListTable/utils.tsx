import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { Dispatch as reduxDispatch } from 'redux'
import { apiBaseUrl } from '../../constants/apiBaseUrl'
import { tableMovieYearWinners } from '../../store/tables/actions'

export const HandleSearch = async (
    searchValue: number | undefined,
    setErrorText: Dispatch<SetStateAction<string>>,
    dispatch: reduxDispatch,

) => {
    setErrorText("")

    if (searchValue === undefined) {

        setErrorText("Preencha o campo de busca com um ano valido.")

    } else {

        try {
            const response = await axios.get(
                apiBaseUrl + `?winner=true&year=${searchValue}`
            );

            const data = response.data;
            if (data === undefined) {
                setErrorText("Não foi encontrado nenhum resultado para este ano.")
                let listMovieYearWinners = [{
                    id: "",
                    title: "",
                    year: 0,
                }]
                dispatch(tableMovieYearWinners(listMovieYearWinners));

            } else {
                let listMovieYearWinners: any[] = []
                data.forEach((dataItem: any) => {
                    listMovieYearWinners.push({
                        id: dataItem.id,
                        title: dataItem.title,
                        year: dataItem.year,
                    })
                })
                dispatch(tableMovieYearWinners(listMovieYearWinners));
            }

        } catch (error) {
            setErrorText("Algo deu errado, tente novamente.")
        }
    }
}
