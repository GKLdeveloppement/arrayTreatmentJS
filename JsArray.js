/*

--- DO NOT USE "FOR" ANYMORE ---

Basically, in all your project you're gonna be face off with some arrays treatment for sure, and in generally, we can sum up these exemples in 5 categories : 

    1) Make a treatment on each element in an array (i.e : double each elements in the array)


    2) Filter an array (i.e : give me just even number or odd number )


    3) Return just a value from the array (i.e : give me the max value of the array)


    4) Make a treatment on all the elements in the array (i.e : give me the sum of the array)


    5) Return just a boolean from the array (i.e : isOdd ? )


*/

//variables
const someArr = [1, 2, 3, 4, 5];

//ex1 with "map" : 
const doubleArr = someArr.map(e => e * 2);
console.log(doubleArr); //Test it !

/*
advantages : 
    - Using new variable, so don't modify the first array
    - Do not using an itermediary variable (i.e : let = i...)
    - Solve in 1 line
*/

