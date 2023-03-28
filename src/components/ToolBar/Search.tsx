import React, {FC} from 'react';
import Form from "react-bootstrap/Form";

interface SearchProps {
    search: string,
    setSearch: (arg: string) => void,
    labelText?: string
}

const Search: FC<SearchProps> = ({search, setSearch, labelText}) => {
    return (
        <Form>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                {labelText && <Form.Label>{labelText}</Form.Label>}
                <Form.Control className={"mb-4"} value={search} onChange={(e) => setSearch(e.target.value)}
                              type="text"
                              placeholder="Поиск..."/>
            </Form.Group>
        </Form>
    );
};

export default Search;