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

  --cardImageBack1: url('./back1.jpg');
  --cardImageBack2: url('./back.png');
  --cenario: url('./cenario.png');
  --cenario1: url('./cenario1.jpg');

// _setCSSVariable('--cardImageBack1', './back1.jpg');
// _setCSSVariable('--cardImageBack2', './back.png');
// _setCSSVariable('--cenario', './cenario.png');
// _setCSSVariable('--cenario1', './cenario1.png');

// _setCSSVariable('--cardImageBack1', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back1.jpg');
// _setCSSVariable('--cardImageBack2', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back.png');
// _setCSSVariable('--cenario', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/cenario.png');
// _setCSSVariable('--cenario1', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/cenario1.png');
