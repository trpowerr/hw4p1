const unit = {name: 'Маг', health: 26};
let hp = unit.health;

function healthPoint(hp) {
    if (unit.health > 50) {
      hp = 'healthy';
    } else if (unit.health < 15) {
      hp = 'crirical';
    } else {
      hp = 'wounded';
    }

  return hp;
}

console.log(healthPoint());
