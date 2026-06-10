const isCorrect1 = true;
const isCorrect2 = false;
const isCorrect3 = true;

const score = isCorrect1 + isCorrect2 + isCorrect3;

const obj1 = {
  value: 10,
  [Symbol.toPrimitive](hint) {
    return this.value;
  },
};

const obj2 = {
  value: 15,
  [Symbol.toPrimitive](hint) {
    return this.value;
  },
};

alert(obj1 + obj2);

const gameCharacter = {
  strength: 23,
  agility: 15,
  intelligence: 15,
  luck: 7,
};

const { strength, agility, intelligence, luck } = gameCharacter;
alert(strength + agility + intelligence + luck);

const obj = {
  name: "Henry",
  surname: "Taylor",
  bonus: 5,

  get allName() {
    return `${this.name} ${this.surname}`;
  },

  get profileInfo() {
    return `User: ${this.allName}, Bonus: ${this.bonus}`;
  },
};

alert(obj.allName);
alert(obj.profileInfo);

obj.bonus = 50;
alert(obj.profileInfo);

const inventory = {
  sword: 50,
  shield: 30,
  potion: 10,

  get totalPower() {
    return this.sword + this.shield + this.potion;
  },

  [Symbol.toPrimitive](hint) {
    return this.totalPower;
  },
};

alert(inventory + 100);

const { sword, shield } = inventory;
alert(sword + shield);
