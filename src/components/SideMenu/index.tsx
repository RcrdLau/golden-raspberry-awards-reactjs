import React, { FC } from "react";
import { MenuContainer, MenuList, MenuListItem, MenuListItemActive } from "./style";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { menuActive } from "../../store/sideMenu/actions";
import { useAppSelector } from "../../store/hooks/useAppSelector";

interface ISideMenu {
    firstName?: string,
}

const SideMenu: FC<ISideMenu> = (props): JSX.Element => {
    const navigate = useNavigate();
    const { activeMenu } = useAppSelector((store) => store.sideMenu);
    const dispatch = useAppDispatch();

    return (
        <MenuContainer>
            <MenuList>
                {activeMenu === "dashboard" ?
                    (
                        < MenuListItemActive
                            onClick={() => {
                                navigate("/dashboard")
                                dispatch(menuActive("dashboard"))
                            }}
                        >
                            Dashboard
                        </MenuListItemActive>
                    ) :
                    (
                        <MenuListItem
                            onClick={() => {
                                navigate("/dashboard")
                                dispatch(menuActive("dashboard"))
                            }}
                        >
                            Dashboard
                        </MenuListItem>
                    )
                }
                {activeMenu === "list" ?
                    (
                        < MenuListItemActive
                            onClick={() => {
                                navigate("/list")
                                dispatch(menuActive("list"))
                            }}
                        >
                            List
                        </MenuListItemActive>
                    ) :
                    (
                        <MenuListItem
                            onClick={() => {
                                navigate("/list")
                                dispatch(menuActive("list"))
                            }}
                        >
                            List
                        </MenuListItem>
                    )
                }
            </MenuList>
        </MenuContainer >
    );
}

export default SideMenu;