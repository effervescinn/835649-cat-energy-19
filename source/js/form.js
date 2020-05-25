var form = document.querySelector('.consultation__form');
var requiredInputs = document.querySelectorAll('.fields__textfield--required');
console.log(form);

form.addEventListener("submit", function (evt) {
  var isEmpty = false;
  for (let i = 0; i < requiredInputs.length; i++) {
    if (requiredInputs[i].value == null || requiredInputs[i].value == '') {
      isEmpty = true;
      break;
    }
  }

  if (isEmpty) {
    evt.preventDefault();
    console.log("Не заполнены обязательные поля");
    alert("Пожалуйста, заполните обязательные поля");
  }

});
