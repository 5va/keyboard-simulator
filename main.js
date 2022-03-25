document.addEventListener('DOMContentLoaded', () =>{

    const keys = document.querySelectorAll(".container #key");
    const container=document.getElementsByClassName("taskbar")
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            let letter = document.createElement("div");
            letter.innerText=target.innerText
            letter.setAttribute("id","square")

            container[0].appendChild(letter);
        }};
})