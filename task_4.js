  /*
    Задание:
    Скопировать текст из файла RegExp.txt на сайт https://regexr.com/
    Написать регулярное выражение которое найдет:
      1. Все слова. 
      2. Все совпадения букв от a до e,
      3. Года, например 2004
      4. Слова обернутые в [квадратныеКавычки]
      5. Все форматы файлов .jpg / .png / .gif
      6. Все email com.ua
      7. Все слова написанные с большой буквы
      8. Найти телефон написаный по паттерну +00 (000) 000-00-00, 
         где вместо 0 может быть любое число
  */

  var  string = "RegExr was created by +38(099)0373736 gskinner.com, and [words] is proudly@com.ua hosted +38(098)9824895 by Media Temple 2004. Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with.gif Tests mode. The side bar includes.png a Cheatsheet, full Reference.jpg, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns. Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.";

  console.log( string.split(" ") );
  console.log( string.match(/[a-e]/g) );
  console.log( string.match(/[1-2].{3}/g) );
  console.log( string.match(/\[\w+\]/g) );
  console.log( string.match(/\.jpg|.png|.gif/g) );
  console.log( string.match(/(\w+)@(\w+.)(\w+)/g) );
  console.log( string.match(/([A-Z])(\w+)/g) );
  console.log( string.match(/(\+38)(.{12})/g) );
