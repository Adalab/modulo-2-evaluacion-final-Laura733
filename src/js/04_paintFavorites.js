function onFavoriteClick() {
  const allSeries = document.querySelectorAll(".js-serie");
  for (const serie of allSeries) {
    serie.addEventListener("click", selectFavorite);
  }
  saveListFavorites();
}

function selectFavorite(ev) {
  const liSelect = ev.currentTarget;
  const serieId = parseInt(ev.currentTarget.id);
  liSelect.classList.toggle("js-liSelect");

  const objSerie = listResult.find((serie) => serie.show.id === serieId);

  listFavorites.push(objSerie);

  paintFavorites();
}

function paintFavorites() {
  for (const serie of listFavorites) {
    const listSerie = document.createElement("li");
    listSerie.setAttribute("class", "js-serieFavorite");
    listSerie.setAttribute("id", serie.show.id);
    const titleSerie = document.createElement("h3");
    titleSerie.setAttribute("class", "js-serieTitle");
    listSerie.appendChild(titleSerie);
    const nameSerie = document.createTextNode(serie.show.name);
    titleSerie.appendChild(nameSerie);
    listFavoritesElement.appendChild(listSerie);
    const serieImage = document.createElement("img");
    listSerie.appendChild(serieImage);

    if (serie.show.image === null) {
      serieImage.src = imageDefault;
    } else {
      serieImage.src = serie.show.image.medium;
    }
    saveListFavorites();
    onDeleteFavoriteClick();
  }
}
