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

        textElement.textContent = "Copied!";
        textElement.classList.add('copied-flash'); // button flashes

        setTimeout(() => {
        textElement.textContent = originalText;
        textElement.classList.remove('copied-flash'); // flash stops after 1500ms
}, 1500);
        
        // 1. Save the original password text so we can restore it later
        const originalText = textElement.textContent;

        // 2. Prevent double-clicking bugs if it's already showing "Copied!"
        if (originalText === "Copied!") return;

        // 3. Copy to the clipboard
        navigator.clipboard.writeText(originalText)
            .then(() => {
                // 4. Swap the text to "Copied!"
                textElement.textContent = "Copied!";
                
                // 5. Wait 1.5 seconds (1500ms), then change it back
                setTimeout(() => {
                    textElement.textContent = originalText;
                }, 1500);
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    });
});

