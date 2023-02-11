const http = new simpleAJAX;

/*
** pegar chave aleatória do array
*/ 

const get_random = (list) => {
  return list[Math.floor((Math.random()*list.length))]; 
}

/*
** demo https://memoriagame.github.io/assets/theme/character/pokemon/kadabra.png
*/ 

const listPokemonName = ['kadabra', 'mimikyu', 'slowbro', 'espeon', 'murkrow', 'togepi', 'wobbuffet', 'gloom', 'nickit', 'croagunk', 'glastly', 'drowzee', 'drifloon', 'ralts', 'spinda', 'psyduck'];
const generateURLPokemon = `https://memoriagame.github.io/assets/theme/character/pokemon/${get_random(listPokemonName+".png")}`

const getCharacterPokemon = http.get(generateURLPokemon,
  (err, imageCharacter) => {
    if(err) {
      console.log(err)
    } else {
     return imageCharacter
    }
  });
