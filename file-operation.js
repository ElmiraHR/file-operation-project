// Импортируем модули
const fs = require('fs');
const dotenv = require('dotenv');

// Загрузка переменных окружения из файла .env
dotenv.config();

// Получение имени файла из переменной окружения
const filename = process.env.FILENAME;

// Текст, который будет записан в файл
const content = 'Привет, это тестовая запись в файл!';

// Запись текста в файл
fs.writeFile(filename, content, (err) => {
    if (err) {
        return console.error('Ошибка записи в файл:', err);
    }
    console.log(`Текст был успешно записан в файл ${filename}`);

    // Чтение содержимого файла
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            return console.error('Ошибка чтения файла:', err);
        }
        console.log('Содержимое файла:');
        console.log(data);
    });
});
