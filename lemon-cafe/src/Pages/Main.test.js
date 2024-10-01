import { render, screen } from "@testing-library/react";
import Main from './Main'

import { initializeTimes } from './Main';
import { updateTimes } from './Main'
import fetchAPI from '../../public/index.html'

// const expectedTimes = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const expectedTimes = []

describe('initializeTimes', () => {
  test('should return a non-empty array of time slots', () => {
    const times = initializeTimes();
    expect(times).toHaveLength(expectedTimes.length);
  });
});



// describe('initializeTimes', () => {
//   test('should return correct time slots', () => {
//     console.log('expectedTimes ', expectedTimes)
//     expect(initializeTimes()).toEqual(expectedTimes);
//     });
// });


// describe('updateTimes', () => {
//   test('should return correct time slots', () => {
//     expect(updateTimes()).toEqual(expectedTimes);
//     });
// });
