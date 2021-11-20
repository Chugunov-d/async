window.addEventListener('DOMContentLoaded', () => {

const nam = document.querySelector('.name');
const gender = document.querySelector('.gender');
const born = document.querySelector('.born');
const culture = document.querySelector('.culture');
const playedBy = document.querySelector('.playedBy');
const title = document.querySelector('.title');
const img = document.querySelector('.profile-photo');
const button = document.querySelector('.btn-space')

async function loadCardInfo(url,photourl){
   try{
  const response = await fetch(url,{
    "method":"GET"
  });
  const data = await response.json();
  console.log(data);
  nam.innerHTML = data.name;
  gender.innerHTML = data.gender;
  born.innerHTML = data.born;
  culture.innerHTML = data.culture;
  playedBy.innerHTML = data.playedBy;
  title.innerHTML = data.titles;
  img.src = photourl;
}
catch(error){
   console.log(error);
}
}

const array = [
   {url:'https://anapioficeandfire.com/api/characters/583', src:'https://www.anypics.ru/download.php?file=201211/1280x800/anypics.ru-43638.jpg'},
   {url:'https://anapioficeandfire.com/api/characters/69', src:'https://pbs.twimg.com/media/ELDwSrpX0AAY2s-.jpg:large'},
   {url:'https://anapioficeandfire.com/api/characters/700', src:'https://sm.ign.com/t/ign_in/news/g/game-of-th/game-of-thrones-season-6-finale-photos-preview-walder-freys_fp8t.1200.jpg'}
]
 
var i = 0;

button.addEventListener('click', () => { 
   if (i > array.length) {
      i = 0;
    }
    loadCardInfo(array[i].url, array[i].src);
    i = i + 1;
  }); 
});
