import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from "../../store/index"
import Header from '.';

describe('Testes relacionados ao Header', () => {
    test('Deve renderizar o cabeçalho', () => {
        render(<Provider store={store}>
            <Header />
        </Provider>)
        const headerText = screen.getByText('Frontend React Test');
        expect(headerText).toBeInTheDocument();
    })
})