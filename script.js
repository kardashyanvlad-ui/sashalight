// Функция для открытия модального окна с изображением
function openModal(src) {
    document.getElementById('myModal').style.display = "block";
    document.getElementById('img01').src = src;
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы под модальным окном
}

// Функция для закрытия модального окна
function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.body.style.overflow = 'auto'; // Возвращаем возможность прокрутки
}

// Закрытие модального окна по клику вне изображения
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
}