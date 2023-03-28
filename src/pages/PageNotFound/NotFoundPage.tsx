import React from 'react';
import cl from "./NotFoundPage.module.scss"

const NotFoundPage = () => {

    return (
        <div className={cl.wrapper}>
            <h1 className={cl.title}>404</h1>
            <p className={cl.subtext}>Такой страницы пока нет, но возможно в будущем она появится...</p>
        </div>
    );
};

export default NotFoundPage;