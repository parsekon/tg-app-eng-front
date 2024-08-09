"use client";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import TelegramProvider from "./TelegramProvider";

const FormAdd = () => {
  const [tg, setTg] = useState({});
  const [eng, setEng] = useState("Hello");
  const [rus, setRus] = useState("Привет");

  let tgData;
  useEffect(() => {
    if (window !== undefined && window.Telegram && window.Telegram.WebApp) {
      tgData = window.Telegram.WebApp;

    }
    setTg(tgData);
    console.log("tg1>>", tgData);
  }, [tg]);

  const onClickCloseBot = () => {
    const data = {
      success: "By-By!!",
    };
    tg.close();
    tg.sendData(JSON.stringify(data));
    console.log("tg>>>>>>>>", tg);
  };


  // const onSendWord = useCallback(() => {
  //   const data = {
  //     eng,
  //     rus
  //   }
  //   console.log("TG before>>>", tgData)
  //   tg.onSendData(JSON.stringify(data));
  // }, [eng, rus, tg]);

  //   useEffect(() => {
  //     tg.onEvent('mainButtonClicked', onSendWord);
  //   return () => {
  //     tg.offEvent('mainButtonClicked', onSendWord);
  //   }
  // }, [onSendWord, tg]);

  // useEffect(() => {
  //   tg.MainButton.setParams({
  //     text: 'Send data'
  //   });
  // }, [])

  // useEffect(() => {
  //   if(!eng || !rus) {
  //     tg.MainButton.hide();
  //   } else {
  //     tg.MainButton.show();
  //   }
  // }, [eng, rus])

  const onChangeEng = (e) => {
    setEng(e.target.value);
  };

  const onChangeRus = (e) => {
    setRus(e.target.value);
  };

  return (
    <>
      <TelegramProvider />
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
