import React from "react";
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from "../../store/index"
import DashboardPage from "../../pages/DashboardPage"
import { LoadMultipleWinnersData, LoadTopStudiosData } from "../../pages/DashboardPage/utils";

jest.mock("../../pages/DashboardPage/utils", () => ({
    LoadMultipleWinnersData: jest.fn(),
    LoadTopStudiosData: jest.fn(),
}));


describe('DashboardCommonTable', () => {
    test('Deve fazer uma chamada de API com sucesso da Multiple Winners Data', async () => {
        LoadMultipleWinnersData.mockResolvedValueOnce([
            {
                year: "1980",
                winCount: "2"
            },
            {
                year: "1990",
                winCount: "4"
            },
            {
                year: "2000",
                winCount: "3"
            },
        ]);

        render(<Provider store={store}>
            <DashboardPage />
        </Provider>)

        expect(LoadMultipleWinnersData).toHaveBeenCalled();

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("testid-1980-0")).toHaveTextContent("1980");
            }, 200)
        });

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("testid-1990-1")).toHaveTextContent("1990");
            }, 200)
        });

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("testid-2000-2")).toHaveTextContent("2000");
            }, 200)
        });

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("testid-2-0")).toHaveTextContent("2");
            }, 200)
        });

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("testid-4-1")).toHaveTextContent("4");
            }, 200)
        });

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("testid-3-2")).toHaveTextContent("3");
            }, 200)
        });

    });

    test('Deve lidar com erro na chamada de API da Multiple Winners Data', async () => {
        LoadMultipleWinnersData.mockResolvedValueOnce([]);

        render(
            <Provider store={store}>
                <DashboardPage />
            </Provider>
        );

        expect(LoadMultipleWinnersData).toHaveBeenCalled();

        expect(screen.getByTestId("year-empty")).toHaveTextContent("");
        expect(screen.getByTestId("year-win-count-empty")).toHaveTextContent("");
    });

    test('Deve fazer uma chamada de API com sucesso da Top 3 Studios', async () => {
        LoadTopStudiosData.mockResolvedValueOnce([
            {
                name: "Columbia Pictures",
                winCount: "7"
            },
            {
                name: "Paramount Pictures",
                winCount: "6"
            },
            {
                name: "Warner Bros.",
                winCount: "5"
            },
        ]);

        render(<Provider store={store}>
            <DashboardPage />
        </Provider>)

        expect(LoadTopStudiosData).toHaveBeenCalled();

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("testid-Columbia Pictures-0")).toHaveTextContent("Columbia Pictures");
            }, 200)
        });

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("testid-Paramount Pictures-1")).toHaveTextContent("Paramount Pictures");
            }, 200)
        });

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("testid-Warner Bros.-2")).toHaveTextContent("Warner Bros.");
            }, 200)
        });

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("testid-7-0")).toHaveTextContent("7");
            }, 200)
        });

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("testid-6-1")).toHaveTextContent("6");
            }, 200)
        });

        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("testid-5-2")).toHaveTextContent("5");
            }, 200)
        });

    });

    test('Deve lidar com erro na chamada de API da Top 3 Studios', async () => {
        LoadTopStudiosData.mockResolvedValueOnce([]);

        render(
            <Provider store={store}>
                <DashboardPage />
            </Provider>
        );

        expect(LoadTopStudiosData).toHaveBeenCalled();

        expect(screen.getByTestId("name-empty")).toHaveTextContent("");
        expect(screen.getByTestId("name-win-count-empty")).toHaveTextContent("");
    });
});