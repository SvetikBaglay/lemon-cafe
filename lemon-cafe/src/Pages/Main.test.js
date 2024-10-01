import { initializeTimes, updateTimes } from './Main';
import { expectedTimes, fetchAPI } from "../lib/mocks";

window.fetchAPI = fetchAPI;


describe('initializeTimes', () => {
  test('should return a non-empty array of time slots', () => {
    const times = initializeTimes();
    expect(times).toHaveLength(expectedTimes.length);
  });


});

describe('updateTimes', () => {
  test('should return a non-empty array of time slots', () => {
    expect(updateTimes({}, new Date())).toEqual(expectedTimes);
    });
});



