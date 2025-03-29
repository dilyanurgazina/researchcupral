document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.getElementById("book-list");
    const showBtn = document.getElementById("show-books");
    const hideBtn = document.getElementById("hide-books");

    if (!bookList || !showBtn || !hideBtn) {
        console.error("Не найден один из элементов: bookList, showBtn, hideBtn");
        return;
    }

    bookList.style.display = "none"; // По умолчанию список скрыт
    showBtn.addEventListener("click", function () {
        bookList.style.display = "block"; // Показываем список
        console.log("Список показан");
    });

    hideBtn.addEventListener("click", function () {
        bookList.style.display = "none"; // Скрываем список
        console.log("Список скрыт");
    });
});

