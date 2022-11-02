/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app"

const appNode = document.querySelector('#app')

const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-EN', {    
    style: 'currency',
    currency: 'USD'
    }).format(price)

    return newPrice ;
}

window
    .fetch(`${baseUrl}/api/avo`)

    .then((respuesta) => respuesta.json())

    .then((respuestaJson) => {
        const todosLosItems = []
        respuestaJson.data.forEach((item) => {
            
            const image = document.createElement('img');
            image.src = `${baseUrl}${item.image}`
            image.className = 'h-16 w-16 md:h24 md:w-24 mx-auto md:mx-0 md:mr-6 flex-shrink-0 rounded-full'

            const title = document.createElement('h2');
            title.textContent = item.name
            title.className = 'text-lg'

            const price = document.createElement('div');
            price.className = 'text-gray-600'
            price.textContent = formatPrice(item.price);

            const priceAndTitle = document.createElement('div')
            priceAndTitle.className = 'text-center md:text-left';
            priceAndTitle.appendChild(title)
            priceAndTitle.appendChild(price)

            const container = document.createElement('div');
            container.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray300'
            container.appendChild(image);
            container.appendChild(priceAndTitle)


            todosLosItems.push(container);
        });
        appNode.append(...todosLosItems);
    })
