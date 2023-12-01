$(".form").css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "wheat",
});
$(".heading").css("color", "blue");
$(".input").css({ padding: "10px", width: "300px" });
$(".add-button").css({ padding: "10px", margin: "10px" });
$(".box").css({
  display: "flex",
  gap: "20px",
});

let array = JSON.parse(localStorage.getItem("array")) ?? [];
function drawMovie(arr) {
  $(".box").empty();
  arr.forEach((item) => {
    let pElement = document.createElement("p");
    pElement.innerText = item;
    $(".box").append(pElement);
    pElement.onclick = function () {
      this.remove();

      array = array.filter((el) => el != item);
      localStorage.setItem("array", JSON.stringify(array));
    };
  });
}

$(".add-button").on("click", function () {
  array.push($(".input").val());
  console.log($(".input").val());
  drawMovie(array);
  localStorage.setItem("array", JSON.stringify(array));

  $(".input").val("");
});
