import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import AddTodoModal from "../components/ToolBar/AddTodoModal";
import Header from "../components/Header/Header";
import ToolBar from "../components/ToolBar/ToolBar";
import TabBar from "../components/TabBar/TabBar";

const MainPage = () => {
    const [modalShow, setModalShow] = React.useState(false);

    const [sort, setSort] = useState<string>("default")

    return (
        <div>
            <Header/>
            <Container fluid="md" className='mt-5 mb-5'>
                <AddTodoModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <ToolBar setSort={setSort} setModalShow={setModalShow}/>
                <TabBar sort={sort}/>
            </Container>
        </div>
    );
}

export default MainPage;