window.addEventListener('load', () => {
    const name = localStorage.getItem('NAME');


    document.getElementById('output').innerHTML = name;
}); 