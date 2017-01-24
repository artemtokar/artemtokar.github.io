
var a = 'Тест по программированию';
var b = '1. Вопрос №1';
var c = 'Вариант ответа №1';
var d = 'Вариант ответа №2';
var e = 'Вариант ответа №3';
var f = '2. Вопрос №2';
var g = 'Вариант ответа №1';
var h = 'Вариант ответа №2';
var i = 'Вариант ответа №3';
var j = '3. Вопрос №3';
var k = 'Вариант ответа №1';
var l = 'Вариант ответа №2';
var m = 'Вариант ответа №3';

function tagAndText(a, b, c, d, e, f, g, h, i, j, k, l, m) {
   var teg1 = '<h1 class="title">' + a + '</h1>';
   var teg2 = '<ul>';
   var teg3 = '<li class="list_item">' + b;
   var teg4 = '<input type="radio" name="answer1" value="1" class="list_radio">' + c;
   var teg5 = '<input type="radio" name="answer1" value="2" class="list_radio">' + d;
   var teg6 = '<input type="radio" name="answer1" value="3" class="list_radio">' + e;
   var teg7 = '</li>';
   var teg8 = '<li class="list_item">' + f;
   var teg9 = '<input type="radio" name="answer2" value="1" class="list_radio">' + g;
   var teg10 = '<input type="radio" name="answer2" value="2" class="list_radio">' + h;
   var teg11 = '<input type="radio" name="answer2" value="3" class="list_radio">' + i;
   var teg12 = '</li>';
   var teg13 = '<li class="list_item">' + j;
   var teg14 = '<input type="radio" name="answer3" value="1" class="list_radio">' + k;
   var teg15 = '<input type="radio" name="answer3" value="2" class="list_radio">' + l;
   var teg16 = '<input type="radio" name="answer3" value="3" class="list_radio">' + m;
   var teg17 = '</li>';
   var teg18 = '<ul>';
   var teg19 =  '<input type="submit" name="submit" value="Проверить мои результаты" class="button">';
   var teg0 = '<br>';

   var allTegs = teg1 + teg0 + teg2 + teg0 + teg3 + teg0 + teg4 + teg0 + teg5 + teg0 + teg6 + teg0 + teg7 + teg0 + teg8 + teg0 + teg9 + teg0 + teg10 + teg0 + teg11 + teg0 + teg12 + teg0 + teg13 + teg0 + teg14 + teg0 + teg15 + teg0 + teg16 + teg0 + teg17 + teg0 + teg18 + teg0 + teg19;
   return allTegs;
};
var completedTAT = tagAndText(a, b, c, d, e, f, g, h, i, j, k, l, m);

console.log(completedTAT);

var obj = {
    name: 'Test',
    content: completedTAT,
    method: document.body.innerHTML = completedTAT
};
