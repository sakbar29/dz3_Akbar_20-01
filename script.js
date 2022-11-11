//Задание 1!

let a = 7;
function GGG(){
    console.log('!');
}
function ggg(){
    console.log('!!');
}
if (a > 0){
    GGG();
}else{
    ggg();
}


//Задание 2!

let arr = new Array();
for (let i=0; i<10; i++){
    arr.push('x');
}
console.log(arr);


//Задание 3!

function counter() {
    let i = 1;
    return function() {return i++};
}
let func = counter();
console.log(func());
console.log(func());
console.log(func());
console.log(func());