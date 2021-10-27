jest.useFakeTimers();
// const fuzzySearch = require('./fuzzySearch');
import fuzzySearch from './fuzzySearch';

const data = [
  {
    id: '987Scj*&Fh238Yx',
    name: 'Elaine',
    atHome: false
  },
  {
    id: '2876ygd82j(&%gAsx82',
    name: 'Jerry',
    atHome: false
  },
  {
    id: '29%7dbu1HGF@629',
    name: 'George',
    atHome: false
  },
  {
    id: '$gdiuwI729hsyR$',
    name: 'Kramer',
    atHome: true
  }
];

describe('fuzzySearch', () => {
  test('should get Elaine', async () => {
    const searchTerm = '987';
    const res = await fuzzySearch(data, searchTerm);

    expect(res[0]).toStrictEqual(data[0]);
  });
});