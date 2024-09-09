document.getElementById('buttonText').addEventListener('click', () =>{
    let inputValue = document.getElementById('inputText').value;
    localStorage.setItem('valorInput', inputValue);
    inputText.value = "";
})
