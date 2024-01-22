document.addEventListener("DOMContentLoaded", function () {
    // Получаем все заголовки аккордеона
    var accordionTitles = document.querySelectorAll(".accordion-title");

    // Добавляем обработчик события для каждого заголовка
    accordionTitles.forEach(function (title) {
        title.addEventListener("click", function () {
            // Находим родительский элемент заголовка (accordion-panel)
            var accordionPanel = title.closest(".accordion-panel");

            // Получаем контент этой панели
            var accordionContent = accordionPanel.querySelector(".accordion-content");

            // Переключаем стиль высоты контента при клике
            if (accordionContent.style.height === "0px" || accordionContent.style.height === "") {
                accordionContent.style.height = "100%";
            } else {
                accordionContent.style.height = "0px";
            }
        });
    });
});





