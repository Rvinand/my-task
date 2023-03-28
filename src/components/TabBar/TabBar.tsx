import React, {FC, useEffect, useState} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import Search from "../ToolBar/Search";
import TodoList from "./TodoList";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setTodos} from "../../redux/slices/todo.slice";

interface TabBarProps {
    sort: string
}

const TabBar: FC<TabBarProps> = ({sort}) => {

    const [completedSearch, setCompletedSearch] = useState<string>("")
    const [unCompletedSearch, setUnCompletedSearch] = useState<string>("")

    let {todos} = useAppSelector(state => state.todos)

    const completedTodos = todos.filter(t => t.isCompleted)
    const notCompletedTodos = todos.filter(t => !t.isCompleted)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem("todos")) {
            // @ts-ignore
            dispatch(setTodos(JSON.parse(localStorage.getItem("todos"))))
        } else {
            localStorage.setItem("todos", JSON.stringify([]))
        }

    }, [dispatch])

    return (
        <Tabs
            defaultActiveKey="1"
            className="mb-3"
        >
            <Tab eventKey="1" title="Не выполненные">
                <Search search={unCompletedSearch} setSearch={setUnCompletedSearch}
                        labelText={"Искать задачу"}/>
                <TodoList todos={notCompletedTodos} searchQuery={unCompletedSearch} sort={sort}/>
            </Tab>
            <Tab eventKey="2" title="Выполненные">
                <Search search={completedSearch} setSearch={setCompletedSearch} labelText={"Искать задачу"}/>
                <TodoList todos={completedTodos} searchQuery={completedSearch} sort={sort}/>
            </Tab>

        </Tabs>
    );
};

export default TabBar;