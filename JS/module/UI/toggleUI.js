function toggleStarUI(e) {
    //點擊星星
    if (!e.target.closest('.star')) {
        return;
    }
    //textCard變顏色
    const textCard = e.target.closest('.textCard');
    textCard.classList.toggle('click_star');
    //變實星星
    const star = e.target.closest('.star');
    const starIcon = star.querySelector('i');
    starIcon.classList.toggle('fas');
}
function toggleCheckBoxUI(e) {
    if (!e.target.closest('input[type="checkbox"]') || !e.target.closest('.show_item')) {
        return;
    }
    let editState = e.target.closest('form').children[1].classList.contains('display-none');
    if (!editState) {
        //編輯狀態由save來儲存資料
        return;
    }
    e.target.closest('.textCard').querySelector('input[type="text"]').classList.toggle('click_CheckBox');
}

export { toggleStarUI, toggleCheckBoxUI };
