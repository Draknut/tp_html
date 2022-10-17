let txtfield = document.getElementById('text_field')
let submitbtn = document.getElementById('btn')
let listItem = document.getElementById('listItem')

console.log(txtfield)
console.log(submitbtn)
submitbtn.addEventListener('click', () =>{

let text = txtfield.value;

if(text.length == 0){

    console.log("ecrit ton pèwou");
}
else{

    let newItem = document.createElement('li');
    newItem.innerText = text;
    listItem.appendChild(newItem);
    console.log(text);
    txtfield.value = '';
    
}
})
