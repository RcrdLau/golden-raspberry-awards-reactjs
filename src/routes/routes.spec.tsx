import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import { store } from '../store';
import ListPage from '../pages/ListPage';
import SideMenu from '../components/SideMenu';
import userEvent from '@testing-library/user-event';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { GlobalContainer, GlobalStyles, MainContainer } from '../styles/globalStyles';
import Main from './main';

describe('Testes relacionados a Rotas', () => {
    test('Deve renderizar a rota Dashboard', () => {
        const url = "/dashboard"

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[url]}>
                    <Routes>
                        <Route path="/" element={<DashboardPage />}></Route>
                        <Route path="dashboard" element={<DashboardPage />}></Route>
                    </Routes>
                </MemoryRouter>
            </Provider>
        )

        const producerCardText = screen.getByTestId('producers')
        expect(producerCardText).toBeInTheDocument()

        const movieWinnerCardText = screen.getByTestId('movie-winners')
        expect(movieWinnerCardText).toBeInTheDocument()

        const multipleWinnerCardText = screen.getByTestId('multiple-winners')
        expect(multipleWinnerCardText).toBeInTheDocument()

        const top3CardText = screen.getByTestId('top-3')
        expect(top3CardText).toBeInTheDocument()
    });

    test('Deve renderizar a rota List', () => {
        const url = "/list"

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[url]}>
                    <Routes>
                        <Route path="/" element={<DashboardPage />}></Route>
                        <Route path="list" element={<ListPage />}></Route>
                    </Routes>
                </MemoryRouter>
            </Provider>
        )

        const listPageTitle = screen.getByTestId('list-movies')
        expect(listPageTitle).toBeInTheDocument()
    });

    test('Deve navegar da rota Dashboard para rota List', async () => {
        render(
            <Provider store={store}>
                <GlobalContainer>
                    <GlobalStyles />
                    <Header />
                    <MainContainer>
                        <SideMenu></SideMenu>
                        <Main />
                    </MainContainer>
                    <Footer />
                </GlobalContainer>
            </Provider>
            , { wrapper: BrowserRouter })

        const linkRouteList = screen.getByTestId("navigate-list")

        expect(linkRouteList).toBeInTheDocument()

        await userEvent.click(linkRouteList)

        const listPageTitle = await screen.findByTestId('list-movies')

        expect(listPageTitle).toBeInTheDocument()
    });
})
