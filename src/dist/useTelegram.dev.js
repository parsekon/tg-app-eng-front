"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var tg;

var useTelegram = function useTelegram() {
  if (window !== "undefined" && window.Telegram && window.Telegram.WebApp) {
    tg = window.Telegram.WebApp;
  }

  var onClose = function onClose() {
    tg.close();
  };

  return {
    tg: tg,
    onClose: onClose
  };
};

var _default = useTelegram;
exports["default"] = _default;