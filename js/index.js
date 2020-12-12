$(document).ready(function () {


  $('.ball1').click(function () {
    $(this).attr('src', 'img/img8.png');
    $(this).css({width: "17%"})
  })

  $('.ball2').click(function () {
    $(this).attr('src', 'img/img9.png');
    $(this).css({width: "15%"})
  })

  $('.ball3').click(function () {
    $(this).attr('src', 'img/img10.png');
    $(this).css({width: "10%"})
  })

  $('.ball4').click(function () {
    $(this).attr('src', 'img/img11.png');
    $(this).css({width: "12%"})
  })

  $('.ball5').click(function () {
    $(this).attr('src', 'img/img12.png');
    $(this).css({width: "30%"})
  })

  $('.ball6').click(function () {
    $(this).attr('src', 'img/img13.png');
    $(this).css({width: "8%"})
  })


  $(".ball1").on('mouseleave', function () {
     setTimeout(() => {
         $(this).css({width: "17%"})
         $(this).attr('src', 'img/img2.png')
      }, 2000)
  })


  $(".ball2").on('mouseleave', function () {
    setTimeout(() => {
         $(this).css({width: "34%"})
         $(this).attr('src', 'img/img3.png')
      }, 2000)
  })

  $(".ball3").on('mouseleave', function () {
   setTimeout(() => {
         $(this).css({width: "26%"})
         $(this).attr('src', 'img/img4.png')
      }, 2000)
  })

  $(".ball4").on('mouseleave', function () {
    setTimeout(() => {
         $(this).css({width: "20%"})
         $(this).attr('src', 'img/img5.png')
      }, 2000)
  })

  $(".ball5").on('mouseleave', function () {
    setTimeout(() => {
         $(this).css({width: "40%"})
         $(this).attr('src', 'img/img6.png')
      }, 2000)
  })

  $(".ball6").on('mouseleave', function () {
    setTimeout(() => {
         $(this).css({width: "8%"})
         $(this).attr('src', 'img/img7.png')
      }, 2000)
  })


})