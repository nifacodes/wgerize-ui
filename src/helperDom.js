/**
 * HELPER FUNCTIONS FOR DOM
 */

export const domelements = {
  searchDropDown: document.querySelector(".dropdown-menu"),
  searchResultList: document.querySelector(".search-result-list"),
  dropDownLable: document.getElementById("muscleMenuLink"),
  searchResultIcon: document.querySelector(".results"),
  searchPagination: document.querySelector(".results__pages"),
  resultsPagesSmall: document.querySelector(".results__pages--small"),
  searchResultListAcc: document.querySelector(".results__accordion"),
  exerciseTitle: document.querySelector(".title"),
  exerciseDetails: document.querySelector(".exercise__details"),
  exerciseLikeBtnFill: document.querySelector(".exercise__love use"),
  likesBtn: document.querySelector(".likes-btn"),
  likesMenu: document.querySelector(".likes-menu"),
  likesPanel: document.querySelector(".likes-panel"),
  likesMenuSm: document.querySelector(".likes-menu-sm")
};
export const elementStrings = {
  loader: "loader"
};
export const renderLoader = parent => {
  const loader = `
          <div class="${elementStrings.loader}">
              <svg>
                  <use href="../img/icons.svg#icon-cw"></use>
              </svg>
          </div>
      `;
  parent.insertAdjacentHTML("afterbegin", loader);
};

export const removeLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
};

export const clearResults = clearView => {
  clearView.innerHTML = "";
};
