' use strict ';

const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const body = document.querySelector('body');
const adv = document.querySelector('.adv');

console.log(book);

books[0].prepend(book[1]);
book[1].after(book[0], book[4], book[3], book[5]);

const title = book[4].querySelector("body > aside > div:nth-child(3) > h2 > a");
title.textContent = 'Книга 3. this и Прототипы Объектов'; 

const inspect2 = book[0].querySelectorAll('li');
inspect2[1].after(inspect2[3], inspect2[6], inspect2[8], inspect2[4], inspect2[5], inspect2[7], inspect2[9], inspect2[2]);

const inspect5 = book[5].querySelectorAll('li');
inspect5[1].after(inspect5[9], inspect5[3], inspect5[4], inspect5[2], inspect5[6], inspect5[7], inspect5[5]);

book[2].insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');
const inspect6 = book[2].querySelectorAll('li');
inspect6[8].after(inspect6[10]);

adv.remove();
body.style.backgroundImage = 'url(./image/js-smile.jpeg)';