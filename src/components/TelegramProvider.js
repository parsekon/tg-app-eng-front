"use client"

import Script from "next/script";
import { useEffect } from "react";

const TelegramProvider = () => {

    useEffect(() => {
        // Проверяем, что Telegram Web App объект доступен
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            // Инициализация и настройка вашего приложения
            tg.ready();  // Сообщает, что приложение готово
        }
    }, []);

    return (
        <>
            <Script src="https://telegram.org/js/telegram-web-app.js"  />
        </>
    );
}

export default TelegramProvider;