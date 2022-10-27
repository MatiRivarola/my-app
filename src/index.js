/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo"

window
    .fetch(url)

    .then((respuesta) => respuesta.json())

    .then((respuestaJson) => {
        respuestaJson.data.forEach(item => {
            console.log(item.name)
        });
    })
