import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from "../../store/index"
import Footer from '.';

describe('Testes relacionados ao Footer', () => {
    test('Deve renderizar o rodapé', () => {
        render(<Provider store={store}>
            <Footer />
        </Provider>)
        const footerText = screen.getByText('Footer');
        expect(footerText).toBeInTheDocument();
    })
})