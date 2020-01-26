import { domelements } from "../../../helperDom";
import { shortResults, shortResultsAuth, getInitials } from "../../searchResultsPanel/utils/searchUtil";

/** MAIN FUNCTIONS TO RENDER LIKES VIEW */

export const addLikeToMenu = like => {
  let html = ``;

  html += ` <li class="results__link media" data-exid=${like.id}>
    <a class="nav-link active likes__link" href="#${like.id}">
        <span class="media-img initials">${getInitials(like.title).first}.${
    getInitials(like.title).last
    }</span>
    </a>
    <div class="media-body  mt-3 mr-2 results__author">
      <p class="results__name">${shortResults(like.title)}</p>
      ${shortResultsAuth(like.author)}
    </div>
  </li>`;

  domelements.likesPanel.insertAdjacentHTML("beforeend", html);
};
