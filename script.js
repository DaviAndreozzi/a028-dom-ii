function adicionaItem(event){
  const estilo = document.getElementById("container")
  container.innerHTML += `<article class="item" onclick="removeItem(event)"></article>`
}

function removeItem(event){
  if(event.target){
    const article = document.querySelector(".item")
    article.classList.remove("item");
  }
}