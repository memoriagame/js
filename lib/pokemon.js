const listCharacterPokemon = ['kadabra', 'mimikyu', 'slowbro', 'espeon', 'murkrow', 'togepi', 'wobbuffet', 'gloom', 'nickit', 'croagunk', 'glastly', 'drowzee', 'drifloon', 'ralts', 'spinda', 'psyduck'];
const characterPokemonFilename = listCharacterPokemon.map(filename => `https://memoriagame.github.io/assets/theme/character/pokemon/`+filename+'.png')

characterPokemonFilename.forEach(filepath = (filepath) =>  { 
   return `<img src="`+filepath+`"/>`
});

characterPokemonFilename.forEach(filepath = (filepath) =>  { 
   console.log(`<img src="`+filepath+`"/>`)
});

const randomElement = characterPokemonFilename[Math.floor(Math.random() * characterPokemonFilename.length)];
console.log(randomElement);
