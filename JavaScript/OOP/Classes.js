class Hero {
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.inventory = [];
    }

    displayStats() {
        console.log(`Hero: ${this.name} | HP: ${this.health} | Damage: ${this.damage}`);
    }

    buyItem(item) {
        this.inventory.push(item);
        console.log(`${this.name} bought ${item}!`); 
    }

    takeDamage(amount) {
        this.health -= amount;
        
        if (this.health < 0) {
            this.health = 0;
        }

        console.log(`${this.name} got ${amount} damage! Remaining: ${this.health} HP`);

        if (this.health === 0) {
            console.log(`💀 ${this.name} has been slain!`);
        }
    }
}

const Visage = new Hero("Visage", 810, 56);
Visage.displayStats();
Visage.buyItem("Boots of Bearing");
Visage.takeDamage(900);