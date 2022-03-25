document.addEventListener('DOMContentLoaded', () =>{

    const keys = document.querySelectorAll(".container #key");
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            alert(target.innerText)
        }};
})