const navSlice =() =>{
  const burger= document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  //Toggle Nav
  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
  //Animate Links
    navLinks.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation = '';
      }
      else{
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 1}s`;
      }
      
    });
    //burger animation
    burger.classList.toggle('toggle');

  });
  

}

navSlice();