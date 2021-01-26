let isDark = false ;
const changeBackground = document.querySelector('.darkMode--js');

changeBackground.addEventListener('click', ()=>{
  if(isDark){
    document.documentElement.style.setProperty('--background', 'radial-gradient(circle, rgba(247,242,244,1) 0%, rgba(38,65,94,1) 0%)')
  
  isDark = false;}
  else{
    document.documentElement.style.setProperty('--background', 'black' )
  isDark = true;
  }
})