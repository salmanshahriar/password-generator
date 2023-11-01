  //password generate function
  function  generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    const charset = (
        (uppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
        (lowercase ? 'abcdefghijklmnopqrstuvwxyz' : '') +
        (numbers ? '0123456789' : '') +
        (symbols ? '!@#$%^&*()_+[]{}|;:,.<>?~' : '')
    );
    console.log(length)
    if ((length < 4) || (length > 32)) {
        alert('Please select numbers between (4-32)')
        return
    }
    let password = '';
    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
 };
 //copy to clipboard function
 function copyToClipboard() {
    const passwordField = document.getElementById("password").textContent;
    const clickToCopy = document.getElementById('clickToCopy');
    const passwordToCopy = clickToCopy.textContent;
    const tempInput = document.createElement('input');
    tempInput.value = passwordField;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy')
    document.body.removeChild(tempInput); 
    clickToCopy.textContent = 'Copied!';
    setTimeout(() => {
        clickToCopy.textContent = passwordToCopy;
    }, 800);
 };
//password generate
 document.getElementById('generate').addEventListener('click', () => {
    const password = generatePassword();
    const passwordField = document.getElementById("password");
    passwordField.textContent = password;
    passwordField.classList.add('resultAnimation');
    setTimeout(() => {
        passwordField.classList.remove('resultAnimation');
    }, 0);
 });
 //copy to clipboard
 document.getElementById('clickToCopy').addEventListener('click', copyToClipboard)
 //image checked/unchecked
 const image1 = document.getElementById('image1');
 const image2 = document.getElementById('image2');
 const image3 = document.getElementById('image3');
 const image4 = document.getElementById('image4');
 uppercase.addEventListener('click', () => {
    if (uppercase.checked === true){
        image1.classList.remove('hide');
    }
    else if (uppercase.checked === false){
        image1.classList.add('hide');
    }
 });
 symbols.addEventListener('click', () => {
    if (symbols.checked === true){
        image2.classList.remove('hide');
    }
    else if (symbols.checked === false){
        image2.classList.add('hide');
    }
 });
 lowercase.addEventListener('click', () => {
    if (lowercase.checked === true){
        image3.classList.remove('hide');
    }
    else if (lowercase.checked === false){
        image3.classList.add('hide');
    }
 });
 numbers.addEventListener('click', () => {
    if (numbers.checked === true){
        image4.classList.remove('hide');
    }
    else if (numbers.checked === false){
        image4.classList.add('hide');
    }
 });