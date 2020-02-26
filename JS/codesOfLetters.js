var letter_UP = "AZ";
var letter_DOWN = "az";


var first_letter_UP = letter_UP.charCodeAt(0); /* Заносим в переменную код заглавной буквы A */
var last_letter_UP = letter_UP.charCodeAt(1); /* Заносим в переменную код заглавной буквы Z */
console.log("English ЗАГЛАВНЫЕ буквы имеют код, начиная с " + first_letter_UP + " и заканчивая " + last_letter_UP);


var first_letter_DOWN = letter_DOWN.charCodeAt(0); /* Заносим в переменную код буквы a */
var last_letter_DOWN = letter_DOWN.charCodeAt(1); /* Заносим в переменную код буквы z */
console.log("English строчные буквы имеют код, начиная с " + first_letter_DOWN + " и заканчивая " + last_letter_DOWN);