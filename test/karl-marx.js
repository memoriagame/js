
const setCSSVar = (name, value, element = document.documentElement) => {
    element.style.setProperty(`--${name}`, value);
}

const removeCSSVar = (name, element = document.documentElement) => {
    element.style.removeProperty(`--${name}`);
}

// remover atributo src da img que não tem link local ou remoto
const reset_if_image_is_null = (nameClass) => {
    elements = document.getElementsByClassName(nameClass);
    for (let i = 0; i <elements.length; i++) {
        if(elements[i].getAttribute('src') == "") {
           return elements[i].removeAttribute('src') //.style.backgroundColor=colorValue; // return elements[i].setAttribute('style', colorValue); // document.getElementById('tst').removeAttribute('src'); 
         }
    }
}
