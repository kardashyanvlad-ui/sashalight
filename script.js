/* Сброс стандартных отступов и полей */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Raleway', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
}

h1, h2 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Герой-секция */
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://placehold.co/1920x1080/ffffff/black?text=Beautiful+Background'); /* ЗАМЕНИТЕ на свое фоновое фото */
    background-size: cover;
    background-position: center;
    color: #fff;
    text-align: center;
    padding: 150px 20px;
}

.hero h1 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
}

.tagline {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
    font-style: italic;
}

.description {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto 2rem;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    background-color: #f4c2c2; /* Нежный розовый */
    color: #000;
    text-decoration: none;
    border-radius: 2px;
    font-weight: 500;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #e8adad;
}

/* Секции */
section {
    padding: 80px 0;
}

h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2.5rem;
}

/* Обо мне */
.about {
    background-color: #f8f8f8;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.1rem;
}

/* Галерея */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
}

.gallery-item {
    overflow: hidden;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: scale(1.02);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

/* Модальное окно */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    padding-top: 50px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
    display: block;
    margin: 0 auto;
    max-width: 90%;
    max-height: 80vh;
    width: auto;
}

.close {
    position: absolute;
    top: 20px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}

/* Контакты */
.contact {
    text-align: center;
    background-color: #f8f8f8;
}

.social-links {
    margin-top: 30px;
}

.social-links a {
    color: #333;
    font-size: 2.5rem;
    margin: 0 15px;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: #f4c2c2; /* Цвет иконок при наведении */
}

/* Футер */
footer {
    text-align: center;
    padding: 20px 0;
    background-color: #333;
    color: #fff;
}

/* Адаптивность */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    .tagline {
        font-size: 1.2rem;
    }
    .gallery {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    .social-links a {
        font-size: 2rem;
        margin: 0 10px;
    }
}