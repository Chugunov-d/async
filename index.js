window.addEventListener('DOMContentLoaded', () => {

const name1 = document.querySelector(".name1");
const gender1 = document.querySelector('.gender1');
const born1 = document.querySelector('.born1');
const culture1 = document.querySelector('.culture1');
const img = document.querySelector('.invisible');

const name2 = document.querySelector(".name2");
const gender2 = document.querySelector('.gender2');
const born2 = document.querySelector('.born2');
const culture2 = document.querySelector('.culture2');
const img2 = document.querySelector('.invisible2');

const name3 = document.querySelector(".name3");
const gender3 = document.querySelector('.gender3');
const born3 = document.querySelector('.born3');
const culture3 = document.querySelector('.culture3');
const img3 = document.querySelector('.invisible3');

const button = document.querySelector('.button');


async function info(){

    const response = await fetch('https://anapioficeandfire.com/api/characters/583',{
      "method":"GET"
    });
    const data = await response.json();
    console.log(data);
    name1.innerHTML = data.name;
    gender1.innerHTML = data.gender;
    born1.innerHTML = data.born;
    culture1.innerHTML = data.culture;
    img.src = "https://www.anypics.ru/download.php?file=201211/1280x800/anypics.ru-43638.jpg";
  

    const response2 = await fetch('https://anapioficeandfire.com/api/characters/69',{
      "method":"GET"
    });
    const data2 = await response2.json();
    console.log(data2);
    name2.innerHTML = data2.name;
    gender2.innerHTML = data2.gender;
    born2.innerHTML = data2.born;
    culture2.innerHTML = data2.culture;
    img2.src = "https://pbs.twimg.com/media/ELDwSrpX0AAY2s-.jpg:large";


    const response3 = await fetch('https://anapioficeandfire.com/api/characters/700',{
      "method":"GET"
    });
    const data3 = await response3.json();
    console.log(data3);
    name3.innerHTML = data3.name;
    gender3.innerHTML = data3.gender;
    born3.innerHTML = data3.born;
    culture3.innerHTML = data3.culture;
    img3.src = "https://sm.ign.com/t/ign_in/news/g/game-of-th/game-of-thrones-season-6-finale-photos-preview-walder-freys_fp8t.1200.jpg";
  }
button.addEventListener('click', () => {
  info();
});
});
