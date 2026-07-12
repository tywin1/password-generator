const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordEl1 = document.getElementById("password-el1")
const passwordEl2 = document.getElementById("password-el2")

function generatePassword() {
    let password = "";
    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

pwButton.addEventListener("click", function() {
    passwordEl1.textContent = generatePassword();
    passwordEl2.textContent = generatePassword();
})


/* Below is to copy the password to clipboard with a "Copied!" message animation */
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const textElement = document.getElementById(targetId);
        
        // save the original text so it can revert back
        const originalText = textElement.textContent;

        // stop multiple copies from messing things up
        if (originalText === "Copied!") return;

        // copy to clipboard
        navigator.clipboard.writeText(originalText)
            .then(() => {

        // swap password to Copied! with background flash
        textElement.textContent = "Copied!";
        textElement.classList.add('copied-flash');

        // revert back to original text after 1500ms
        setTimeout(() => {
        textElement.textContent = originalText;
        textElement.classList.remove('copied-flash');
}, 1500);
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    });
});

