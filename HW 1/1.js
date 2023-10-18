/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  musicAlbums: [
    { title: "Positions", artist: "Ariana Grande", year: "2020" },
    { title: "Artpop", artist: "Lady Gaga.", year: "2013" },
    { title: "Guitar Songs", artist: "Billie Eilish", year: "2022" },
  ],

  [Symbol.iterator]() {
    this.index = 0;
    return this;
  },
  next() {
    return this.index < this.musicAlbums.length
      ? { done: false, value: this.musicAlbums[this.index++] }
      : { done: true };
  },
};
for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
