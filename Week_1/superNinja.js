// Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

// 1. create a class Sensei that inherits from the Ninja 2. class  
// 2. add an attribute: wisdom - default to 10  
// 3. create a method: speakWisdom()  
// 4. create a method: drinkSake()

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

class sensei extends ninja {
  constructor(name, health = 200, speed = 10, strength = 10 , wisdom = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom; 
  }
  speakWisdom() {
    super.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.");

    return this;
    }
  }
  
const flydog = new ninja("Thedog")
const flyingcat = new sensei("yugi");
flyingcat.speakWisdom(flydog);