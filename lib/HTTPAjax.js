
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
