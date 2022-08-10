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