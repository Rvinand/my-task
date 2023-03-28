import {Option} from "../types";

export const MAIN_PAGE_ROUTE:string = "/main"
export const NOT_AUTH_PAGE_ROUTE:string = "/auth_error"

export const CLIENT_URL = "http://localhost:3000"


export const options: Option[] = [
    {label: "По названию", value: "name"},
    {label: "По описанию", value: "description"},
    {label: "По дате создания", value: "date"}
]