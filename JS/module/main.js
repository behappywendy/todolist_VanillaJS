import { currentPageRender, currentPage } from './UI/page.js';
import { toggleStarUI, toggleCheckBoxUI } from './UI/toggleUI.js';
// import { toggleExistingItemStar, toggleCheckBox } from './data/toggle.js';
import { toggleStarAndCheckBox } from './data/toggle.js';
import { clickAddTaskButton, clickEditButton, clickSaveButton, clickCancel } from './data/button.js';

let container = document.querySelector('.container ');
currentPageRender(currentPage);
//點開上方addtask大button 會出現form
document.querySelector('.add_task').addEventListener('click', () => {
    document.querySelector('form').classList.toggle('display-none');
});

container.addEventListener('click', clickCancel); ////全部的取消鈕
container.addEventListener('click', toggleStarUI);
container.addEventListener('click', toggleCheckBoxUI);
container.addEventListener('click', toggleStarAndCheckBox);
// container.addEventListener('click', toggleExistingItemStar); //點星星
// container.addEventListener('click', toggleCheckBox); //點checkbox
container.addEventListener('click', clickAddTaskButton);
container.addEventListener('click', clickEditButton);
container.addEventListener('click', clickSaveButton);

// let currentPage = 'My Task';
// function changeCurrentPage(toPage) {
//     currentPage = toPage;
// }
