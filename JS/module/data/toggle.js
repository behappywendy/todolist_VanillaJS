import { getLocalStorageArray, saveLocalStorageArray } from "./localStorage.js";
import { currentPageRender, currentPage } from "../UI/page.js";

function toggleStarAndCheckBox(e) {
  if (!e.target.closest(".show_item")) {
    return;
  }
  let editState = e.target.closest("form").children[1].classList.contains("display-none");
  if (!editState) {
    //編輯狀態由save來儲存資料
    return;
  }
  let isCheckbox = e.target.closest("input[type = 'checkbox']");
  let isStar = e.target.closest(".star");
  if (isCheckbox || isStar) {
    //取資料
    let localStorageItems = getLocalStorageArray();
    //點到的index
    let currentFormID = e.target.closest("form").dataset.index;
    let currentIndex = localStorageItems.findIndex((item) => {
      return item["record_time"] == currentFormID;
    });
    localStorageItems[currentIndex][`${isStar ? "star" : "done"}`] =
      !localStorageItems[currentIndex][`${isStar ? "star" : "done"}`];
    saveLocalStorageArray(localStorageItems);
    // console.log(`${isStar ? '儲存星星資料' : '儲存打勾資料'}`);
    //渲染畫面
    currentPageRender(currentPage);
  }
}

export { toggleStarAndCheckBox };
// function toggleExistingItemStar(e) {
//     if (!e.target.closest('.star') || !e.target.closest('.show_item')) {
//         return;
//     }
//     let editState = e.target.closest('form').children[1].classList.contains('display-none');
//     if (!editState) {
//         //編輯狀態由save來儲存資料
//         return;
//     }
//     let localStorageItems = getLocalStorageArray();
//     //點到的index
//     let currentFormID = e.target.closest('form').dataset.index;
//     let currentIndex = localStorageItems.findIndex((item) => {
//         return item['record_time'] === Number(currentFormID);
//     });
//     localStorageItems[currentIndex]['star'] = !localStorageItems[currentIndex]['star'];
//     //存資料存到local storage
//     saveLocalStorageArray(localStorageItems);
//     console.log('儲存星星資料');
//     //渲染畫面
//     currentPageRender(currentPage);
// }

// function toggleCheckBox(e) {
//     //點擊click字會劃掉
//     if (!e.target.closest('input[type="checkbox"]') || !e.target.closest('.show_item')) {
//         return;
//     }
//     let editState = e.target.closest('form').children[1].classList.contains('display-none');
//     if (!editState) {
//         //編輯狀態由save來儲存資料
//         return;
//     }
//     let localStorageItems = getLocalStorageArray();
//     //字會有刪除線
//     e.target.closest('.textCard').querySelector('input[type="text"]').classList.toggle('click_CheckBox');
//     //點到的index
//     let currentFormID = e.target.closest('form').dataset.index;
//     let currentIndex = localStorageItems.findIndex((item) => {
//         return item['record_time'] === Number(currentFormID);
//     });
//     localStorageItems[currentIndex]['done'] = !localStorageItems[currentIndex]['done'];
//     saveLocalStorageArray(localStorageItems);
//     console.log('儲存打勾資料');
//     //渲染畫面
//     currentPageRender(currentPage);
// }
// export { toggleExistingItemStar, toggleCheckBox };
