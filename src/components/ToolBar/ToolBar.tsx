import React, {FC} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {options} from "../../utils/consts";

interface ToolBarProps {
    setSort: (arg: any) => void
    setModalShow: (arg: any) => void
}

const ToolBar: FC<ToolBarProps> = ({setSort, setModalShow}) => {
    return (
        <Row>
            <Col className='mb-2' md>
                <Form.Select
                    onChange={e => setSort(e.target.value)}
                    aria-label="Default select example"
                    defaultValue={'default'}
                >
                    <option value={"default"} disabled>Сортировать</option>
                    {options.map((o, i) => {
                        return <option key={i} value={o.value}>{o.label}</option>
                    })}
                </Form.Select>
            </Col>
            <Col md>
                <Button className={"mb-5"} variant="success" onClick={() => setModalShow(true)}>
                    Добавить новую задачу
                </Button>
            </Col>
        </Row>
    );
};

export default ToolBar;