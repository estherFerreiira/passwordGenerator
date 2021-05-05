
let loadChar = document.getElementById("load");
let copyChar = document.getElementById("copy");
let textArea = document.getElementById("selectedChar");

let values = "";
let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%*#&";


load.addEventListener('click', () =>{
    values = document.getElementById("sizeChar").value;
    let result = "";
    for(let i = 0; i < values; i++)
    result += charList.charAt(Math.floor(Math.random()* charList.length));
    textArea.innerHTML = `${result}`;
        return result
})


copy.addEventListener("click", () => {
    textArea.select();
    document.execCommand('copy');
});














