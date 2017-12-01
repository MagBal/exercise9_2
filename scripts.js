var femaleNames = ['Ala', 'Basia','Ula', 'Zosia', 'Gosia'];
var maleNames = ["Janek", 'Franek', 'Zenek', 'Leszek'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Ola';

if (allNames.indexOf(newName) === -1) {
	var newName = allNames.push('Ola');
}

console.log(allNames);