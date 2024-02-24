// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different message.

function large_shirt(text:string="I love TypeScript", size:string="Large"){
    console.log(`${size},${text}`);
}
function medium_shirt(text:string="I love TypeScript", size:string="Medium"){
    console.log(`${size},${text}`);
}

function anySize_shirt(text:string="I love TypeScript", size:string){
    console.log(`${size},${text}`);
}
large_shirt();
medium_shirt();
anySize_shirt('I love typeScript','Small');