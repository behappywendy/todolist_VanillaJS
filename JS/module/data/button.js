import { getLocalStorageArray, saveLocalStorageArray } from "./localStorage.js";
// import { currentData, renewData, } from './renewDate.js';
import { checkData } from "./renewDate.js";
import { restForm } from "../UI/resetForm.js";
import { currentPageRender, currentPage } from "../UI/page.js";
function clickAddTaskButton(e) {
  if (!e.target.closest(".add_task_button")) {
    return;
  }
  let localStorageItems = getLocalStorageArray();
  //記住當時資料狀態
  let item = checkData(this, Date.now());
  //丟進全部資料的陣列
  localStorageItems.push(item);
  //form表單消失
  this.children[1].classList.add("display-none");
  //存資料存到local storage
  saveLocalStorageArray(localStorageItems);
  //新增完要重新渲染畫面
  currentPageRender(currentPage);
  let form = document.querySelector("form");
  restForm(form);
}
// 點編輯下方他本身detail 會出現
function clickEditButton(e) {
  //如果點的是筆
  if (e.target.closest(".pen")) {
    //筆的樣式會改變
    e.target.classList.toggle("editState");
    //form 的detail會展開
    const detail = e.target.closest("form").querySelector(".detail");
    detail.classList.toggle("display-none");
    const button = e.target.closest("form").querySelector(".wrap_button ");
    button.classList.toggle("display-none");
  }
}

function clickSaveButton(e) {
  if (e.target.classList.contains("save")) {
    let form = e.target.closest("form");
    let localStorageItems = getLocalStorageArray();
    let currentFormID = form.dataset.index;
    let currentIndex = localStorageItems.findIndex((item) => {
      return item["record_time"] === Number(currentFormID);
    });
    let newData = checkData(form, currentFormID);
    // let newData = renewData(form, Number(currentFormID));
    localStorageItems[currentIndex] = newData;
    //存到localStorage
    saveLocalStorageArray(localStorageItems);
    //渲染畫面
    // createList(localStorageItems, show_item);
    currentPageRender(currentPage);
    //畫面關掉
    const detail = e.target.closest("form").querySelector(".detail");
    detail.classList.add("display-none");
    const button = e.target.closest("form").querySelector(".wrap_button ");
    button.classList.add("display-none");
    //筆顏色還原
    e.target.closest("form").querySelector(".pen i").classList.remove("editState");
  }
}

function clickCancel(e) {
  if (!e.target.classList.contains("cancel")) {
    return;
  }
  if (e.target.closest(".show_item")) {
    //show item底下detail取消
    //和點擊編輯行為一樣
    const detail = e.target.closest("form").querySelector(".detail");
    detail.classList.add("display-none");
    const button = e.target.closest("form").querySelector(".wrap_button ");
    button.classList.add("display-none");
    //筆的狀態要初始化
    e.target.closest("form").querySelector(".pen i").classList.remove("editState");
    let localStorageItems = getLocalStorageArray();
    //渲染畫面
    let show_item = document.querySelector(".show_item");
    currentPageRender(currentPage);
    return;
  }
  //form底下form消失
  e.target.closest("form").classList.add("display-none");
}

export { clickAddTaskButton, clickEditButton, clickSaveButton, clickCancel };
