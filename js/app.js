const blueSwitch = document.querySelector('.blue-switch');
const yellowSwitch = document.querySelector('.yellow-switch');
const header = document.querySelector('header');

blueSwitch.onclick = () =>{
    header.classList.replace('yellow', 'blue');
    blueSwitch.classList.add('active');
    yellowSwitch.classList.remove('active');
}

yellowSwitch.onclick = () =>{
    header.classList.replace('blue', 'yellow')
    blueSwitch.classList.remove('active');
    yellowSwitch.classList.add('active');
}

document.querySelector('.contact-btn').onclick = (e)  =>{
    e.preventDefault()
}


// blueSwitch.addEventListener('click', function(){
//     header.classList.add('blue');
//     header.classList.remove('yellow')
//     blueSwitch.classList.add('active');
//     yellowSwitch.classList.remove('active')
// })

// yellowSwitch.addEventListener('click', function(){
//     header.classList.add('yellow');
//     header.classList.remove('blue');
//     blueSwitch.classList.remove('active');
//     yellowSwitch.classList.add('active')
// })