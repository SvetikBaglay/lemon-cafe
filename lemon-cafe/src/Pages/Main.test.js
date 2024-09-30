import { render, screen } from "@testing-library/react";
import Main from './Main'

import { initializeTimes } from './Main';
import { updateTimes }from './Main'

const expectedTimes = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

describe('initializeTimes', () => {
  test('should return correct time slots', () => {
    expect(initializeTimes()).toEqual(expectedTimes);
    });
});

describe('updateTimes', () => {
  test('should return correct time slots', () => {
    expect(updateTimes()).toEqual(expectedTimes);
    });
});
