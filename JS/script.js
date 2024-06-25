

// Taking all component needed to modify

burger = document.querySelector('.burger');
navbar = document.querySelector('.navIcon');
cross = document.querySelector('.cross');
// as we click on burger waali class ke items me do run this func 
// this function add class & remove it from that box alternatively

burger.addEventListener('click',()=>{
  navbar.classList.toggle('add-resp');
});


// as we click on cross waali class ke items me do run this func 
// this function add class & remove it from that box alternatively

cross.addEventListener('click',()=>{
  navbar.classList.toggle('add-resp');
});

  document.addEventListener('DOMContentLoaded', function () {
    const videoShowreel = document.getElementById('videoShowreel');

    function checkVideoInView(video) {
      const rect = video.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      return isInView;
    }

    function handleScroll() {
      if (checkVideoInView(videoShowreel)) {
        if (videoShowreel.paused && !videoShowreel.ended) {
          videoShowreel.play();
        }
      } else {
        if (!videoShowreel.paused) {
          videoShowreel.pause();
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();
  });

