function Tamagochi(_name, _life) {

    var name = _name, life = _life;

    this.walk = function () {
        if (life > 0) {
            life--;
            console.log("Go to the park " + life);
        }
        else this.died();
    };
    this.eat = function () {
        if (life > 0) {
            life++;
            console.log("Have some food lime " + life);
        }
        else this.died();
    };
    this.sleap = function () {
        if (life > 0) {
            life++;
            console.log("And go to sleap " + life);
        }
        else this.died();
    };
    this.died = function () {
        if (life = 0) {
            console.log("Died");
        }
        else this.died();
    };
}

var greenTamagochi = new Tamagochi("Tom", 5);
console.log(greenTamagochi);

greenTamagochi.walk();
greenTamagochi.eat();
greenTamagochi.walk();
greenTamagochi.walk();
greenTamagochi.sleap();
greenTamagochi.walk();
greenTamagochi.walk();
greenTamagochi.walk();
greenTamagochi.walk();
greenTamagochi.walk();