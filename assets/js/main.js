let chat = document.getElementById('chat');

chat.onclick = () => {
  let chatMenu = document.getElementById('chat-menu');

  if (chatMenu.style.opacity == 0) {
    chatMenu.style.opacity = 1;
    chatMenu.style.height = '40%';
  } else {
    chatMenu.style.opacity = 0;
    chatMenu.style.height = '0%';
  }
};

let checkBoxes = document.getElementsByClassName('select');

function checkMark(obj){
  if (obj.className == "far fa-square select"){
    obj.className = "far fa-check-square select";
  } else {
    obj.className = "far fa-square select";
  }
}

for (let i = 0; i < checkBoxes.length; i++){

  checkBoxes[i].onclick = () => {
    console.log(checkBoxes[i].className);
    if (checkBoxes[i].className == "far fa-check-square select check"){
      checkBoxes[i].className = "far fa-square select";
    } else {
      checkBoxes[i].className = "far fa-check-square select check";
    }

    let price = document.getElementById('flexible');
    let checkList = document.getElementsByClassName('check')
    price.textContent = `$${(checkList.length * 40 + 9.99)}`;
  }
}
