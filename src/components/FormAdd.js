"use client"
import { useCallback, useEffect, useState } from "react";
import TelegramProvider from "./TelegramProvider";

const FormAdd = () => {
  const [tg, setTg] = useState({});
  const [user, setUser] = useState('test');

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
    const data = {
        success: 'WebApp закрыто!',
    }
    tg.sendData(JSON.stringify(data));
    console.log("TG >>>", tg);
  }

//   const onClickSendUsername = useCallback(() => {
//     const data = {
//         user,
//     }

//     tg.sendData(JSON.stringify(data));
//   }, [user])

//   useEffect(() => {
//     tg?.onEvent('mainButtonClicked', onClickSendUsername); 
//   return () => {
//     tg?.offEvent('mainButtonClicked', onClickSendUsername);
//   }
// }, [tg, onClickSendUsername]);

// useEffect(() => {
//     tg.MainButton.setParams({
//       text: 'Отправить'
//     });
//   }, [])

  return (
    <>
      <TelegramProvider />
      <div>
        <button onClick={onClickCloseBot}>Закрыть</button>
        <h2>Пользователь</h2>
      </div>
    </>
  );
};

export default FormAdd;
