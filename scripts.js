var femaleNames = ['Ala', 'Basia','Ula', 'Zosia', 'Gosia'];
var maleNames = ['Janek', 'Franek', 'Zenek', 'Leszek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Ola';

if (allNames.indexOf(newName) === -1) {
	var allNewNames = allNames.push(newName);
}

console.log(allNames);