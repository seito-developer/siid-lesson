localStorage.setItem('userName', 'Yumi');
const userName = localStorage.getItem('userName');

document.getElementById('name').innerHTML = `こんにちは、${userName}さん`;