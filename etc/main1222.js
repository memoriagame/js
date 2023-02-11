// api css variable para manipulação de strings
const getCSSVar = (name, element = document.documentElement) => {
    return window.getComputedStyle(element).getPropertyValue(`--${name}`);
}
