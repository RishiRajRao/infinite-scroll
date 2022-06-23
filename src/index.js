var counter = 1;
var container = document.getElementById("app");

function loadMore() {
  for (let i = 0; i < 20; i++) {
    let p = document.createElement("p");
    p.innerText = "item" + counter++;
    p.id = "list";
    container.appendChild(p);
  }
}

container.addEventListener("scroll", function () {
  if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    loadMore();
  }
});

// function fetchMore() {
//   if (container.scrollY + container.clientHeight >= container.scrollHeight) {
//     loadMore();
//   }
// }

loadMore();
