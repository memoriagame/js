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
