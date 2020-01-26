import { domelements } from "../../../helperDom";
import { shortResults, shortResultsAuth, getInitials } from "../utils/searchUtil";
import { showButton } from "./../components/searchComponents"

/** MAIN FUNCTIONS TO RENDER SEARCH VIEW */

const renderPageResultMd = data => {
  const html = `<li class="results__link media" data-exid=${data.id}>
  <a class="nav-link active" href="#${data.id}">
      <span class="media-img initials">${getInitials(data.name).first}.${
    getInitials(data.name).last
    }</span>
  </a>
  <div class="media-body  mt-3 mr-2 results__author">
    <p class="results__name">${shortResults(data.name)}</p>
    ${shortResultsAuth(data.license_author)}
  </div>
</li>`;

  domelements.searchResultList.insertAdjacentHTML("beforeend", html);
};
const renderPageButton = (page, total, perPage) => {
  const pages = Math.ceil(total / perPage);
  let button = "";
  if (page === 1 && pages > 1) {
    button = showButton(page, "next");
  } else if (page < pages) {
    //both button
    //button = showButton(page, "prev");
    //button = showButton(page, "next");
    // !! - TOUND
    button = `
            ${showButton(page, "prev")}
            ${showButton(page, "next")}
        `;
  } else if (page === pages && pages > 1) {
    // only previous
    button = showButton(page, "prev");
  }
  domelements.searchPagination.insertAdjacentHTML("afterbegin", button);
};

export const renderAPIResults = (dataArr, page = 1, perPage = 8) => {
  const start = (page - 1) * perPage;
  const end = page * perPage;

  dataArr.slice(start, end).forEach(renderPageResultMd);
  renderPageButton(page, dataArr.length, perPage);
};
