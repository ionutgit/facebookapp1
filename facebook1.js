// un array (de tip var) cu numele database
// stocheaza obiecte {} delimitate prin ,
// obiectele sunt formate din colectii de proprietati { proprietate: valoare }
// delimitate prin virgula
// { username: "valoare_username", password: "valoare_parola"}
var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123",
	},
	{
		username: "ingrid",
		password: "777"
	}
];

// idem ca si array-ul database de mai sus
// exceptie: obiectele sunt formate din proprietatile: username si timeline
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning"
	},
	{
		username: "Sally",
		timeline: "Javascript is soooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

// 2 variabile care stocheaza raspunsul dat de utilizator
// functia prompt solicita utilizatorului sa introduca o valoare
// in cazul nostru nume_utilizator si parola
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// declaratie functie
function signIn(user, pass) {
		if (user === database[0].username &&
				pass === database[0].password) {
			console.log(newsfeed);
		} else {
			alert("Sorry, wrong username and password!");
		}
}

// apelare functie
signIn(userNamePrompt, passwordPrompt);
