import { getCategoryDisplay, getEquipmentDisplay, getDescAndImg, getPrimMuscle, getSecMuscle } from "../components/exerciseComponents";
import { clearResults, domelements } from "../../../helperDom";

/** MAIN FUNCTIONS TO RENDER EXERCISE VIEW MOBILE */

const getNameDisplay = (name, isLiked, id) => `<figure class="exercise__fig--small">
    <h1 class="small-title">
      <span>${name}</span>
    </h1>
    </figure>
    <button class="exercise__love">
    <svg class="header__likes" >
    <use id="svg${id}" href="../img/icons.svg#icon-heart${
  isLiked ? "" : "-outlined"}"></use></svg></button>`;

export const displayExercise = (data, img, isLiked) => {
  // clear results
  clearResults(document.querySelector(`.class${data.id}`));
  clearResults(domelements.resultsPagesSmall);

  // display card body
  let html = `<div class="card-body" id="id${data.id}">
  
  
  ${getNameDisplay(data.name, isLiked, data.id)} ${getCategoryDisplay(data.category)}${getEquipmentDisplay(data.equipment)}
  ${getDescAndImg(data.description, img)}
  ${getPrimMuscle(data.muscles)}
  ${getSecMuscle(data.muscles_secondary)}
  </div>`;

  document
    .querySelector(`.class${data.id}`)
    .insertAdjacentHTML("beforeend", html);
};

export const displayExerciseFromLiked = (data, img, isLiked) => {
  // clear results
  clearResults(domelements.resultsPagesSmall);
  clearResults(domelements.searchResultListAcc);


  // display card body
  let html = `<div class="card-body" id="id${data.id}">${getNameDisplay(data.name, isLiked, data.id)} ${getCategoryDisplay(data.category)}${getEquipmentDisplay(data.equipment)}
  ${getDescAndImg(data.description, img)}
  ${getPrimMuscle(data.muscles)}
  ${getSecMuscle(data.muscles_secondary)}
  </div>`;

  domelements.resultsPagesSmall
    .insertAdjacentHTML("beforeend", html);
};