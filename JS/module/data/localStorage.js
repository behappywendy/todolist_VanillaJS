function getLocalStorageArray() {
    return JSON.parse(localStorage.getItem('items')) || [];
}
function saveLocalStorageArray(localStorageItems) {
    //排序
    let sortResult = sort(localStorageItems);
    //存到localStorage
    localStorage.setItem('items', JSON.stringify(sortResult));
}

function sort(items) {
    return items.sort(function (a, b) {
        let scoreA = (a.star ? 100 : 0) + (a.done ? -200 : 0);
        let scoreB = (b.star ? 100 : 0) + (b.done ? -200 : 0);
        if (scoreB - scoreA === 0) {
            return a.record_time - b.record_time;
        } else {
            return scoreB - scoreA;
        }
    });
}
export { getLocalStorageArray, saveLocalStorageArray };
