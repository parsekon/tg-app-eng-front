"use client";
import React, { useCallback, useEffect, useState } from "react";
import TelegramProvider from "./TelegramProvider";

const FormAdd = () => {
  const [tg, setTg] = useState(null);
  const [eng, setEng] = useState("");
  const [rus, setRus] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram && window.Telegram.WebApp) {
      const tgData = window.Telegram.WebApp;
      setTg(tgData);
      console.log("tg initialized:", tgData);
    }
  }, [tg]);

  const onClickCloseBot = () => {
    if (tg) {
      const data = {
        success: "By-By!!",
      };
      tg.sendData(JSON.stringify(data));
      tg.close();
      console.log("tg closed:", tg);
    }
  };

  const onSendWord = useCallback(() => {
    if (tg) {
      const data = {
        eng,
        rus,
      };
      console.log("Sending data:", data);
      tg.sendData(JSON.stringify(data));
    }
  }, [eng, rus, tg]);

  useEffect(() => {
    if (tg) {
      tg.onEvent("mainButtonClicked", onSendWord);
      return () => {
        tg.offEvent("mainButtonClicked", onSendWord);
      };
    }
  }, [onSendWord, tg]);

  useEffect(() => {
    if (tg) {
      tg.MainButton.setParams({
        text: "Send data",
      });
    }
  }, [tg]);

  useEffect(() => {
    if (tg) {
      if (!eng || !rus) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
    }
  }, [eng, rus, tg]);

  const onChangeEng = (e) => {
    setEng(e.target.value);
  };

  const onChangeRus = (e) => {
    setRus(e.target.value);
  };

  return (
    <>
      <button onClick={onClickCloseBot}>Закрыть</button>
      <h1>Введите фразу:</h1>
      <input
        className={"input"}
        type="text"
        placeholder={"Фраза"}
        value={eng}
        onChange={onChangeEng}
      />
      <input
        className={"input"}
        type="text"
        placeholder={"Перевод"}
        value={rus}
        onChange={onChangeRus}
      />
    </>
  );
};

export default FormAdd;
