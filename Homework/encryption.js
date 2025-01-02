const btencry = document.querySelector("#encrypt-btn"); 
const btdencry = document.querySelector("#decrypt-btn"); 
const shiftEncrypt = document.querySelector("#shiftEncrypt"); 
const shiftDecrypt = document.querySelector("#shiftDecrypt"); 

const listLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let newText = "";

// Encryption function
function encrypt() {
  const textarea = document.querySelector("#plainText"); 
  const keyShift = Number(shiftEncrypt.value);
  
  newText = "";

  for (const letter of textarea.value) {
    if (!listLetter.includes(letter.toUpperCase())) {
      newText += letter; 
      continue;
    }

    const indexLetter = listLetter.findIndex(item => item === letter.toUpperCase());
    let indexNewLetter = indexLetter + keyShift;
    if (indexNewLetter > 25) {
      indexNewLetter -= 26; 
    } else if (indexNewLetter < 0) {
      indexNewLetter += 26; 
    }
    if (letter === letter.toUpperCase()) {
      newText += listLetter[indexNewLetter];
    } else {
      newText += listLetter[indexNewLetter].toLowerCase();
    }
  }
  document.querySelector("#cipherTextEncrypt span").textContent = newText;
}
// Decryption function
function decrypt() {
  const textarea = document.querySelector("#cipherText"); 
  const keyShift = Number(shiftDecrypt.value); 
  
  newText = "";

  for (const letter of textarea.value) {
    if (!listLetter.includes(letter.toUpperCase())) {
      newText += letter; 
      continue;
    }

    const indexLetter = listLetter.findIndex(item => item === letter.toUpperCase());

    let indexNewLetter = indexLetter - keyShift;
    if (indexNewLetter > 25) {
      indexNewLetter -= 26;
    } else if (indexNewLetter < 0) {
      indexNewLetter += 26; 
    }

    if (letter === letter.toUpperCase()) {
      newText += listLetter[indexNewLetter];
    } else {
      newText += listLetter[indexNewLetter].toLowerCase();
    }
  }
  document.querySelector("#plainTextDecrypt span").textContent = newText;
}

// Add event listener for the encrypt button
btencry.addEventListener("click", encrypt);

// Add event listener for the decrypt button
btdencry.addEventListener("click", decrypt);



