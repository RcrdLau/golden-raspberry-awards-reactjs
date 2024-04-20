import React, { FC } from "react";
import { HeaderMenu, HeaderTitle } from "./style";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { counterIncrement } from "../../store/counter/actions";

// import { useNavigate } from "react-router-dom";

interface IHeader {
    firstName?: string,
}

const Header: FC<IHeader> = (props): JSX.Element => {
    // let navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <HeaderMenu>
            <HeaderTitle>Frontend React Test</HeaderTitle><button onClick={() => dispatch(counterIncrement())}>TESTE</button>
        </HeaderMenu>
    );
}

export default Header;