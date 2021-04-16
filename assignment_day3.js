//Question 1

const michael = "People say I'm the best boss."
console.log(michael.length);
console.log(michael.slice(15));
console.log(michael.slice(11, 29));
console.log(michael.slice(11, -1));
console.log(michael.slice(-5));
console.log(michael.slice(-10,-6));

//Question 2

let dukeOfHastingsSays = "I burn for you."
let newArray = dukeOfHastingsSays.toLowerCase().split(" ")
console.log(newArray);
let newStringWithSpace = newArray.join(" ")
console.log(newStringWithSpace);
let newStringWithoutSpace = newArray.join("")
console.log(newStringWithoutSpace);

//Question 3

let starHollows = ['Lorelai', 'Rory', 'Luke', 'Lane', 'Kirk', 'Taylor'];
//let removed = starHollows.splice(1);
//console.log(removed);
let beverlyHillsGang = ['Brandon', 'Brenda', 'Dylan', 'Andrea', 'Steve', 'Kelly', 'Donna',
'David'];
//let removed = beverlyHillsGang.splice(1, 2);
//console.log(removed);
let seinfeld = ['Jerry', 'George', 'Kramer', 'Newman', 'Elaine'];
let removed = seinfeld.splice(-2, 1);
console.log(removed);

let brooklynNineNine = ['Jake', 'Amy', 'Charles','Rosa', 'Captain Holt', 'Gina', 'Terry'];
let removedAndInserted = brooklynNineNine.splice(5, 1, 'Hitchcock', 'Scully');
console.log(removedAndInserted);
console.log(brooklynNineNine);
let friends = ['Ross', 'Rachel', 'Joey', 'Chandler', 'Monica', 'Phoebe'];
let insertedOnly = friends.splice(1, 0, 'Gunther', 'Carol', 'Susan')
console.log(friends);