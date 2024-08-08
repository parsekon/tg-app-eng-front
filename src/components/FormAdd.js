"use client";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import TelegramProvider from "./TelegramProvider";

const FormAdd = () => {
  const [tg, setTg] = useState({});
  const [eng, setEng] = useState('');
  const [rus, setRus] = useState('');

  let tgData;
  useEffect(() => {
      if (window !== undefined && window.Telegram && window.Telegram.WebApp) {
         tgData = window.Telegram.WebApp;
      }
      setTg(tgData)
      console.log("tg>>", tg)
  }, [tg]);

  const onClickCloseBot = () => {
    tg.close();
  };

  const onSendWord = useCallback(() => {
    const data = {
      eng: 'Hello',
      rus: "Привет",
    }

    tg.onSendData(JSON.stringify(data));
  }, []);

//   useEffect(() => {
//     tg?.onEvent('mainButtonClicked', onSendData); 
//   return () => {
//     tg?.offEvent('mainButtonClicked', onSendData);
//   }
// }, [tg]);

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
}

const onChangeRus = (e) => {
  setRus(e.target.value);
}

  return (
    <>
      <TelegramProvider />
      <button onClick={onSendWord}>Отпрвить</button>
      <h1>Введите фразу:</h1>
      <input className={"input"} type="text" placeholder={"Фраза"} value={eng} onChange={onChangeEng} />
      <input className={"input"} type="text" placeholder={"Перевод"} value={rus} onChange={onChangeRus} />
    </>
  );
};

export default FormAdd;
