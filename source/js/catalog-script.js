var btnLink = document.querySelectorAll('.no-js-link');
console.log(btnLink);
for(let i = 0; i < btnLink.length; i++) {
  btnLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
  });
}
