import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import Layout from "../components/templates/Layout/Layout";
import PageNotFound from "../components/pages/PageNotFound";
import routes from "./index"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: routes
    },
]);

export const Router = () => {
    return (
        <RouterProvider
            router={router}
        />
    );
};