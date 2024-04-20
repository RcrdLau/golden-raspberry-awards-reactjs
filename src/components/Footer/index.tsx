import React, { FC } from "react";
import { HeaderMenu, HeaderTitle } from "../Header/style";
import { useAppSelector } from "../../store/hooks/useAppSelector";

// import { useNavigate } from "react-router-dom";

interface IFooter {
    firstName?: string,
}

const Footer: FC<IFooter> = (props): JSX.Element => {
    // let navigate = useNavigate();
    const { counter } = useAppSelector((store) => store.counter);

    return (
        <HeaderMenu>
            <HeaderTitle>Footerr</HeaderTitle><p>{counter}</p>
        </HeaderMenu>
    );
}

export default Footer;