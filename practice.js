//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
  name: 'Cesar',
  age: 27,
};
console.log(me.name);



//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: "Broods",
  food: 'Steak',
  person: "Cam",
  book: "Harry Potter",
  movie: "007",
  holiday: "B-day"
};


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "Mazda";
favoriteThings.brand = "Tyson"


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {

};

var item = "firstPocket";

backPack["firstPocket"] = "chapstick";

backPack.color = "Brown";

//After you do the above, alert your entire backPack object.

console.log(backPack);


//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var alsoMe = {
  name: "C",
  age: 27,
  height: "5'11",
  gender: "Male",
  married: "Single",
  eyeColor: "Brown",
  hairColor: "Black"
};

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var prop in alsoMe) {
  console.log(alsoMe[prop]);
}

//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  firstTitle: "5:35",
  secondTitle: "6:00",
  thirdTitle: '4:00',
  fourthTitle: '3:00',
  fifthTitle: '4:00'
 };


for (var prop in album) {
  console.log(prop);
}




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  Texas: 900,
  Arizona: 80000,
  Utah: 10,
  NewYork: 100,
  California: 90
};

for (var prop in states) {
  if (states[prop] > 30000) {
    console.log(prop);
  }
}




//NEXT PROBLEM



var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
function removeFalsy(obj) {
  for (var prop in user1) {
    if (!user1[prop]) {
      delete user1[prop];
    }
  }
    console.log(user1);
}
removeFalsy(user1);
//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user1.name = "Cesar";
user1.pwHash = "Boogie";
user1.username = "cesarxp2";



//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            console.log('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user2.name = "Tyler S. McGinnis";
user2.email = "tyler.mcginnis@devmounta.in";

//Now call the sayName method that's on the user object which will alert the users email

 user2.sayName("email");




//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {

};

methodCollection.alertHello = function() { 
  alert("hello");
}
methodCollection.logHello = function () {
  console.log("hello");
}
methodCollection.alertHello();
methodCollection.logHello();



//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.


function makePerson(name1, bday1, ssn1) {
  var newObj = {
    name: name1,
    birthday: bday1,
    ssn: ssn1
    
  };
  return newObj;  
}
makePerson("Cesar", "June", 123456789);

//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.
function makeCard(cardNumber, expirationDate, securityCode) {
  var boo = Math.floor(Math.random() * (9999999999 - 100000000 + 1)) + 100000000;
  var bee = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  var baa = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    var CC = {
    Numba: boo,
    Expiry: bee,
    CCV: baa,
  };
  return CC;
}

makeCard();

//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/
function bindCard(personObj, CCobj) {
  for (var attrname in CCobj) { personObj[attrname] = CCobj[attrname]; }
  return personObj;
}
bindCard(newObj, testy);
