import { shortResults, shortResultsAuth } from "../utils/searchUtil";
import { domelements, clearResults } from "../../../helperDom";

/** MAIN FUNCTIONS TO RENDER SEARCH VIEW MOBILE*/

export const renderPageResultSm = data => {
  clearResults(domelements.resultsPagesSmall);
  const html = `<div class="card">
    <div class="card-header" id="${data.id}">
      <h2 class="text-center mb-0 header2">
        <button class="btn btn-link btn-acc collapsed" type="button" data-toggle="collapse" data-target="#id${
    data.id
    }" aria-expanded="false" aria-controls="${data.id}">
        ${shortResults(data.name)}
        </button>
      </h2>
    </div>
    <div id="id${data.id}" class=" class${data.id} collapse" aria-labelledby="${
    data.id
    }" data-parent="#resultsAccordion">
      
    </div>
  </div>`;
  domelements.searchResultListAcc.insertAdjacentHTML("beforeend", html);
};


export const renderAPIResults = dataArr => {
  //const start = (page - 1) * perPage;
  //const end = page * perPage;

  dataArr.forEach(renderPageResultSm);
  //renderPageButton(page, dataArr.length, perPage);
};

