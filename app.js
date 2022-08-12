alert("welcome stranger!");

 let theGender;
 let urName = prompt("What is your name?");
 let gender = prompt('What is your gender? (male,female)');

 if(gender == 'male' || gender == 'Male'){
    theGender = " Mr. ";
 } else if(gender == 'female' || gender == 'Female') {
     theGender = ' Mrs. ';
 } else {
    theGender = "";
    alert('WHAT ARE YOU THEN ?!!!!')
 }; 

 let age = prompt('nice to meet you ' + urName + ' How old are you?');

 if(age == "" || age == 0){
    alert('You are not born yet?!!!!!!');
 }else{
    alert('WOW! YOU ARE ABOUT TO DIE!!!!')
 };

 let welcome = confirm('Do you want me to say hi?');



 if(welcome == true){
       if(age !== ""  ){
              alert('Hello ' + theGender + urName + " you are " + age + ' years old ' + " , Welcome here!" );
          } else{
                 alert('Hello ' + theGender + urName + " , Welcome here!" )
             }
          };

  let keepGoing = confirm('BTW can I ask you something?');

 if(keepGoing){
   
    let questions = [];
    questions[0] = prompt('Do you love me?');
    questions[1] = prompt('Do you need me?');
    questions[2] = prompt('Do you want me?');
    for(let i = 0; i < 3; i++ ){
   switch(questions[i]){
      case 'y':
      case 'Y':
      case 'yes':
      case 'Yes':
      case 'YES':
         questions[i] = 'yes';
         break;
      case 'n':
      case 'N':
      case 'no':
      case 'No':
      case 'NO':
         questions[i] = 'no';
         break;
      default:
      questions[i] = 'invalid';
   }
}

console.log(questions);
}

let rateMe = prompt('plz give a rate from (0-5)');
if(rateMe < 0){
   rateMe = 0;

} else if(rateMe > 5){
   rateMe = 5;
} else {
   alert("You didn't rated me :(");
}
alert("Have a nice day " + theGender + urName)

console.log(rateMe);












 

  
