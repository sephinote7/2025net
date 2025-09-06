var cArray = [
  {
    cImg: 'C_img01.jpg',
    cTxt: '문화 만들기',
    cSTxt:
      '게임을 기반으로 다양한 문화적 가치를 공유하고 누구나<br>즐겁게 참여할 수 있는 교육 및 여가 문화를 만들어 갑니다.',
  },

  {
    cImg: 'C_img02.jpg',
    cTxt: '인재 키우기',
    cSTxt: '미래 문화 산업을 이끌어 갈 가능성 있는 인재들을 발굴하고<br>체계적인 성장 기회를 지원합니다.',
  },

  {
    cImg: 'C_img03.jpg',
    cTxt: '마음 나누기',
    cSTxt:
      '나눔이 가진 영향력과 가치를 알리고 쉽게 동참할 수 있는<br>기회를 제공하여 모두가 즐거운 나눔 문화를 확산해 갑니다.',
  },
];
var cardHtml = '';

function Incard() {
  for (var i = 0; i < cArray.length; i++) {
    cardHtml += `
                      <div class="card">
                          <img src="img/${cArray[i].cImg}"/>
                          <div class="cardTxt">
                              <h6 class="title">${cArray[i].cTxt}</h6>
                                  <p class="txt2">
                                      ${cArray[i].cSTxt}
                                  </p>
                          </div>
                      </div>
          `;
  }
  return cardHtml;
}

var cardData = Incard();

// document.getElementById('cardIn').innerHTML = cardData;
