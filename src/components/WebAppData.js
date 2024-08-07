"use client";
import { useCallback, useEffect, useState } from "react";
import TelegramProvider from "./TelegramProvider";
import FormAdd from "./FormAdd";

const WebAppData = () => {
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
  }, [tg]);

  const onClickCloseBot = () => {
    tg.close();
  };

  return (
    <>
      <TelegramProvider />
      <FormAdd tg={tg} onClickClose={onClickCloseBot} />
    </>
  );
};

export default WebAppData;
