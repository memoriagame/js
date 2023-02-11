
/*
** remover atributo src da img que não tem link local ou remoto
*/ 

const reset_if_image_is_null = (nameClass) => {
    elements = document.getElementsByClassName(nameClass);
    for (let i = 0; i <elements.length; i++) {
        if(elements[i].getAttribute('src') == "") {
           return elements[i].removeAttribute('src') //.style.backgroundColor=colorValue; // return elements[i].setAttribute('style', colorValue); // document.getElementById('tst').removeAttribute('src'); 
         }
    }
}

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
  r.style.setProperty('--blue', propertyValue);
}

// test 1
_setCSSVariable('--cenario', 'red')
_setCSSVariable('--cenario', 'none')
_setCSSVariable('--cenario', 'undefined')
_setCSSVariable('--cenario', 'null')

// test 2
_setCSSVariable('--cenario1', 'red')
_setCSSVariable('--cenario1', 'none')
_setCSSVariable('--cenario1', 'undefined')
_setCSSVariable('--cenario1', 'null')

// test 3
_setCSSVariable('--cardImageBack1', 'red')
_setCSSVariable('--cardImageBack1', 'none')
_setCSSVariable('--cardImageBack1', 'undefined')
_setCSSVariable('--cardImageBack1', 'null')

// test 4
_setCSSVariable('--cardImageBack2', 'red')
_setCSSVariable('--cardImageBack2', 'none')
_setCSSVariable('--cardImageBack2', 'undefined')
_setCSSVariable('--cardImageBack2', 'null')

// test 5
_setCSSVariable('--cenario', './back1.jpg')
_setCSSVariable('--cenario1', './back1.jpg')
_setCSSVariable('--cardImageBack1', './back1.jpg')
_setCSSVariable('--cardImageBack2', './back1.jpg')

// test 6
_setCSSVariable('--cenario', './back.png')
_setCSSVariable('--cenario1', './back.png')
_setCSSVariable('--cardImageBack1', './back.png')
_setCSSVariable('--cardImageBack2', './back.png')

// test 6.1
_setCSSVariable('--cenario', './cenario1.png')
_setCSSVariable('--cenario1', './cenario1.png')
_setCSSVariable('--cardImageBack1', './cenario1.png')
_setCSSVariable('--cardImageBack2', './cenario1.png')

// test 6.2
_setCSSVariable('--cenario', './cenario.png')
_setCSSVariable('--cenario1', './cenario.png')
_setCSSVariable('--cardImageBack1', './cenario.png')
_setCSSVariable('--cardImageBack2', './cenario.png')

// test 6.3
_setCSSVariable('--cenario', './.png')
_setCSSVariable('--cenario1', './.png')
_setCSSVariable('--cardImageBack1', './.png')
_setCSSVariable('--cardImageBack2', './.png')

// test 6.4
_setCSSVariable('--cenario', './.jpeg')
_setCSSVariable('--cenario1', './.jpeg')
_setCSSVariable('--cardImageBack1', './.jpeg')
_setCSSVariable('--cardImageBack2', './.jpeg')

// test 6.5
_setCSSVariable('--cenario', './.jpg')
_setCSSVariable('--cenario1', './.jpg')
_setCSSVariable('--cardImageBack1', './.jpg')
_setCSSVariable('--cardImageBack2', './.jpg')

// test 6.6
_setCSSVariable('--cenario', './')
_setCSSVariable('--cenario1', './')
_setCSSVariable('--cardImageBack1', './')
_setCSSVariable('--cardImageBack2', './')

// test 6.7
_setCSSVariable('--cenario', '')
_setCSSVariable('--cenario1', '')
_setCSSVariable('--cardImageBack1', '')
_setCSSVariable('--cardImageBack2', '')

// test 6.8
_setCSSVariable('--cenario', '/')
_setCSSVariable('--cenario1', '/')
_setCSSVariable('--cardImageBack1', '/')
_setCSSVariable('--cardImageBack2', '/')

// test 7
_setCSSVariable('--cenario', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back1.jpg')
_setCSSVariable('--cenario1', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back1.jpg')
_setCSSVariable('--cardImageBack1', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back1.jpg')
_setCSSVariable('--cardImageBack2', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back1.jpg')

// test 8
_setCSSVariable('--cenario', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back.png')
_setCSSVariable('--cenario1', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back.png')
_setCSSVariable('--cardImageBack1', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back.png')
_setCSSVariable('--cardImageBack2', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back.png')

// test 9
_setCSSVariable('--cenario', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/cenario.png')
_setCSSVariable('--cenario1', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/cenario.png')
_setCSSVariable('--cardImageBack1', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/cenario.jpg')
_setCSSVariable('--cardImageBack2', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/cenario.png')

// test 9
_setCSSVariable('--cenario', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/cenario1.png')
_setCSSVariable('--cenario1', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/cenario1.png')
_setCSSVariable('--cardImageBack1', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/cenario1.jpg')
_setCSSVariable('--cardImageBack2', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/cenario1.png')

// test 10
_setCSSVariable('--cenario', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/cenario.png')
_setCSSVariable('--cenario1', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/cenario1.png')
_setCSSVariable('--cardImageBack1', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back1.jpg')
_setCSSVariable('--cardImageBack2', 'https://cdn.jsdelivr.net/gh/memoriagame/assets/public/css/back.png')


/*
** demo https://memoriagame.github.io/assets/theme/character/pokemon/kadabra.png
*/ 
