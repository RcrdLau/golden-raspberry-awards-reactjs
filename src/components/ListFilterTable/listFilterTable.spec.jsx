import React from "react";
import userEvent from '@testing-library/user-event';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from "../../store/index"
import ListFilterTable from "."
import { LoadListData } from "./utils";

jest.mock("./utils", () => ({
    LoadListData: jest.fn(),
    renderRows: jest.fn(),
    renderPagination: jest.fn(),
}));

describe('Dashboard List Table', () => {
    test('Deve fazer uma chamada de API com sucesso', async () => {
        LoadListData.mockResolvedValueOnce([
            {
                id: "1",
                title: "Homem-Aranha",
                studios: "",
                producers: "",
                winner: true,
                page: 0,
                year: 1980,
            }
        ]);
        render(<Provider store={store}>
            <ListFilterTable />
        </Provider>)

        const searchInput = screen.getByPlaceholderText('Filter by year')
        const titleListMovies = screen.getByTestId('list-movies')

        userEvent.type(searchInput, "1980")
        userEvent.click(titleListMovies)

        await expect(LoadListData).toHaveBeenCalledWith(
            "1980",
            "all",
            expect.any(Function),
            expect.any(Function)
        );

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByText("Homem-Aranha")).toBeInTheDocument();
            }, 200)
        });


    });
    test('Deve lidar com erro na chamada de API', async () => {
        LoadListData.mockResolvedValueOnce([]);
        render(
            <Provider store={store}>
                <ListFilterTable />
            </Provider>
        );

        const searchInput = screen.getByPlaceholderText('Filter by year')
        const titleListMovies = screen.getByTestId('list-movies')

        userEvent.type(searchInput, "0")
        userEvent.click(titleListMovies)

        await expect(LoadListData).toHaveBeenCalledWith(
            "0",
            "all",
            expect.any(Function),
            expect.any(Function)
        );
        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByText("Algo deu errado:")).toBeInTheDocument();
            }, 200)
        });

    });
});
