import React, {FC} from 'react';
import {Alert, Col, Row, Spinner} from "react-bootstrap";
import TodoCard from "./TodoCard";
import {ITodo} from "../../types";
import {useAppSelector} from "../../redux/hooks";

interface TodoListProps {
    todos: ITodo[]
    searchQuery: string,
    sort: string
}

const TodoList: FC<TodoListProps> = ({todos, searchQuery, sort}) => {

    let {error, status} = useAppSelector(state => state.todos)

    if (searchQuery) {
        todos = todos.filter((todo) => {
            return todo.title.toLowerCase().includes(searchQuery.toLowerCase())
        })
    }

    const compareTodosByTitle = (a: ITodo, b: ITodo): -1 | 0 | 1 => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }
    const compareTodosByDescription = (a: ITodo, b: ITodo): -1 | 0 | 1 => {
        if (a.description < b.description) return -1;
        if (a.description > b.description) return 1;
        return 0;
    }
    const compareTodosByDate = (a: ITodo, b: ITodo) => {
        const firstDate: Date = new Date(a.createdAt)
        const secondDate: Date = new Date(b.createdAt)
        // @ts-ignore
        return secondDate - firstDate
    }

    const sortTodos = () => {
        if (sort && sort !== "default") {
            switch (sort) {
                case "name":
                    todos = [...todos].sort(compareTodosByTitle)
                    return
                case "description":
                    todos = [...todos].sort(compareTodosByDescription)
                    return
                case "date":
                    todos = [...todos].sort(compareTodosByDate)
                    return;
                default:
                    return
            }
        }
    }

    sortTodos()


    return (
        <Row xs={1} className="g-4">
            {
                error && <Alert variant={"danger"}>
                    {error}
                </Alert>
            }
            {
                status === "loading" &&
                <Row className="justify-content-md-center">
                    <Spinner animation="grow"/>
                </Row>
            }
            {
                todos.length !== 0
                ? todos.map((todo, i) => (
                    <Col key={i}>
                        <TodoCard
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            isCompleted={todo.isCompleted}
                            createdAt={todo.createdAt}
                            priority={todo.priority}
                        />
                    </Col>
                ))
                    : <div className={"text-center"}>Нет задач</div>
            }
        </Row>
    );
};

export default TodoList;