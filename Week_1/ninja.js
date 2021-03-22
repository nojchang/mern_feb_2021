class ninja {
  constructor (name, health, speed = 3, strength = 3) {
      this.name = name;
      this.health = health;
      this.strength =  strength;
      this.speed = speed;
  }
  sayName() {
    console.log(this.name);
    return this;
  }
  showStats() {
    console.log(
      'Health: ${this.health}, Strength: ${this.strength},Speed: ${this.speed}'
    );
    return this;
  }
  drinkSake() {
    this.health += 10;
    return this;
  }
}

const naruto = new ninja("Naruto the 7th hokage ", 28);
naruto.showStats();
