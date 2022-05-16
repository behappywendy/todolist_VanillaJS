// function currentData() {
//     const text = document.querySelector('input[type="text"]').value;
//     const data = document.querySelector('input[type="date"]').value;
//     const inputTime = document.querySelector('input[type="time"]').value;
//     const inputComment = document.querySelector('textarea').value;
//     const isStar = document.querySelector('.textCard').classList.contains('click_star');
//     const isChecked = document.querySelector('input[type="checkbox"]').checked;
//     let item = {
//         text: text,
//         date: data,
//         time: inputTime,
//         file: '檔案',
//         comment: inputComment,
//         star: isStar,
//         done: isChecked,
//         record_time: Date.now(),
//     };
//     //越舊的資料id越小
//     return item;
// }

// function renewData(dom, record) {
//     let renewText = dom.querySelector('input[type="text"]').value;
//     let renewData = dom.querySelector('input[type="date"]').value;
//     let renewTime = dom.querySelector('input[type="time"]').value;
//     let renewInputComment = dom.querySelector('textarea').value;
//     let renewStar = dom.querySelector('.textCard').classList.contains('click_star');
//     let renewChecked = dom.querySelector('input[type="checkbox"]').checked;
//     let item = {
//         text: renewText,
//         date: renewData,
//         time: renewTime,
//         file: '檔案',
//         comment: renewInputComment,
//         star: renewStar,
//         done: renewChecked,
//         record_time: record, //請使用舊的
//     };
//     return item;
// }
// export { currentData, renewData };

// checkData(dom, record);
function checkData(dom, record) {
  // console.log("input", dom, record);
  const text = dom.querySelector('input[type="text"]').value;
  const date = dom.querySelector('input[type="date"]').value;
  const inputTime = dom.querySelector('input[type="time"]').value;
  const inputComment = dom.querySelector("textarea").value;
  const isStar = dom.querySelector(".textCard").classList.contains("click_star");
  const isChecked = dom.querySelector('input[type="checkbox"]').checked;
  let item = {
    text: text,
    date: date,
    time: inputTime,
    file: "檔案",
    comment: inputComment,
    star: isStar,
    done: isChecked,
    record_time: record, //請使用舊的
  };

  //越舊的資料id越小
  console.log(item);
  return item;
}

export { checkData };
