var newsCard = [
  {
    cHtxt: '2024년 기부금품 사용내역',
    cSHtxt:
      "재단법인 넷마블문화재단 '기부금품의 모집 및 <br>사용에 관한 법률 시행령'에 의거하여 기부금품 <br>모집 및 사용내역을 아래와 같이 게시합니다.",
    ctxt: '공지사항 • 2025.08.22',
  },

  {
    cHtxt: '2024년도 결산서류 등의 공시',
    cSHtxt:
      "재단법인 넷마블문화재단은 '상속세 및 증여세법'<br>제50조의3(공익법인등의 결산서류등의<br>공시의무)'에 의거 결산서류 등을 공시합니다.",
    ctxt: '공지사항 • 2025.04.30',
  },

  {
    cHtxt: '[마감]<2025년 게임 탐험대(구,넷마블견학프로그램> 참가 학교...',
    cSHtxt:
      '넷마블문화재단은 게임 산업 및 게임 업계 지로에<br> 관심 있는 학생 등을 대상으로 <2025년 게임<br>탐험대(구,넷마블견학프로그램)>참여 학교/<br>기관을 모집합니다.',
    ctxt: '공지사항 • 2025.04.18',
  },
];
var NcardHtml = '';

function NewsCrd() {
  for (var i = 0; i < newsCard.length; i++) {
    NcardHtml += `
                    <div class="newsCardWrap">
                        <div class="newsCHWrap">
                            <h6 class="title">${newsCard[i].cHtxt}</h6>
                            <p class="txt">${newsCard[i].cSHtxt}</p>
                        </div>
                        <p class="txt5">${newsCard[i].ctxt}</p>
                    </div>
      
                 `;
  }
  return NcardHtml;
}

var newsCrdData = NewsCrd();
