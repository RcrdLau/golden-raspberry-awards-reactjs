import React, { FC, useEffect } from "react";
import { HeaderMenu, HeaderTitle } from "./style";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { menuActive } from "../../store/sideMenu/actions";

const Header = () => {
    const dispatch = useAppDispatch();
    const currentUrl = window.location.pathname;
    console.log("currentUrl: ", currentUrl)
    useEffect(() => {
        if (currentUrl === "/dashboard") {
            dispatch(menuActive("dashboard"))
        } else {
            dispatch(menuActive("list"))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <HeaderMenu>
            <HeaderTitle>Frontend React Test</HeaderTitle>
        </HeaderMenu>
    );
}

export default Header;