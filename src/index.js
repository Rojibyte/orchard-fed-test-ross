// Import our custom CSS
import "./styles/main.scss";

// Import all of Bootstraps JS
import * as bootstrap from "bootstrap";

// Dynamically array map multiple images
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./assets/components", false, /\.(png|jpe?g|svg)$/)
);

const img1 = $("#img1").attr("src", images["Image-01.jpg"]);
const img2 = $("#img2").attr("src", images["Image-02.jpg"]);
const img3 = $("#img3").attr("src", images["Image-03.jpg"]);
const bigImg1 = $("#img1").attr("data-bigimage", images["Image-01@2x.jpg"]);
const bigImg2 = $("#img2").attr("data-bigimage", images["Image-02@2x.jpg"]);
const bigImg3 = $("#img3").attr("data-bigimage", images["Image-03@2x.jpg"]);
const imgAEG1 = $("#imgAEG1").attr("src", images["AEGImage-01.jpg"]);
const imgAEG2 = $("#imgAEG2").attr("src", images["AEGImage-02.jpg"]);
const imgAEG3 = $("#imgAEG3").attr("src", images["AEGImage-03.jpg"]);
const favicon = $("link").attr("href", images["favicon-16px.png"]);

$(document).ready(function () {
  // Gets the src from the data-src on each image
  var $imageSrc;
  $(".answerYourBody img").click(function () {
    $imageSrc = $(this).attr("data-bigimage");
    console.log($imageSrc);
  });

  // when modal is open
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the src attr to the clicked image
    $("#image").attr("src", $imageSrc);
  });

  // reset the modal image
  $("#myModal").on("hidden.bs.modal", function (e) {
    // revert back to loading gif if hidden
    $("#image").attr(
      "src",
      "//media.tenor.com/images/556e9ff845b7dd0c62dcdbbb00babb4b/tenor.gif"
    );
  });

  //On click get element tag
  $(this).on("click", function (e) {
    e.preventDefault();
    console.log(e.target);
  });

  // document ready
});
