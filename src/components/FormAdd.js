"use client"

import { useEffect, useState } from "react";
import TelegramProvider from "./TelegramProvider";

const FormAdd = () => {
    const [tg, setTg] = useState({});

    useEffect(() => {
        if(window !== undefined && window.Telegram && window.Telegram.WebApp) {
            const tgData = window.Telegram.WebApp;
            setTg(tgData);
        } 
    }, []);

    const onClickCloseBot = () => {
        tg.close();
    }

    return (
        <>
            <TelegramProvider />
            <div>
                <button onClick={onClickCloseBot}>Закрыть</button>
                <h2>Пользователь</h2>
            </div>
        </>
    );
}

export default FormAdd;