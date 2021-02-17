const entry = localStorage.getItem('entry');
let checkResult = '';

if (entry){
  console.log(`wartość entry: ${entry}`);
  checkResult = entry;
}

const entryInput = document.querySelector('.entry--js');
entryInput.value = checkResult;

const clickButton = document.querySelector('.save--js');

clickButton.addEventListener ('click' , () => {
    localStorage.setItem('entry', entryInput.value);
})