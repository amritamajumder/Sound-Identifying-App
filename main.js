function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tzEbrlWoR/)', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var background_noise = 0;
var dropping_pencil = 0;
var tearing_paper = 0
function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected sound of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected - '+background_noise+ ' Detected - '+dropping_pencil+ 'Detected - '+tearing_paper;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('listen_img');

    if (results[0].label == "Background noise") {
      img.src = 'https://img.icons8.com/external-flat-design-circle/2x/external-background-camping-flat-design-circle.png';
      background_noise = background_noise+1;
    } else if (results[0].label == "Dropping a Pencil") {
      img.src = 'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/2x/external-pencil-interface-kiranshastry-lineal-color-kiranshastry.png';
      dropping_pencil = dropping_pencil + 1;
    } else{
      img.src = 'listen.gif';
    }
  }
}
