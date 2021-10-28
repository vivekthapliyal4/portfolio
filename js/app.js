const blueSwitch = document.querySelector(".blue-switch");
const yellowSwitch = document.querySelector(".yellow-switch");
const pinkSwitch = document.querySelector(".pink-switch");
const header = document.querySelector("header");

blueSwitch.onclick = () => {
  if (header.classList.contains("yellow")) {
    header.classList.replace("yellow", "blue");
  }
  if (header.classList.contains("pink")) {
    header.classList.replace("pink", "blue");
  }
  blueSwitch.classList.add("active");
  pinkSwitch.classList.remove("active");
  yellowSwitch.classList.remove("active");
};

yellowSwitch.onclick = () => {
  if (header.classList.contains("blue")) {
    header.classList.replace("blue", "yellow");
  }
  if (header.classList.contains("pink")) {
    header.classList.replace("pink", "yellow");
  }
  blueSwitch.classList.remove("active");
  pinkSwitch.classList.remove("active");
  yellowSwitch.classList.add("active");
};

pinkSwitch.onclick = () => {
  if (header.classList.contains("blue")) {
    header.classList.replace("blue", "pink");
  }
  if (header.classList.contains("yellow")) {
    header.classList.replace("yellow", "pink");
  }
  blueSwitch.classList.remove("active");
  pinkSwitch.classList.add("active");
  yellowSwitch.classList.remove("active");
};

document.querySelector(".contact-btn").onclick = (e) => {
  e.preventDefault();
};

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
