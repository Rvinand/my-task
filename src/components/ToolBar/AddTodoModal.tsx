import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FC, useState} from "react";
import {Modal} from "react-bootstrap";
import {addTodo, todoSlice} from "../../redux/slices/todo.slice";
import {useAppDispatch} from "../../redux/hooks";

interface AddTodoModalProps {
    onHide: () => void
    show: boolean
}

const AddTodoModal: FC<AddTodoModalProps> = ({onHide, show}) => {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [priorityOption, setPriorityOption] = useState<string>("Без приоритета")

    const dispatch = useAppDispatch()

    function addTodoHandler(): void {
        const {setError} = todoSlice.actions

        if (title === "") {
            onHide()

            dispatch(setError("Вы не ввели название задачи!"))
        } else {

            const newTodo = {
                id: Math.floor(Math.random() * (100000 - 1 + 1) + 1),
                title: title,
                description: description,
                isCompleted: false,
                createdAt: Date.now(),
                priority: priorityOption
            }

            // @ts-ignore
            const todos = JSON.parse(localStorage.getItem("todos"))
            todos.push(newTodo)
            localStorage.setItem("todos", JSON.stringify(todos))
            dispatch(addTodo(newTodo))
        }

        setTitle("")
        setDescription("")
        setPriorityOption("Без приоритета")
        dispatch(setError(null))

        onHide()

    }

    interface Priority {
        label: string
        value: string
    }

    const priority: Priority[] = [
        {label: "Без приоритета", value: "Без приоритета"},
        {label: "Низкий", value: "Низкий"},
        {label: "Средний", value: "Средний"},
        {label: "Высокий", value: "Высокий"},
    ]

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onHide={onHide}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Создание задачи
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className={"mb-2"}>
                    <Form.Group className={"mb-3"}>
                        <Form.Label>Название</Form.Label>
                        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text"
                                      placeholder="Введите название задачи"/>
                    </Form.Group>
                    <Form.Group className={"mb-3"}>
                        <Form.Label>Описание</Form.Label>
                        <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} type="text"
                                      placeholder="Введите описание задачи"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Select value={priorityOption} onChange={(e) => setPriorityOption(e.target.value)}
                                     defaultValue={"Без приоритета"}>
                            {
                                priority.map((p, i) => {
                                    return <option key={i} value={p.value}>{p.label}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={addTodoHandler}>
                    Создать
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddTodoModal;