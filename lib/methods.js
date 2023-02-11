
/*
** pegar chave aleatória do array
*/ 
const get_random = (list) => {
  return list[Math.floor((Math.random()*list.length))]; 
}

/*
** get the root element
*/ 
const r = document.querySelector(':root');


/*
** get the styles (properties and values) for the root
*/ 
const rs = getComputedStyle(r); 

/*
** create a function for getting a variable value
*/ 
const _getCSSVariable = (value_echo, propertyValue) => {
  /*
  ** alert the value of the --blue variable
  */ 
  console.log(value_echo + rs.getPropertyValue(propertyValue));  
}

_getCSSVariable("The value of --cenario is: ", '--cenario')
_getCSSVariable("The value of --cenario1 is: ", '--cenario1')
_getCSSVariable("The value of --cardImageBack1 is: ", '--cardImageBack1')
_getCSSVariable("The value of --cardImageBack2 is: ", '--cardImageBack2')

/*
** create a function for setting a variable value
*/ 

const _setCSSVariable = () => {
  /*
  ** set the value of variable --blue to another value (in this case "lightblue")
  */ 
  r.style.setProperty('--blue', 'red');
}

/*
** demo https://memoriagame.github.io/assets/theme/character/pokemon/kadabra.png
*/ 
