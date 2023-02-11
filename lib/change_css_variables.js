// Get the root element
const r = document.querySelector(':root');

// Get the styles (properties and values) for the root
const rs = getComputedStyle(r); 

// Create a function for getting a variable value
const _getCSSVariable = () => {
  // Alert the value of the --blue variable
  console.log("The value of --blue is: " + rs.getPropertyValue('--blue'));  
}

// Create a function for setting a variable value
const _setCSSVariable = () => {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--blue', 'red');
}
