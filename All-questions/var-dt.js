//1. Let’s begin by running the trainingDays.js file. In the console we can see that the program is broken!
//deally, the getRandEvent() function selects an event at random. The getTrainingDays() function returns the number of days to train based on the event selected. The logEvent() and logTime() functions print the athlete name, event, and number of days to the console.

//But poorly scoped variables are causing errors.
// Function to select a random event
// Function to select a random event
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // Function to return the number of training days based on the selected event
  const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
    return days;
  };
  
  // Function to log the event
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  // Function to log the number of training days
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  // Main function to generate athlete's training details
  const name = 'Nala';
  const event = getRandEvent();
  const days = getTrainingDays(event);
  
  logEvent(name, event);
  logTime(name, days);
  
  //2.To avoid the ReferenceError, declare days within the getTrainingDays function, before the if statement.
// Function to return the number of training days based on the selected event
const gettrainingDays = event => {
    let days; // Declaring days variable before the if statement
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
    return days;
  };  
//3. Run the program again: no error, but days is undefined! New days variables are being defined in the scope of each if/else if statement.
//delete the three let‘s within the if/else if statements.



  // Function to return the number of training days based on the selected event
const getTrainingdays = event => {
    let days; // Declaring days variable before the if statement
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
    return days;
  };
  
 //4. Run the program again: fixed! Now the if/else if statements are changing the original days rather than defining a new one. 
// Function to return the number of training days based on the selected event
const gettrainingdays = event => {
    let days; // Declaring days variable before the if statement
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
    return days;
  };
  //5. The log functions–logEvent() and logTime()–use the same name variable. There seems to be a problem with the scoping; we can tell by the amount of duplicate code here! In addition to variables scoped too broadly, duplicate code can indicate that a variable may be scoped too tightly.
//let’s avoid this repetition by adding name as the first parameter for each function.
// Function to return the number of training days based on the selected event
const getTD = event => {
    let days; // Declaring days variable before the if statement
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
    return days;
  };
  //6. Move the name variable to global scope.
  // Declare name variable in global scope
const p = 'Nala';

// Function to select a random event
const m = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// Function to return the number of training days based on the selected event
const l = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};

// Function to log the event
const logevent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

// Function to log the number of training days
const logtime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// Main function to generate athlete's training details
const eachvent = getRandEvent();
const Days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);

//7. Pass name as the first argument to logEvent() and logTime().

// Declare name variable in global scope
const k = 'Nala';

// Function to select a random event
const gj = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// Function to return the number of training days based on the selected event
const i = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};

// Function to log the event
const Event = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

// Function to log the number of training days
const Time = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// Main function to generate athlete's training details
const  a= getRandEvent();
const b = getTrainingDays(event);

logEvent(name, a); // Pass name as the first argument
logTime(name, b); // Pass name as the first argument
//8. Check that the program still works! Run it and check the output.
//11. We see that the random variable is defined in the global scope. Each time getRandEvent() is called, it uses the same value.
//At the top of the file, move the random variable from the global scope to block scope within the getRandEvent function.

consth= () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  const g = event => {
    let days;
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
    return days;
  };
  
  const f= (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  const c = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const e = getRandEvent();
  const d = getTrainingDays(event);
  const nm = 'Nala';
  
  logEvent(name, event);
  logTime(name, days);
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
  
  logEvent(name2, event2);
  logTime(name2, days2);
  

