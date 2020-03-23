let click = 0;

function showSearch() {
    click++;
    if (click % 2 != 0) {
        document.getElementById("click_search").style.display = 'flex';
    } else {
        document.getElementById("click_search").style.display = 'none';
    }
}

