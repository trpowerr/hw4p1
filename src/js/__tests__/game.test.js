import { healthPoint, unit } from '../game';

let expected = 0;
let received = 0;

// test('should introduce correct healthpoint', () => {
//   const received = healthPoint();
//   if (unit.health > 50) {
//     expected = 'healthy';
//   } else if (unit.health < 15) {
//     expected = 'critical';
//   } else {
//     expected = 'wounded';
//   }

//   expect(received).toBe(expected);
// });

test('should introduce correct healthpoint', () => {
  received = healthPoint();
  if (unit.health > 50) {
    expected = 'healthy';
    expect(received).toBe(expected);
  }
});

test('should introduce correct healthpoint', () => {
  received = healthPoint();
  if (unit.health < 15) {
    expected = 'critical';
    expect(received).toBe(expected);
  }
});

test('should introduce correct healthpoint', () => {
  received = healthPoint();
  if (unit.health <= 50 & unit.health >= 15) {
    expected = 'wounded';
    expect(received).toBe(expected);
  }
});
