function changeImageFifthBulb() {
    var image = document.getElementById('myImage5');
    if (image.src.match("bulbon")) {
      image.src = "/img/pic_bulboff.gif";
    } else {
      image.src = "/img/pic_bulbon.gif";
    }
  }