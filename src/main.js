//npx serve -s -l 8000
//npm run watch

console.log('Welcome to PizzaLand 🍕 !');

class Character {
	firstName;
	lastName;
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

const heisenberg = new Character('Walter', 'White');
console.log(heisenberg.firstName, heisenberg.fullName());
