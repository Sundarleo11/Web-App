console.log('hello world');

function add(a,b){
    return a+b;
}

console.log(add(2,2));

console.log(process.argv);

 var arg=process.argv.slice(2);

 console.log("Adding the two string number:",add(parseInt(arg[0]),parseInt(arg[1])));