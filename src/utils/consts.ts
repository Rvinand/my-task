import {Option} from "../types";

export const MAIN_PAGE_ROUTE:string = "/main"


export const options: Option[] = [
    {label: "По названию", value: "name"},
    {label: "По описанию", value: "description"},
    {label: "По дате создания", value: "date"}
]