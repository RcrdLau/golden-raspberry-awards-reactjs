import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/index"
import SideMenu from ".";

describe("SideMenu", () => {
    test("Deve renderizar o component SideMenu", async () => {
        render(<Provider store={store}>
            <SideMenu />
        </Provider>, { wrapper: BrowserRouter })
        const menuText = screen.getByText('Dashboard');
        expect(menuText).toBeInTheDocument();
    });
});
