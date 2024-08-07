"use client";
import { useCallback, useEffect, useState } from "react";
import TelegramProvider from "./TelegramProvider";

const FormAdd = () => {
  const [tg, setTg] = useState({});
  const [eng, setEng] = useState('');
  const [rus, setRus] = useState('');

  useEffect(() => {
    function initTg() {
      if (window !== undefined && window.Telegram && window.Telegram.WebApp) {
        const tgData = window.Telegram.WebApp;
        setTg(tgData);
      } else {
        setTimeout(initTg, 500);
      }
    }
    initTg();
  }, []);

  const onClickCloseBot = () => {
    tg.close();
  };

  const onSendData = useCallback(() => {
    const data = {
      eng,
      rus,
    }

    tg.onSendData(JSON.stringify(data));
  }, [eng, rus]);

  useEffect(() => {
    tg?.onEvent('mainButtonClicked', onSendData); 
  return () => {
    tg?.offEvent('mainButtonClicked', onSendData);
  }
}, [onSendData]);

useEffect(() => {
  tg.MainButton.setParams({
    text: 'Send data'
  });
}, [])

useEffect(() => {
  if(!country || !street) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.show();
  }
}, [eng, rus])

const onChangeEng = (e) => {
  setEng(e.target.value);
}

const onChangeRus = (e) => {
  setRus(e.target.value);
}

  return (
    <>
      <TelegramProvider />
      <button onClick={onClickCloseBot}>Закрыть</button>
      <h1>Введите фразу:</h1>
      <input className={"input"} type="text" placeholder={"Фраза"} value={eng} onChange={onChangeEng} />
      <input className={"input"} type="text" placeholder={"Перевод"} value={rus} onChange={onChangeRus} />
    </>
  );
};

export default FormAdd;
