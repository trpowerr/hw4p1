import healthPoint from '../game';

test('should introduce correct numbers', () => {
  const unit = new Map();
  unit.set('Маг', 100);

  const expected = 'healthy';

  const received = healthPoint();

  expect(received).toBe(expected);
});
