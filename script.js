const inputCheck = document.querySelector('#modo-noturno');
const elementoBody = document.getElementsByTagName('body')[0];

inputCheck.addEventListener('click', () => {
    console.log('Clique no interruptor de modo noturno');
    const modo = inputCheck.checked ? 'dark' : 'light'
    elementoBody.setAttribute("data-bs-theme", modo)
});


