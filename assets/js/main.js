//  LEVEL 1_1 LENGTH

let firstName = "Vanessa"
let lastName = "Truong"

console.log(firstName.length);
console.log(lastName.length);
console.log(firstName.length + lastName.length);


//  LEVEL 1_2 INDEXOF

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"))
console.log(txt.indexOf("Moon"));


// LEVEL 1_4 SLICE

const A = 'Susi is going to codingschool';

console.log(A.slice(0, 4));
console.log(A.slice(5, 7))
console.log(A.slice(5, 16 + 23,));
29

let myVar = A.slice(0, 4);
let myVar1 = A.slice(5, 7);
let myVar2 = A.slice(5, 16) + " " + A.slice(23);
let myVar3 = A.slice(23);
let myVar4 = A.slice(0, 4) + " " + A.slice(5, 7) + " " + A.slice(23);

document.write(myVar + "<br>" + myVar1 + "<br>" + myVar2 + "<br>" + myVar3 + "<br>" + myVar4)


//LEVEL 1_5 

const text = "Susi is back from codingschool";

let susi = text.substring(0, 4);
let is = text.substring(5, 7);
let school = text.substring(24);
let susiIsSchool = text.substring(0, 7) + " " + text.substring(24);

document.write("<br>" + susi + "<br>" + is + "<br>" + school + "<br>" + susiIsSchool);



// LEVEL 1_7 REPLACE

const text1 = "Sam is good at codingschool";

let bad = text1.replace("good at codingschool", "bad at school")
let Var = text1.replace("Sam is good at codingschool", "Susi is good at school")
let tennis = text1.replace("Sam is good at codingschool", "Sam is good at tennis")



document.write("<br>" + bad)
document.write("<br>" + Var)
document.write("<br>" + tennis)


// LEVEL 1_8 toLowerCase/UpperCase

const text2 = "Sam is going to codingschool";

let first = text2.toUpperCase(0, 24);
let second = text2.toLowerCase(0, 24);
let third = text2.slice(0, 3).toUpperCase().concat(" ").concat(text2.slice(4, 16).toLowerCase()).concat(text2.slice(22).toUpperCase());
let fourth = text2.slice(0, 3).toLowerCase().concat(" ").concat(text2.slice(4, 16).toUpperCase()).concat(text2.slice(22).toLowerCase())
let fifth = text2.slice(0, 1).toUpperCase().concat(text2.slice(1, 4).toLowerCase()).concat(text2.slice(4, 5).toUpperCase()).concat(text2.slice(5, 6).toLowerCase()).concat(text2.slice(6, 8).toUpperCase()).concat(text2.slice(8, 12).toLowerCase()).concat(text2.slice(12, 14).toUpperCase()).concat(text2.slice(14, 15).toLowerCase()).concat(text2.slice(15, 17).toUpperCase()).concat(text2.slice(17).toLowerCase())


document.write("<br>" + first);
document.write("<br>" + second);
document.write("<br>" + third);
document.write("<br>" + fourth);
document.write("<br>" + fifth);



// LEVEL 1_9 Concat()

const text5 = "Sam is going to codingschool";
const text6 = "Susi";
const text7 = "and";

let myVaria = text5.slice(0, 16).concat(text5.slice(22))
let myVaria1 = text5.slice(0, 16).concat("movie theater")
let myVaria2 = text6.concat(" ").concat(text7).concat(" ").concat(text5.slice(0, 4)).concat(text5.slice(4, 16)).concat(text5.slice(22))
let myVaria3 = text6.concat(" ").concat(text7).concat(" ").concat(text5.slice(0, 4)).concat("are ").concat(text5.slice(7, 16)).concat("gym and to movie theater")
let myVaria4 = text6.concat(text5.slice(4, 16)).concat("gym ").concat(text7).concat("to the movie theater")




document.write("<br>" + myVaria)
document.write("<br>" + myVaria1)
document.write("<br>" + myVaria2)
document.write("<br>" + myVaria3)
document.write("<br>" + myVaria4)



// LEVEL 2.0 TEMPLATE LITERALS

let firstName1 = "Vanessa";
let lastName1 = "Truong";
let age = "28";
let hood = "Dinslaken";
let size = "1,66m";
let weight = "60kg";
let hobby = "Mukke machen, lesen und kochen";
let gaming = "Fifa";
let favFood = "je nach Laune";
let sport = "Boxen";
let fashion = "GucciPrada - weißt bescheid"
let year = "Frühling";
let holidayOrt = "Portugal"

document.write(`<br> <br>Mein Name ist ${firstName1} ${lastName1} und ich bin ${age} Jahre alt, ich bin in ${hood} geboren. Meine Größe und mein Gewicht sind ${size} und ${weight}. Mein Lieblingshobby ist ${hobby} und ich spiele gerne auf meiner Konsole ${gaming}. Mein Lieblingsessen ist ${favFood} und als Sport mache ich ${sport}. Wenn ich mir Klamotten kaufe, kaufe ich von der Marke ${fashion}. Meine Lieblingsjahreszeit ist der ${year} und ich mache Urlaub in ${holidayOrt}`);








