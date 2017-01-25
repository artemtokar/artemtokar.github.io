
var testText = {
headline: 'Тест по программированию',
question1: '1. Вопрос №1',
answer1_1: 'Вариант ответа №1',
answer1_2: 'Вариант ответа №2',
answer1_3: 'Вариант ответа №3',
question2: '2. Вопрос №2',
answer2_1: 'Вариант ответа №1',
answer2_2: 'Вариант ответа №2',
answer2_3: 'Вариант ответа №3',
question3: '3. Вопрос №3',
answer3_1: 'Вариант ответа №1',
answer3_2: 'Вариант ответа №2',
answer3_3: 'Вариант ответа №3',
};

function tagAndText(testText) {
    var teg1 = '<h1 class="title">' + testText.headline + '</h1>';
    var teg2 = '<ul>';
    var teg3 = '<li class="list_item">' + testText.question1;
    var teg4 = '<input type="radio" name="answer1" value="1" class="list_radio">' + testText.answer1_1;
    var teg5 = '<input type="radio" name="answer1" value="2" class="list_radio">' + testText.answer1_2;
    var teg6 = '<input type="radio" name="answer1" value="3" class="list_radio">' + testText.answer1_3;
    var teg7 = '</li>';
    var teg8 = '<li class="list_item">' + testText.question2;
    var teg9 = '<input type="radio" name="answer2" value="1" class="list_radio">' + testText.answer2_1;
    var teg10 = '<input type="radio" name="answer2" value="2" class="list_radio">' + testText.answer2_2;
    var teg11 = '<input type="radio" name="answer2" value="3" class="list_radio">' + testText.answer2_3;
    var teg12 = '</li>';
    var teg13 = '<li class="list_item">' + testText.question3;
    var teg14 = '<input type="radio" name="answer3" value="1" class="list_radio">' + testText.answer3_1;
    var teg15 = '<input type="radio" name="answer3" value="2" class="list_radio">' + testText.answer3_2;
    var teg16 = '<input type="radio" name="answer3" value="3" class="list_radio">' + testText.answer3_3;
    var teg17 = '</li>';
    var teg18 = '<ul>';
    var teg19 =  '<input type="submit" name="submit" value="Проверить мои результаты" class="button">';
    var teg0 = '<br>';

    var allTegs = teg1 + teg0 + teg2 + teg0 + teg3 + teg0 + teg4 + teg0 + teg5 + teg0 + teg6 + teg0 + teg7 + teg0 + teg8 + teg0 + teg9 + teg0 + teg10 + teg0 + teg11 + teg0 + teg12 + teg0 + teg13 + teg0 + teg14 + teg0 + teg15 + teg0 + teg16 + teg0 + teg17 + teg0 + teg18 + teg0 + teg19;
    return allTegs;
};

var completedTAT = tagAndText(testText);

var obj = {
    name: 'Test',
    content: completedTAT,
    method: document.body.innerHTML = completedTAT
};

// Генадий, учел ваши замечания и исправил то что понял. Не знаю как по другому обернуть в теги текст с объекта.
// Можно, как нам рассказывали в уроках, добавлять в НТМЛ createElement а потом вставлять туда элементы объекта.
// Но мне кажется что так делать всю страницу очень громоздко.
// Так же не получилось в function tagAndText(testText) вместо test.question использовать this.question ( выдает undefined)
