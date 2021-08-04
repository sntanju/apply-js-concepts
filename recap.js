//variable
var time = '10:15pm';//string
var bookPrice = 150;//number
var isWhiteColor = false;//boolean
//array
var partners = ['sajid','mojid', 'nojid', 'lajid'];//an array
var elementCount = partners.length;//length or total element number of an array
var nolidIndex = partners.indexOf('nojid');//index of an array element
partners.push('kajid');//add someone
partners.pop();//remove someone

//conditionals
if(bookPrice  < 120){
    console.log('i will buy this book ');
}
else{
    console.log('give some discount please');
}

//while loop
var i = 0;
while( i <= 17){
    //do some work
    i++;
}
//for loop
for(i = 0; i <= 17; i++){

}

// function 
function isMoonUp(time){
    if(time >= 19 && time <= 5){
        return true;
    }
    return true;
}

var moonStatus = isMoonUp(21);

//let const

//value of the variable could change
let price = 27;
price = 29;
price = 31;

//value of the variable will not change
const myName = 'mr. helal';
console.log(myName);
myName = 22;

