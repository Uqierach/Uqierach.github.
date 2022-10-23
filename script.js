function handleSubmit() {
    const name = document.getElementById('name').value;
    
    localStorage.setItem('NAME', name);

    return;
}