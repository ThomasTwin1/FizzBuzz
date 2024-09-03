// make a function that adds the next number in the sequence
var output = [];
var count = 1

function fizzBuzz(){
    if (count % 3 && 5 === 0 ){
        output.push("FizzBuzz");
    } else if (count % 3 === 0){
    output.push("Fizz");
    } else if (count % 5 === 0){
    output.push("Buzz");
    } else {
    output.push(count);
    }

    count++
    console.log(output);
}

fizzBuzz();
