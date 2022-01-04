
let MenuBtn = document.querySelector('#menu-bar');
let MenuList = document.querySelector('header ,nav');

MenuBtn.onclick = () =>{
    MenuBtn.classList.toggle('fa-times');
    MenuList.classList.toggle('active');
}
window.onscroll = () =>{
    MenuBtn.classList.remove('fa-times');
    MenuList.classList.remove('active');
}

// jQuery Version

$('.venobox').venobox({

    // settings here
  
  });
  
  
  
  // Vanilla JS Version
  
  new VenoBox();
  