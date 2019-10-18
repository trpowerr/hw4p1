// const unit = new Map();
// unit.set('Маг', 100);

const unit = ['Маг', 100];

let hp = 0;


export default function healthPoint() {
  for (const health of unit.values()) {
    if (health > 50) {
      hp = 'healthy';
    } else if (health < 15) {
      hp = 'crirical';
    } else {
      hp = 'wounded';
    }
  }

  return hp;
}
