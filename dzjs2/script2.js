
var names = [];
names.length = 5;

for (i = 0; i < names.length; i++) {
    var temp = prompt('Enter name', '');
    names[i] = temp;
    console.log(names[i]);
}
console.log(names);

var yourName = prompt('Enter your name', '');
for (i = 0; i < names.length; i++) {

  if ( names[i] === yourName ) {
      alert(yourName + ', вы успешно вошли');
      break;
  }
//   else {
//     alert(yourName + ', В доступе отказано!');
//
// }
}
// не получается сделать вывод сообщения об ошибке (несовпадении введеного имени) т.к. цикл перебирает каждое имя массива и на каждое имя выдает сообщение ошибки
