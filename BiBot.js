// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  this is bot, just bot
// @author       Irina Vaskova
// @match        https://www.bing.com/*
// @match        https://napli.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress",
                "Вывод произвольных типов записей и полей в WordPress", "Взаимодействие PHP и MySQL.", "Плагины VS Сode", "DevTools — очень полезная штука"];
let keyword = keywords[getRandom(0, keywords.length)];
let sb_form_go = document.getElementById('search_icon'); //кнопка поиска
let links = document.links; //собираем ссылки на странице
let bingInput = document.getElementById('sb_form_q'); // поле ввода запроса
let bingNextPage = document.getElementsByClassName('sb_pagN')[0];

if (sb_form_go !== null) {
  let i = 0;
  let timerId = setInterval(()=> {
    bingInput.value += keyword[i];
    i++;
    if(i == keyword.length) {
      clearInterval(timerId);
      setTimeout(()=>{
        sb_form_go.click();
      }, getRandom(200, 500));
    }
  }, 300);
  //вторая часть скрипта
  } else if (location.hostname == 'napli.ru') {
setInterval(()=>{
let index = getRandom(0, links.length);
if (getRandom(0, 101) >= 80) {
location.href = 'https://www.bing.com/';
}
if (links.length == 0) {
location.href = 'napli.ru';
}
if (links[index].href.indexOf('napli.ru') !== -1) {
links[index].click();
}
}, getRandom(3000, 5000));
console.log('мы на целевом сайте');
// 3 часть скрипта
} else {
  let nextBingPage = true;
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf('napli.ru') !== -1) {
      let link = links[i];
      nextBingPage = false; //если мы нашли на странице ссылку, то переклбчаем флаг в фолс и дальше ветка работать не будет, поиск страницы завершен
      console.log('Find string ' + link);
      setTimeout(()=>{
        link.click();
      }, getRandom(1500, 4000));
      break;
    } // проверка условия if
  } //цикл
if (document.querySelector("#b_results > li.b_pag > nav > ul > li:nth-child(5) > a").innerText == '5') {
  nextBingPage = false;
  location.href = 'https://www.bing.com/';
  }
  if (nextBingPage) { //кликаем по каждой странице выдачи
    setTimeout(()=>{
      bingNextPage.click();
    }, getRandom(2000, 5000));
  }
}


function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}
