// 43.	Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array 
// of the original names and one array with the Great added to each magician’s name.

function make_great(magicians:string[]): string[]{
    let great_magicians: string[] = [];
    for(let magician of magicians){
        great_magicians.push(`The Great ${magician}`);
    }
    return great_magicians
}
function show_magicians(magicians:string[]): void{
    console.log(magicians.join(", "));
}
const magician_name:string[] = ['Paul Daniels','David Blaine','Derren Brown','Harry Houdini','Penn & Teller'];
// make the copy of magicians array using spread operator
let great_magicians:string[] = make_great([...magician_name]);  

// function call
show_magicians(magician_name);
show_magicians(great_magicians);