'use client'

let tg;

export function useTelegram () {

    if(typeof window !== "undefined" && typeof window?.Telegram && typeof window?.Telegram?.WebApp) {
        tg = window.Telegram.WebApp;
    }

    const onClose = () => {
        tg.close();
    }

    return {
        tg,
        onClose,
    }
}