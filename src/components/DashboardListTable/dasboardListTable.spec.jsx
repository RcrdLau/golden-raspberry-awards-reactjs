import React from "react";
import userEvent from '@testing-library/user-event';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from "../../store/index"
import DashboardListTable from "."
import { HandleSearch } from "./utils";

jest.mock("./utils", () => ({
    HandleSearch: jest.fn(),
}));

describe('Dashboard List Table', () => {
    test('Deve fazer uma chamada de API com sucesso', async () => {
        HandleSearch.mockResolvedValueOnce({
            id: "1",
            title: "Title Test",
            year: 2000,
        });
        render(<Provider store={store}>
            <DashboardListTable />
        </Provider>)

        const searchInput = screen.getByPlaceholderText('Search by year')
        const searchButton = screen.getByRole('button')

        userEvent.type(searchInput, "2000")
        userEvent.click(searchButton)

        await expect(HandleSearch).toHaveBeenCalledWith(
            2000,
            expect.any(Function),
            expect.any(Function)
        );

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("winner-title")).toHaveTextContent("Title Test");
            }, 200)
        });


    });
    test('Deve lidar com erro na chamada de API', async () => {
        HandleSearch.mockResolvedValueOnce({});

        render(
            <Provider store={store}>
                <DashboardListTable />
            </Provider>
        );

        const searchButton = screen.getByRole('button')

        userEvent.click(searchButton)

        await expect(HandleSearch).toHaveBeenCalledWith(
            0,
            expect.any(Function),
            expect.any(Function)
        );
    });
});
