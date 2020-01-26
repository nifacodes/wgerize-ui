import { shortResults, shortResultsAuth } from "../../searchResultsPanel/utils/searchUtil";
import { domelements } from "../../../helperDom";



export const addLikeToMenu = like => {
  let html = ``;
  /** MAIN FUNCTIONS TO RENDER LIKES VIEW MOBILE */

  html += `<div class="card">
  <div class="card-header card${like.id}" id="${like.id}">
    <h2 class="text-center mb-0 header2">
      <button class="btn btn-link btn-acc collapsed" type="button" data-toggle="collapse" data-target="#id${
    like.id
    }" aria-expanded="false" aria-controls="${like.id}">
      ${shortResults(like.title)}
      </button>
    </h2>
  </div>
 
</div>`;

  domelements.likesPanel.insertAdjacentHTML("beforeend", html);
};

