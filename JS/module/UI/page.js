import { dateFormat } from "../utility/date.js";
import { getLocalStorageArray } from "../data/localStorage.js";

let header = document.querySelector("header");
let currentPage = "My Task";
//切換頁面會改動currentPage的變數
header.addEventListener("click", switchPage);
function switchPage(e) {
  //先知道目前哪一頁
  currentPage = e.target.textContent;
  header.querySelectorAll("a").forEach((element) => element.classList.remove("active"));
  e.target.closest("li").children[0].classList.toggle("active");
  //渲染的地方
  // const show_item = document.querySelector('.show_item');
  currentPageRender(currentPage);
}

function currentPageRender(currentPage) {
  let show_item = document.querySelector(".show_item");
  // console.log('目前哪一頁',currentPage);
  let item = getLocalStorageArray();
  const completeItem = item.filter(function (item) {
    return item.done === true;
  });
  const progressItem = item.filter(function (item) {
    return item.done === false;
  });
  if (currentPage === "My Task") {
    //渲染畫面
    createList(item, show_item);
    return;
  }
  //In Progress
  if (currentPage === "Completed") {
    //渲染畫面
    createList(completeItem, show_item);
    return;
  }
  //Completed
  if (currentPage === "In Progress") {
    //渲染畫面
    createList(progressItem, show_item);
    return;
  }
}
function createList(allData = [], dom) {
  dom.innerHTML = allData
    .map((data) => {
      return `<form data-index=${data.record_time}>
                <div class="textCard  ${data.star ? "click_star" : ""}">
                    <input type="checkbox" ${data.done ? "checked" : ""}/>
                    <input type="text" value="${data.text}"" class="${data.done ? "click_CheckBox" : ""}">
                    <div class="edit_button">
                    <a href="##" class="star"><i class=" ${data.star ? "fas" : ""} far fa-star"></i></a>
                        <a href="##" class="pen">
                            <i class="fa-fw fas fa-pen"></i>
                        </a>
                    </div>
                    <div class="content_icon">
                            ${
                              data.date
                                ? '<a href="##"><i class="fa-fw fas fa-calendar-alt">' +
                                  dateFormat(data.date) +
                                  "</i></a>"
                                : ""
                            }
                            ${data.file ? '<a href="##"><i class="fa-fw far fa-file"></i></a>' : ""}
                            ${data.comment ? ' <a href="##"><i class="fa-fw far fa-comment-dots"></i></a>' : ""}
                    </div>
                </div>
                <div class="detail display-none">
                    <div class="deadline">
                        <div class="title">
                            <i class="fa-fw fas fa-calendar-alt"></i>
                            <span>Deadline</span>
                        </div>
                        <div class="content">
                            <input type="date" value="${data.date}"></input>
                            <input type="time" value="${data.time}"></input>
                        </div>
                    </div>
                    <div class="file">
                        <div class="title">
                            <i class="fa-fw far fa-file"></i>
                            <span>File</span>
                        </div>
                        <div class="content">
                            <button class="add_button">+</button>
                        </div>
                    </div>
                    <div class="comment">
                        <div class="title">
                            <i class="fa-fw far fa-comment-dots"></i>
                            <span>Comment</span>
                        </div>
                        <div class="content">
                            <textarea >${data.comment}</textarea>
                        </div>
                    </div>
                </div>
                <div class="wrap_button display-none">
                    <button class="cancel">x Cancel</button>
                    <button class="save">+ save</button>
                </div>
            </form>
            `;
    })
    .join("");
}

export { currentPageRender, switchPage, currentPage };
