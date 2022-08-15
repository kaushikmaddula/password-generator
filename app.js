let abc = "abcdefghijklmnopqrstuvwxyz";
let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/";


const generateBtn = document.getElementById("generateBtn");
const inputRange = document.getElementById("inputRange");
const passwordLength = document.getElementById("passwordLength");
const passwordBox1 = document.getElementById("password1");
const passwordBox2 = document.getElementById("password2");
const passwordBox = document.getElementsByClassName("passwordBox");
const abcCheckbox = document.getElementById("abc");
const ABCCheckbox = document.getElementById("ABC");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

 



function generatePasswords(){
  let password1 = "";
  let password2 = "";


  for(let i = 0; i<passwordLength.textContent; i++){
    password1 += generateCharacters(); 
 
    password2 += generateCharacters(); 
  } 


  passwordBox1.textContent = password1;
  passwordBox2.textContent = password2;
  
}


function generateCharacters(){
  let characters = [];

  // for each Checkbox that is checked push one specific character in the array 
  if(abcCheckbox.checked){
    characters.push(abc[Math.floor(Math.random() * abc.length)]);
  } 
  if(ABCCheckbox.checked){
    characters.push(ABC[Math.floor(Math.random() * ABC.length)]);
  }
  if(numbersCheckbox.checked){
    characters.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  if(symbolsCheckbox.checked){
    characters.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }
  if(characters.length === 0){
    return "";
  }

  // return one character from the array above
  return characters[Math.floor(Math.random() * characters.length)];
}



// Change the PasswordLength value
inputRange.addEventListener("input", ()=>{
  passwordLength.textContent = inputRange.value;
});
generateBtn.addEventListener("click", generatePasswords);


// Copy the password when clicked
for(let p of passwordBox){
  p.addEventListener("click", (element) => {
   let text = element.target.textContent;
    navigator.clipboard.writeText(text); 

    // Create and add a copyIcon when clicked
    let copyIcon = document.createElement("i");
    copyIcon.classList.add("fa-solid", "fa-copy");
    p.appendChild(copyIcon);


    // Delete the copyIcon after 1 second
    setTimeout( ()=>{
      p.children[0].remove();
    },1000) 

  });
} 



/*========== Animate Blobs with KUTE.js ========== */
/* Blob 1 & 2 animation */
const animationBlueBlob = KUTE.fromTo(
  '#blob1',
  { path: '#blob1' },
  { path: '#blob2' },
  { repeat: 999, duration: 3000, yoyo: true}
)

animationBlueBlob.start();

/* Blob 3 & 4 animation  */
const animationOrangeBlob = KUTE.fromTo(
  '#blob3',
  { path: '#blob3' },
  { path: '#blob4' },
  { repeat: 999, duration: 3000, yoyo: true }
)

animationOrangeBlob.start();