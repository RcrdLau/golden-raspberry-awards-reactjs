import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ISideMenuProps = {
    activeMenu: string;
};

const sideMenuInitialState: ISideMenuProps = {
    activeMenu: "dashboard",
}

export const sideMenuSlice = createSlice({
    name: "sideMenu",
    initialState: sideMenuInitialState,
    reducers: {
        menuActive: (state, action: PayloadAction<string>) => {
            state.activeMenu = action.payload;
        },
    },
});