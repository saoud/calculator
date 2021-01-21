function add(number1, number2) {
  return number1 + number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2);
alert(result);

jQuery("h1").click(function() {
  alert("This is a header.");
});

jQuery("p").click(function() {
  alert("This is a paragraph.");
});

jQuery("img").click(function() {
  alert("This is an image.");
});
