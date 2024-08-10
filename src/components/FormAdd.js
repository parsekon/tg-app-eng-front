"use client";
import React, { useCallback, useEffect, useState } from "react";
import TelegramProvider from "./TelegramProvider";

const FormAdd = () => {
  const [tg, setTg] = useState(null);
  const [eng, setEng] = useState("");
  const [rus, setRus] = useState("");

  useEffect(() => {
    let tgData;
    if (typeof window !== "undefined" && window.Telegram && window.Telegram.WebApp) {
      tgData = window.Telegram.WebApp;
    } 
      setTg(tgData);
      console.log("tg initialized:", tgData);
  }, [tg]);

  const onClickCloseBot = () => {
    if (tg) {
      tg.close();
    }
  };

  const onSendWord = useCallback(() => {
    if (tg) {
      const data = {
        eng,
        rus,
      };
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
        text: "Новая карточка:",
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
      <textarea
        className={"input"}
        type="text"
        placeholder={"Фраза"}
        value={eng}
        onChange={onChangeEng}
      />
      <textarea
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
