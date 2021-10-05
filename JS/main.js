//conectamos los elementos html con el codigo
const botonCheck = document.querySelector("button");
const stringShows = document.querySelector("input");

//capturamos el click
botonCheck.addEventListener("click", (e) => {
    e.preventDefault();

    //capturamos el texto que ingresa y aplicamos el metodo
    //toLocaleLowerCase
    const inputWord = stringShows.value.toLocaleLowerCase();
    //aplicamos un split
    const palabra = inputWord.split("");

    //aplicando el metodo reverse para guardarlo en una variable
    const reArray = palabra.reverse();

    //volvemos a unir la palabra
    const joinArray = reArray.join("");

    //hacemos la comparacion de la palabra captada es igual a la palabra en reversa
    if (inputWord == joinArray) {
        //si es un palindromo lo mostramos en los elementos
        document.querySelector(".output-text").innerHTML = `<div>
        <p> ${inputWord} = ${joinArray} </p>
        <p style="font-size: 1rem;">Es un palindromo '${inputWord}'</p>
        </div>`;
        str.value = "";
    } else {
        document.querySelector(
            ".output-text"
        ).innerHTML = `<p style="font-size: 1rem;">No es un palindromo.</p>`;
    }
});