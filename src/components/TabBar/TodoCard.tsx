import Card from 'react-bootstrap/Card';
import React, {FC} from "react";
import {ITodo} from "../../types";
import {Badge, CloseButton, Col, Container, Form, Row} from "react-bootstrap";
import {removeTodo, toggleTodo} from "../../redux/slices/todo.slice";
import {useAppDispatch} from "../../redux/hooks";

const TodoCard: FC<ITodo> = (
    {
        id,
        title,
        description,
        isCompleted,
        createdAt,
        priority
    }
) => {

    const dispatch = useAppDispatch()

    const creationDate = new Date(createdAt).toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });

    let color: string

    switch (priority) {
        case "Низкий":
            color = "primary"
            break
        case "Средний":
            color = "warning"
            break
        case "Высокий":
            color = "danger"
            break
        default:
            color = "secondary"
            break
    }

    function statusToggleHandler(id: number) {
        // @ts-ignore
        const todos = JSON.parse(localStorage.getItem("todos"))

        todos.forEach((todo: { id: number; }) => {
            if (todo.id === id) {
                // @ts-ignore
                todo.isCompleted = !todo.isCompleted
            }
        })
        localStorage.setItem("todos", JSON.stringify(todos))

        dispatch(toggleTodo(id))

    }

    function deleteHandler(id: number) {
        // @ts-ignore
        let todos = JSON.parse(localStorage.getItem("todos"))

        todos = todos.filter((todo: { id: any; }) => todo.id !== id)
        localStorage.setItem("todos", JSON.stringify(todos))

        dispatch(removeTodo(id))
    }

    return (
        <Card bg={isCompleted ? "success" : "dark"} text="white">
            <Card.Header>
                <div style={{display: "flex"}}>
                    <div style={{marginRight: "30px"}}>Дата создания: {creationDate}</div>
                    {priority !== "Без приоритета" && <Badge bg={color}>{priority}</Badge>}
                </div>
            </Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col xs={"auto"}>
                            <Form.Check type="checkbox" checked={isCompleted}
                                        onChange={() => statusToggleHandler(id)}/>
                        </Col>
                        <Col>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{description}</Card.Text>

                        </Col>
                        <Col xs={"auto"} className={"mb-auto mt-auto"}>
                            <CloseButton variant="white" onClick={() => deleteHandler(id)}/>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default TodoCard;