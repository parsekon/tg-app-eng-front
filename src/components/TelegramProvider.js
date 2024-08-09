"use client"

import Script from "next/script";
import { useEffect } from "react";

const TelegramProvider = () => {

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.ready(); 
        }
    }, []);

    return (
        <>
            <Script src="https://telegram.org/js/telegram-web-app.js"  />
        </>
    );
}

export default TelegramProvider;