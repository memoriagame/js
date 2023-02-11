const listCharacterPokemon = ['kadabra', 'mimikyu', 'slowbro', 'espeon', 'murkrow', 'togepi', 'wobbuffet', 'gloom', 'nickit', 'croagunk', 'glastly', 'drowzee', 'drifloon', 'ralts', 'spinda', 'psyduck'];
const characterPokemonFilename = listCharacterPokemon.map(filename => `https://memoriagame.github.io/assets/theme/character/pokemon/`+filename+'.png')
characterPokemonFilename.forEach(filepath = (filepath) =>  { 
   console.log(`<img src="`+filepath+`"/>`)
});
