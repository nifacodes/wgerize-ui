import { domelements } from "../../../helperDom";
import { getCategoryDisplay, getEquipmentDisplay, getDescAndImg, getPrimMuscle, getSecMuscle } from "../components/exerciseComponents";

/** MAIN FUNCTIONS TO RENDER EXERCISE VIEW */

const getNameDisplay = (name, isLiked) => `<figure class=" exercise__fig">
  <h1 class=" exercise__title">
    <span>${name}</span>
  </h1>
  </figure>
  <button class="exercise__love">
            <svg class="header__likes">
            <use href="../../../img/icons.svg#icon-heart${
  isLiked ? "" : "-outlined"
  }"></use>
            </svg>
          </button>`;

export const displayExercise = (data, img, isLiked) => {
  let html = `${getNameDisplay(data.name, isLiked)} 
  ${getCategoryDisplay(data.category)}
  ${getEquipmentDisplay(data.equipment)}
  ${getDescAndImg(data.description, img)}
  ${getPrimMuscle(data.muscles)}
  ${getSecMuscle(data.muscles_secondary)}
  `;



  domelements.exerciseDetails.insertAdjacentHTML("beforeend", html);
};

// // should be in helperDom
// export const clearResults = () => {
//   domelements.exerciseDetails.innerHTML = "";
// };
