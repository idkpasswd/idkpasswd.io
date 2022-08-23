//entering animation; contributor:https://tobiasahlin.com/moving-letters/
anime.timeline({loop: false})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400,
  })

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: false,
});

//fit the entering animation font
var containter_h = $('.ml8 .letters-container').height()
$('.ml8 .letters').css({
  'font-size': 1/10*ch
})

//fit entering anime base on device screen
var ch = $('.ml8 .circle-dark').height();
var cw = $('.ml8 .circle-dark').width();
if(ch < cw){
  $('.ml8 .circle-dark').css({
    'width': ch - 10 + 'px',
    'height': ch - 10 + 'px'
  })
  $('.ml8 .circle-dark-dashed').css({
    'width': ch + 'px'    
  })
}                      
else{
  $('.ml8 .circle-dark').css({
    'height': cw - 10 + 'px',
    'width': cw - 10 + 'px'
  })

  $('.ml8 .circle-dark-dashed').css({
    'height': cw + 'px'    
  })
}

function myFunction(){
  setTimeout(function(){$('.flip-one-inner').css({'z-index': 1})
                        $('.ml8 .circle-dark').css({'z-index':-1})
                        $('.circle .circle-container').css({'z-index':-1})}, 5000);}
myFunction()

//fit the flip boxes base on device screen
var h = $('.flip-one').height()
var w = $('.flip-one').width()
var pic = $()
if(w < h){
  $('.flip-one').css({
    'height': 25 + 'vh',
    'width': 100 + 'vw',
  })
  $('div.one').css({
    'height': 25 + 'vh',
    'width': 100 + 'vw',
  })
  $('.scroll-box').css({
    'height': 22.5 + 'vh',
    'width': 90 + 'vw',
  })
  $('iframe.frametwo').css({
    'height': 20 +'vh',
    'width': 90 +' vw',
  })

  var h = $('.flip-one').height()
  var w = $('.flip-one').width()
}
else{
  $('iframe.frametwo').css({
  'height': 45 +'vh',
  'width': 32 +' vw',
})
}

$('img').css({
  'height': 2/3*h + 'px',
  'margin-top':1/10*h + 'px',
})



//switch pages
function switch_page(shown, hidden1, hidden2){
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden1).style.display='none';
  document.getElementById(hidden2).style.display='none';
}