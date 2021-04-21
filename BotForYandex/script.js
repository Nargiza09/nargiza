// ==UserScript==
// @name         Bot for yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @icon         https://www.yandex.ru/s2/favicons?domain=yandex.ru
// @grant        none
// ==/UserScript==


let keywords = ["Пион","Ландыш","Гортензия", "Роза"];
let keyword = keywords[Math.floor(Math.random()*keywords.length)];
let minisuggest__button = document.getElementsByClassName("mini-suggest__button")[0];
if(minisuggest__button!=undefined){
    document.getElementsByName("text")[0].value= keyword;
    minisuggest__button.click();
}else{
    let links = document.links;
    let nextPage = true;
    let currentPage = document.getElementsByClassName("link link_theme_none link_target_serp pager__item pager__item_kind_page i-bem")[0].innerText;
    for(let i=0; i<links.length; i++){
        let link = links[i];
        if(link.href.indexOf("divo-dacha.ru") != -1){
            link.click();
            nextPage = false;
            break;
        }
    }
    let nextButton = document.getElementsByClassName("link link_theme_none link_target_serp pager__item pager__item_kind_next i-bem link_js_inited")[0];
    if(currentPage>3) location.href = "https://www.yandex.ru/";
    else if(nextPage)nextButton.click();
}
