// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require("http");
let mainPageVeiw = 0;
let aboutPageVeiw = 0;
const server = http.createServer((req, res) => {
console.log("Запрос получен");
if (req.url === "/") {
    mainPageVeiw++;
res.writeHead(200, {
"Content-Type": "text/html; charset=UTF-8",
});
res.end(`<h1>Мой сервер работает!</h1><h2>Количество просмотров: ${mainPageVeiw}</h2><a href = '/about'>Перейти на страницу 'about'</a>`);
console.log(`Главная страница загружена ${mainPageVeiw} раз`);
} else if (req.url === "/about") {
    aboutPageVeiw++;
res.writeHead(200, {
"Content-Type": "text/html; charset=UTF-8",
});
res.end(`<h1>About</h1><h2>Количество просмотров: ${aboutPageVeiw}</h2><a href = '/'>Перейти на главную страницу</a>`);
console.log(`Страница "about" загружена ${aboutPageVeiw} раз`);
} else {
res.writeHead(404, {
"Content-Type": "text/html; charset=UTF-8",
});
res.end("Page not found");
}
});

const port = 3000;
server.listen(port, () => {
console.log(`Сервер запущен на порту ${port}`);
});

