import {MAIN_PAGE_ROUTE} from "../utils/consts";
import MainPage from "../pages/Main.page";
import NotFoundPage from "../pages/PageNotFound/NotFoundPage";

interface RouteI {
    path: string,
    Component: () => JSX.Element
}

export const publicRoutes:RouteI[] = [
    {
        path: "/",
        Component: MainPage
    },
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: "*",
        Component: NotFoundPage
    }
]