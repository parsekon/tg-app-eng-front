"use client";
import { useCallback, useEffect, useState } from "react";
import TelegramProvider from "./TelegramProvider";

const FormAdd = () => {
  const [tg, setTg] = useState({});

  useEffect(() => {
    function initTg() {
      if (window !== undefined && window.Telegram && window.Telegram.WebApp) {
        const tgData = window.Telegram.WebApp;
        setTg(tgData);
      } else {
        console.log("Telegram WebApp is undefined, retrying…");
        setTimeout(initTg, 500);
      }
    }
    initTg();
  }, []);

  const onClickCloseBot = () => {
    tg.close();
  };

  return (
    <>
      <TelegramProvider />
      <button onClick={onClickCloseBot}>Закрыть</button>
    </>
  );
};

export default FormAdd;
