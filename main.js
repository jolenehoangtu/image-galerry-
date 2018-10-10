console.log(arrayData);
//<p>skills: ${info.skills.toString()}</p> 
const displayImgs = () => {
    const picContainer = document.querySelector('.pic-container');
    arrayData.forEach(info => {
        picContainer.insertAdjacentHTML("afterbegin",
            `<div class="slideDisplay fade">
            <div class="flip-card"> 
            <div class="flip-card-inner">
           <div class="flip-card-front">
              <img src="images/${info.src}" alt="info.src" style="width:100%">
          </div>
          <div class="flip-card-back">
          <p> firstName: ${info.firstName} </p>
          <p>lastName: ${info.lastName}</p>
          <p>title: ${info.title}</p>
          <p>nationality: ${info.nationality}</p>
          <p>skills: ${info.skills.join(",")}</p>
          <p>whySoftwareDeveloper: ${info.whySoftwareDeveloper}</p>
          <p>longTermVision: ${info.longTermVision} </p>
          <p>motivatesMe: ${info.motivatesMe} </p>
          <p>favoriteQuote: ${info.favoriteQuote} </p>
          <p> joinedOn: ${info.joinedOn}</p>
         </div>
          </div>
          </div>
            </div>`);
    });
}



displayImgs();

var slideIndex = 1;
showSlides(slideIndex);

//next/pre btn//
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('slideDisplay');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}