import React from "react";
import {
    Routes,
    Route,
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
// pages
import DashboardPage from "../pages/DashboardPage";
import ListPage from "../pages/ListPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage />,
    },
]);

const Main = () => (
    <Routes>
        <Route
            path="/"
            element={<Navigate to="/dashboard" />}
        />
        <Route
            path="*"
            element={<Navigate to="/dashboard" />}
        />
        <Route
            path="/dashboard"
            element={<DashboardPage />}
        />
        <Route
            path="/list"
            element={<ListPage />}
        />
    </Routes>
);

export default Main;
