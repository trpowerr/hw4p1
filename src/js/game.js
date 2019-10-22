export const unit = { name: 'Маг', health: 15 };
let hp = 0;

export function healthPoint() {
  if (unit.health > 50) {
    hp = 'healthy';
  } else if (unit.health < 15) {
    hp = 'critical';
  } else {
    hp = 'wounded';
  }

  return hp;
}
