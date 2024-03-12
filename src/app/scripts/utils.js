export function setElementImage(className, image) {
    const element = document.querySelector("." + className);
    if (element) {
        element.setAttribute("src", image);
    } else {
        console.error(`No se encontró la etiqueta de imagen con la clase '${className}'.`);
    }
}