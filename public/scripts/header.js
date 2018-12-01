window.onscroll = function() {slideUp()};

var bio = document.getElementById("shortbio");

function slideUp() {
  if (window.pageYOffset > 20) {
    bio.classList.add("hideBio");
  } else {
    bio.classList.remove("hideBio");
  }
}

