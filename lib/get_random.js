/*
pegar chave aleatória do array
*/ 

const get_random = (list) => {
  return list[Math.floor((Math.random()*list.length))]; 
}
