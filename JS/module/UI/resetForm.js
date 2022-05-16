function restForm(dom) {
    dom.reset();
    //星星樣式要清除
    //1.text_card背景色
    dom.querySelector('.textCard').classList.remove('click_star');
    //2.星星是空
    dom.querySelector('.star').innerHTML = `<i class="fa-fw far fa-star"></i>`;
    //刪除線樣式清除
    dom.querySelector('input[type="text"]').classList.remove('click_CheckBox');
}
export { restForm };
