let input = document.querySelector('input');
let ul = document.querySelector('ul');
let button = document.querySelector('#add');
let delbutton = document.querySelectorAll('ul button');
let allli = document.querySelectorAll('ul li');

button.addEventListener('click', () =>{
    if(input.value === "")
        alert('You must type something!');
    else
    {
        let li = document.createElement('li');
        let btn = document.createElement('button');
        li.innerText = input.value;
        btn.innerText = '❌';
        li.appendChild(btn);
        ul.appendChild(li);
        Btnrem(btn);
        Lits(li);
    }
})

for (let i = 0; i < delbutton.length; i++) { 
    let button = delbutton[i];
    let li = allli[i];
    Lits(li);
    Btnrem(button);
}

function Lits(li) {
    li.addEventListener('click', () => {
        if(li.style.textDecoration == 'none' || li.style.textDecoration == '')
        {
            
            let btn = li.querySelector('button');
            btn.textDecoration = 'none';
            li.style.textDecoration = 'line-through';
            li.style.backgroundColor = 'rgb(193, 191, 191)';
        }
        else 
        {
            li.style.textDecoration = 'none'; li.style.backgroundColor = 'transparent';
        }
    })
}

function Btnrem(but){
    but.addEventListener('click', () =>{
        let delbtn = but.closest('li');
        delbtn.remove();
    })
}