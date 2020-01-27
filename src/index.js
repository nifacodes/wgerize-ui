import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { domelements, renderLoader, removeLoader, clearResults } from "./helperDom";
import Search from "./models/Search";
import Exercise from "./models/Exercise";
import Likes from "./models/Likes";
// import * as searchView from "./views/searchResultsPanel/mainViews/SearchViewML";
// import * as searchViewMobile from "./views/searchResultsPanel/mainViews/SearchViewSm";
// import * as exerciseView from "./views/exerciseResultsPanel/mainViews/ExerciseViewML"
// import * as exerciseViewMobile from "./views/exerciseResultsPanel/mainViews/ExerciseViewSm"
// import * as likesView from "./views/likesPanel/mainViews/likesViewML";
// import * as likesViewMobile from "./views/likesPanel/mainViews/likeViewSm";
// import { toggleLikeMenu, toggleLikeBtn, deleteLikeFromView } from "./views/likesPanel/components/likesComponents";

if (process.env.NODE_ENV === "production") {
  // console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  // console.log("Development mode");
}
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(function () {
  $('[data-toggle="popover"]').popover();
});

// --------- STATE HELPER FUNCTIONS ------------

// global state of the app
// const state = {};
// let isMobileView = false;

// let setSearchState = obj => {
//   state.searchObj = obj;
// };

// let setExerciseState = obj => {
//   state.exerciseObj = obj;
// };
// // ----------------- SEARCH CONTROLLER MOBILE AND ABOVE ---------------

const searchController = async target => {
  let mql = window.matchMedia("(min-width: 575px)");
  const query = target.id; // 1) get the query from view

  if (query) {
    const searchObj = new Search(query);
    //2) New search Object via classes and add it to the state
    setSearchState(searchObj);

    // 3) Prepare UI for result
    clearResults(domelements.searchResultList);
    clearResults(domelements.searchPagination);
    clearResults(domelements.searchResultListAcc);

    if (!mql.matches) {
      renderLoader(domelements.searchResultListAcc); // small view
    } else {
      renderLoader(domelements.searchResultIcon); // ML view
    }
  }
}
//     try {
//       await state.searchObj.getResults(); // 4) getResults adds the query result as Data property
//       removeLoader(domelements.searchResultIcon); // 5) render results on UI only after we getResults

//       if (!mql.matches) {
//         searchViewMobile.renderAPIResults(
//           state.searchObj.axiosResults.data.results // render onto small view
//         );
//       } else {
//         searchView.renderAPIResults(state.searchObj.axiosResults.data.results); // render onto ML views
//       }
//     } catch (error) {
//       console.log("Search Controller: " + error);
//     }
//   }
// };

// // ------------------------ SEARCH CONTROLLER EVENT HANDLERS ------------------

domelements.searchDropDown.addEventListener("click", e => {
  domelements.dropDownLable.text = e.target.text;
  searchController(e.target);
});

// // Delegate Events to parent Pagination elm to handle dymanic children events
// // Page data about exercise id is stored in goto dataset in page btn
// domelements.searchPagination.addEventListener("click", e => {
//   const btn = e.target.closest(".page-btn");
//   if (btn) {
//     const goToData = parseInt(btn.dataset.goto, 10);
//     clearResults(domelements.searchPagination);
//     clearResults(domelements.searchResultList);
//     searchView.renderAPIResults(
//       state.searchObj.axiosResults.data.results,
//       goToData
//     );
//   }
// });



// // -------------- EXERCISE CONTROLLER FOR NON-MOBILE ------------------
// const exerciseController = async () => {
//   // get id from url
//   const id = window.location.hash.replace("#", "");

//   // prepare ui for changes
//   if (id) {
//     // create new exercise
//     const exerciseObj = new Exercise(id);
//     setExerciseState(exerciseObj);
//     clearResults(domelements.exerciseDetails);
//     renderLoader(domelements.exerciseDetails);

//     try {
//       await state.exerciseObj.getExercise(); // get exerice data
//       await state.exerciseObj.getImage(); // get exerice Image data

//       removeLoader(domelements.exerciseDetails);

//       exerciseView.displayExercise(
//         state.exerciseObj.exercise.data,
//         state.exerciseObj.image.data.results,
//         state.likesObj.isLiked(id)
//       );
//     } catch (err) {
//       console.log("Exercise: " + err);
//     }
//   }
// };
// // updates state by url id
// ["hashchange", "load"].forEach(event => {
//   window.addEventListener(event, exerciseController);
// });

// // --------------- EXERCISE CONTROLLER MOBILE ----------------------
// const exerciseControllerSm = async (id, displayFromLiked) => {
//   if (id) {
//     // create new exercise
//     const exerciseObj = new Exercise(id);
//     setExerciseState(exerciseObj);

//     if (!displayFromLiked) {
//       renderLoader(document.querySelector(`.class${id}`));

//       // get exerice data
//       try {
//         await state.exerciseObj.getExercise();
//         await state.exerciseObj.getImage();
//         // remove loader, results received
//         // render exercise data
//         removeLoader(document.querySelector(`.class${id}`));
//         exerciseViewMobile.displayExercise(
//           state.exerciseObj.exercise.data,
//           state.exerciseObj.image.data.results,
//           state.likesObj.isLiked(id)
//         );
//       } catch (err) {
//         console.log("Exercise: " + err);
//       }

//     } else {
//       try {
//         renderLoader(domelements.resultsPagesSmall);
//         await state.exerciseObj.getExercise();
//         await state.exerciseObj.getImage();
//         removeLoader(domelements.resultsPagesSmall);

//         exerciseViewMobile.displayExerciseFromLiked(
//           state.exerciseObj.exercise.data,
//           state.exerciseObj.image.data.results,
//           state.likesObj.isLiked(id)
//         );
//       } catch (err) {
//         console.log("Exercise: " + err);
//       }

//     }
//   }

// };

// // ------------------- LIKE CONTROLLER --------------

// const likeController = () => {
//   isMobileView = false;
//   if (!state.likesObj) state.likesObj = new Likes();
//   const currentId = state.exerciseObj.id;
//   // User has NOT liked current recipe
//   if (state.likesObj.isLiked(currentId) === false) {
//     // Add like to state, toggle the button, add like to UI list
//     const newLike = state.likesObj.addLike(
//       currentId,
//       state.exerciseObj.exercise.data.name,
//       state.exerciseObj.exercise.data.license_author
//     );

//     toggleLikeBtn(state.likesObj.isLiked(currentId), isMobileView);
//     clearResults(domelements.likesPanel);
//     state.likesObj.likes.forEach(like => {
//       likesView.addLikeToMenu(like);
//     });
//   } else {
//     // Remove like to state, toggle the button, add like to UI list
//     state.likesObj.deleteLike(currentId);
//     toggleLikeBtn(state.likesObj.isLiked(currentId), isMobileView);
//     const selector = `[data-exid*="${currentId}"]`
//     deleteLikeFromView(selector);
//   }
//   toggleLikeMenu(state.likesObj.getNumLikes());
// };

// // ------------------------ LIKE CONTROLLER MOBILE ----------------
// const likeControllerSm = () => {
//   isMobileView = true;
//   if (!state.likesObj) state.likesObj = new Likes();
//   const currentId = state.exerciseObj.id;

//   // User has NOT liked current recipe
//   if (!state.likesObj.isLiked(currentId)) {
//     // Add like to state, toggle the button, add like to UI list
//     const newLike = state.likesObj.addLike(
//       currentId,
//       state.exerciseObj.exercise.data.name,
//       state.exerciseObj.exercise.data.license_author
//     );

//     toggleLikeBtn(state.likesObj.isLiked(currentId), isMobileView, currentId);
//     clearResults(domelements.likesPanel);
//     state.likesObj.likes.forEach(like => {
//       likesViewMobile.addLikeToMenu(like);
//     });

//   } else {
//     // Remove like to state, toggle the button, add like to UI list
//     state.likesObj.deleteLike(currentId);
//     toggleLikeBtn(false, isMobileView, currentId);
//     const selector = `.card${currentId}`
//     deleteLikeFromView(selector);
//   }

//   toggleLikeMenu(state.likesObj.getNumLikes());
// };

// // --------------- LIKE EVENT HANDLER FOR PERSISTANT LIKES ---------------
// window.addEventListener("load", () => {
//   state.likesObj = new Likes();
//   state.likesObj.retrieveStorage();
//   toggleLikeMenu(state.likesObj.getNumLikes());
//   let mql = window.matchMedia("(min-width: 768px)");
//   if (!mql.matches) {
//     state.likesObj.likes.forEach(like => {
//       likesViewMobile.addLikeToMenu(like);
//     });
//   } else {
//     state.likesObj.likes.forEach(like => {
//       likesView.addLikeToMenu(like);
//     });
//   }
// });

// // --------------- LIKE EVENT HANDLER ---------------

// domelements.exerciseDetails.addEventListener("click", event => {
//   if (event.target.matches(".exercise__love, .exercise__love *")) {
//     likeController();
//   }
// });

// // --------------- LIKE EVENT HANDLER FOR SMALL VIEWS ---------------

// domelements.searchResultListAcc.addEventListener("click", event => {
//   if (event.target.matches(".exercise__love, .exercise__love *")) {
//     likeControllerSm();
//   } else if (event.target.matches(".btn-acc")) {
//     const displayFromLiked = false
//     exerciseControllerSm(event.target.parentNode.parentNode.id, displayFromLiked);
//   }
// });

// domelements.likesPanel.addEventListener("click", event => {
//   const displayFromLiked = true;
//   if (event.target.matches(".btn-acc")) {

//     exerciseControllerSm(event.target.parentNode.parentNode.id, displayFromLiked);
//   }
// });

// domelements.resultsPagesSmall.addEventListener("click", event => {
//   if (event.target.matches(".exercise__love, .exercise__love *")) {
//     likeControllerSm();
//   }
// })