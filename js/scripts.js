$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const favIceCream = ["ques1", "ques2", "ques3"]

    favIceCream.forEach(function(element) {
    let all = $("input#" + element).val();
      $("." + element).text(all);
    });

    });
})