import React from "react";
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from "../../store/index"
import DashboardIntervalTable from "."
import { LoadIntervalWinnersData } from "./utils";

jest.mock("./utils", () => ({
    LoadIntervalWinnersData: jest.fn(),
}));

describe('LoadIntervalWinnersData', () => {
    test('Deve fazer uma chamada de API com sucesso', async () => {
        LoadIntervalWinnersData.mockResolvedValueOnce({
            maxProducer: "Producer A",
            maxInterval: 10,
            maxPreviousWin: 2020,
            maxFollowingWin: 2022,
            minProducer: "Producer B",
            minInterval: 5,
            minPreviousWin: 2019,
            minFollowingWin: 2024,
        });
        render(<Provider store={store}>
            <DashboardIntervalTable />
        </Provider>)
        expect(LoadIntervalWinnersData).toHaveBeenCalled();

        await waitFor(() => {
            expect(screen.getByTestId("producers")).toHaveTextContent("producers with longest and shortest interval between wins");
        });
        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("max-producer")).toHaveTextContent("Producer A");
            }, 200)
        });
        await waitFor(() => {
            setTimeout(() => {
                expect(screen.getByTestId("min-producer")).toHaveTextContent("Producer B");
            }, 200)
        });

    });
    test('Deve lidar com erro na chamada de API', async () => {
        LoadIntervalWinnersData.mockResolvedValueOnce({});

        render(
            <Provider store={store}>
                <DashboardIntervalTable />
            </Provider>
        );

        expect(LoadIntervalWinnersData).toHaveBeenCalled();

        expect(screen.getByTestId("max-producer")).toHaveTextContent("");
    });
});
