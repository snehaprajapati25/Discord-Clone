const languageBox = document.querySelector(".language-box");
const languageMenu = document.querySelector(".language-menu");
const languages = document.querySelectorAll(".language-menu p");
const dropdowns = document.querySelectorAll(".dropdown")
// const dropdownMenu = document.querySelector(".dropdown-menu")
const selectedLanguage = document.querySelector("#selected-language");

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (e)=>{
        e.stopPropagation();
        const dropdownMenu = dropdown.querySelector(".dropdown-menu")

        // Close all menus first
        document.querySelectorAll(".dropdown-menu").forEach((item)=>{
            if(item !== dropdownMenu){
                item.classList.remove("show");
            }
        })
        dropdownMenu.classList.toggle("show")
    })
});

document.addEventListener('click', (e)=>{
    if(!e.target.closest(".dropdown")){
        document.querySelectorAll('.dropdown-menu').forEach((menu)=>{
            menu.classList.remove('show');
        })
    }
})

//opening the dropdown of language
languageBox.addEventListener("click", (e) => {
    e.stopPropagation();
    languageMenu.classList.toggle("show");
});

languages.forEach((language)=>{
    language.addEventListener("click", ()=>{
        selectedLanguage.innerText = language.innerText;
        languageMenu.classList.remove("show");
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e)=>{
    if(!e.target.closest(".language-dropdown")){
        languageMenu.classList.remove("show");
    }
})