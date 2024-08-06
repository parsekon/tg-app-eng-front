"use client"

import Script from "next/script";

const TelegramProvider = () => {
    return (
        <>
            <Script src="https://telegram.org/js/telegram-web-app.js" />
        </>
    );
}

export default TelegramProvider;