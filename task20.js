const sizeLocalStorage = () => {
    let totalBytes = 0;
    // Перебираем все ключи в LocalStorage
    for (let key in localStorage) {
      // Проверяем, что значение с таким ключом является строкой (это исключает методы и свойства LocalStorage)
      if (typeof localStorage[key] === 'string') {
        // Считаем размер каждой строки и добавляем к общему объему
        totalBytes += localStorage[key].length * 2; // Умножаем на 2, так как каждый символ занимает 2 байта в JavaScript
      }
    }
  
    var storageSize = 5 * 1024 * 1024; // 5 MB (это стандартный максимальный размер LocalStorage)
  
    // Выводим объем занимаемой памяти и максимальный размер в консоль
    console.log('Объем занимаемой памяти: ' + totalBytes + ' байт');
    console.log('Максимальный размер хранилища: ' + storageSize + ' байт');
}
  
  // Подписываемся на событие изменения данных в LocalStorage
  window.addEventListener('storage', sizeLocalStorage);