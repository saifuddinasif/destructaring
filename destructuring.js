/* array destructuring */


const numbers = [34,65]
// const [x,y] = [34,65]
const [x,y] = numbers;

// console.log(x,y)

/* taking two numbers and returning them inside an array */

function boxify(num1,num2){

    const nums =[num1,num2];

    return nums;

}

// console.log(boxify(90,34));

/* destructuring function  */
const [first, second ] =boxify(90,34);


const student = {

    name :'sakib khan',

    age:32,
    miovies: ['king khan', ' shoaig ali']

}

/* destructurinfg an array of student object  */
const[fisrt, seconds ] = student.miovies;


const empployee= {

    id:'vs code',
    designation:'developer',
    machine:'mac',
    languages:['html', 'css', 'js'],
    specification: {

        height: 66,
        weight:46,
        adress:seconds,

    }
}

const {id, designation} = empployee;

const {weight,adress} = empployee?.specification;

