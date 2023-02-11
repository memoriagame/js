
/*
** pegar chave aleatória do array
*/ 

const get_random = (list) => {
  return list[Math.floor((Math.random()*list.length))]; 
}

/*
** variável ajax-http
*/ 

const http = new simpleAJAX;


/*
** função principal ajax-http
*/ 

const HTTPAjax = (url) => { 
   http.get(url, (err, data) => {
    if(err) {
      console.log(err)
    } else {
    console.log(data);
    }
  });
}

/*
** demo https://memoriagame.github.io/assets/theme/character/pokemon/kadabra.png
*/ 

const listCharacterPokemon = ['kadabra', 'mimikyu', 'slowbro', 'espeon', 'murkrow', 'togepi', 'wobbuffet', 'gloom', 'nickit', 'croagunk', 'glastly', 'drowzee', 'drifloon', 'ralts', 'spinda', 'psyduck'];
const characterPokemonFilename = listCharacterPokemon.map(filename => `https://memoriagame.github.io/assets/theme/character/pokemon/`+filename+'.png')
const checkFilePathAndName = characterPokemonFilename.forEach(filePath => HTTPAjax(filePath))
console.log(checkFilePathAndName);
