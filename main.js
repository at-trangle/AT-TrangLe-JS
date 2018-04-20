videosList = [
  {
    id: 1,
    title: 'Cười không ngậm được mồm với tài Chặt Chém bá đạo của Giang Giang p13',
    img: 'ACcNDqwDtuY',
    url: 'https://www.youtube.com/embed/ACcNDqwDtuY'
  },
  {
    id: 2,
    title: 'Trường Giang và Hariwon chặt chém người chơi cười bể bụng',
    img: 'G8uxdOOy_0A',
    url: 'https://www.youtube.com/embed/G8uxdOOy_0A'
  },
  {
    id: 3,
    title: 'Túy Âm - Xesi x Masew x Nhatnguyen',
    img: 'EV-91JV4Fws',
    url: 'https://www.youtube.com/embed/EV-91JV4Fws'
  },
  {
    id: 4,
    title: 'Ngắm Hoa Lệ Rơi - Châu Khải Phong [ Lyrics MV ]',
    img: 'SItFPrgEITM',
    url: 'https://www.youtube.com/embed/SItFPrgEITM'
  },
  {
    id: 5,
    title: 'Cùng Anh - Ngọc Dolil (VRT Mix)',
    img: 'V9S5QPbzPoo',
    url: 'https://www.youtube.com/embed/V9S5QPbzPoo'
  },
  {
    id: 6,
    title: 'Cô gái m52 ‣ Huy ft. Tùng Viu「Lyric Video」| bimm',
    img: 'nHK0u40Ompc',
    url: 'https://www.youtube.com/embed/nHK0u40Ompc'
  },
  {
    id: 7,
    title: 'Người Lạ Ơi ! Official MV | Superbrothers x Karik x Orange',
    img: 'g20t_K9dlhU',
    url: 'https://www.youtube.com/embed/g20t_K9dlhU'
  },
  {
    id: 8,
    title: 'TÌNH ĐƠN PHƯƠNG ACOUSTIC COVER - Edward Duong Nguyen Ft Tùng Acoustic',
    img: 'lGbzyKWkiio',
    url: 'https://www.youtube.com/embed/lGbzyKWkiio'
  },
  {
    id: 9,
    title: 'QUAN TRỌNG LÀ THẦN THÁI | ONLYC ft KARIK | OFFICIAL VIDEO LYRIC',
    img: 'JqWuzvSMs08',
    url: 'https://www.youtube.com/embed/JqWuzvSMs08'
  },
  {
    id: 10,
    title: 'Ý EM SAO - KAY TRAN x LANG LD x HOMIE BOIZ',
    img: '2dMOgvytko4',
    url: 'https://www.youtube.com/embed/2dMOgvytko4'
  }
]
let index = 0;
let playing;
let listNum = videosList.length;

function index_video() {
  if(localStorage.getItem('now-playing')===null){
    playing = videosList[0];
  } else {
    playing = JSON.parse(localStorage.getItem('now-playing'));
  }
  $('#now-playing').attr('src', playing['url']);
  localStorage.setItem('now-playing',JSON.stringify(playing));
  $('#main-title').append("Now playing video "+ playing['id']);
}
function list_video() {
  for(let i = 0; i < listNum; i++) {
    if(playing['url'] !== videosList[i]['url']) {
      $('#video-list').append('<li class = "video-item"><button id= "'+videosList[i]['id']+'" onclick = "changeVideo(this.id)" class = "change-btn"><img class="video-thumb" onclick="playVideo(\'' + videosList[i]['id'] + '\')" src="http://img.youtube.com/vi/' + videosList[i]['img'] + '/0.jpg" alt=""></button></li>')
    }
    
  }
}

function actionVideo(clickedId) {
  if(clickedId === 'next-video') {
    index === listNum-1 ? index = 0 : index++;
    playing = videosList[index];
    $('#now-playing').attr('src',playing['url']);
    localStorage.setItem('now-playing',JSON.stringify(playing));
  } else {
    index === 0 ? index = listNum-1 : index--;
    playing = videosList[index];
    $('#now-playing').attr('src',playing['url']);
    localStorage.setItem('now-playing',JSON.stringify(playing));
  }
  $("#video-list").text("");
  list_video();
  $('#main-title').text("Now playing video "+playing['id']);
}

function changeVideo(changeID) {
  playing = videosList[changeID-1];
  $('#now-playing').attr('src',playing['url']);
  localStorage.setItem('now-playing',JSON.stringify(playing));
  $("#video-list").text(" ");
  list_video();
  $('#main-title').text("Now playing video "+playing['id']);
}

index_video();
list_video();
