
const setCSSVar = (name, value, element = document.documentElement) => {
    element.style.setProperty(`--${name}`, value);
}

const removeCSSVar = (name, element = document.documentElement) => {
    element.style.removeProperty(`--${name}`);
}
