let text= "abcdefgh ijklmnopqrst uvwxyz";
let text1=text.length;
document.getElementById('m1').innerHTML= 
"The total letters in the abbove abc are:" +text1 +".";
// Extracting string
let text2="I love Banana ,Apples and YOU .";
document.getElementById('m2').innerHTML=
("so the letter at sixth place is: "+ text2.charAt(8)+".");
document.getElementById('m3').innerHTML=
"So,the UTF character at 9 place is: "+ text2.charCodeAt(9) +".";
// at(-3) :it can also use negative values
document.getElementById('m4').innerHTML=
"So lets see why at is used for : " + text2.at(8) +".";
document.getElementById('m5').innerHTML=
"Now we are using array method for extracting words : " + text2[26];
// Extracting string part now
document.getElementById('m7').innerHTML=
text2.slice(7,14);
document.getElementById('m8').innerHTML=
text2.slice(-25,-17);
// IN substring we cannot use negative numbers
document.getElementById('m9').innerHTML=
text2.substring(7);
let text3="Hello ";
let text4="Bobo!";
let text5=text3.concat(" ", text4);
document.getElementById('m10').innerHTML=
text5;
let text6= "       Bobo       is      you.    ";
let text7=text6.trim();
document.getElementById('m11').innerHTML=
text7;
let text8="i love    ";
let text9=text8.trim();
let text11="love";
let text10=text11.padEnd(23 ," you baby ");
document.getElementById('m12').innerHTML=text9;
document.getElementById('m13').innerHTML=text10;
let text12="My lover is me. "
document.getElementById('m14').innerHTML="This is for u " +text12.repeat(10);