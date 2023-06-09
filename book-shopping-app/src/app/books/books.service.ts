import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'clean code',
        author: 'Robert C. Martin',
        image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        amount: 700,
      },
      {
        name: 'the pragmatic programmer',
        author: ' David Thomas,  Andrew Hunt',
        image: 'https://m.media-amazon.com/images/I/51IA4hT6jrL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 750,
      },
      {
        name: 'INTRODUCTION TO ALGORITHMS',
        author: 'Charles E. Leiserson, Thomas H. Cormen',
        image: 'https://m.media-amazon.com/images/I/41vLer1KbmL._SX437_BO1,204,203,200_.jpg',
        amount: 3225,
      },
      {
        name: 'Coders at Work: Reflections on the Craft of Programming',
        author: 'Peter Seibel',
        image: 'https://m.media-amazon.com/images/I/415Z8IEPDpL._SX376_BO1,204,203,200_.jpg',
        amount: 4932,
      },
  
    ];  
  }
}
