const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温華氏41 度で外は寒かった。 :insertx: は出かけた。 :inserty:に着いた。:insertz:体重90 ポンドの :insertx:は驚いたが、 Bob は驚かなかった。:inserty:ではよくあることだった。';
const insertX = ['コナン', 'マイメロ', 'しんちゃん'];
const insertY = ['米花町', 'サンリオランド', '春日部'];
const insertZ = ['殺人事件が起きた。', 'ショーが行われた。', '世界の平和を守った。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} kg`;
    const temperature =  `摂氏${Math.round((94-32) * 5 / 9)} 度`;
    newStory = newStory.replace('華氏41 度', temperature);
    newStory = newStory.replace('90 ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
