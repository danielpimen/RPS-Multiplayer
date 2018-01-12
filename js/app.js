/*Rock, paper, scissors
1) Prompt question asking for player name
	1a) Send player1name to Firebase
	1b)Send player2name to Firebase
2)Use jQuery, display user name and add click events to images
3) Give each image value, send value to firebase
4)Compare answers 
5)alert who won, add win to player score
6) reset
*/

//////Need to save player names to 

var player1Status=false;
var player2Status=false;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDC-w64NCTJXVzF1I6-fu22Ls1StWDhCpE",
    authDomain: "new-project-3ac4c.firebaseapp.com",
    databaseURL: "https://new-project-3ac4c.firebaseio.com",
    projectId: "new-project-3ac4c",
    storageBucket: "new-project-3ac4c.appspot.com",
    messagingSenderId: "648590477945"
};
firebase.initializeApp(config);

var database = firebase.database();

var player1 = prompt('Please Enter Your Name');
database.ref().set({
    player1Name: player1,
})
$('.player1Name').text(database.player1Name);
//$('.player2Name').text(player2);
console.log(database.player1Name)

database.ref().on('value', function(snapshot){
	if (snapshot.child('player1Name').exists()){
		console.log('Player 1 is Present');
	}else {
		var player2Name = prompt('You are player #2, enter your name.');

	}
})

