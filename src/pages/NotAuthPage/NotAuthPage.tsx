import React from 'react';
import cl from "./NotAuthPage.module.scss"

const PageNotFound = () => {
    return (
        <div className={cl.wrapper}>
            <h1 className={cl.title}>403</h1>
            <p className={cl.subtext}>Похоже вы не авторизованы,<br/>
                авторизуйтесь, чтобы зайти на эту страницу
            </p>
        </div>
    );
};

export default PageNotFound;