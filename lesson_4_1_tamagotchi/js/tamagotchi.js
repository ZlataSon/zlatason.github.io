function Tamagotchi(_name, _life, _happy, _risk, _sport, _hobby, _brain) {

    var name = _name,
        life = _life,
        happy = _happy,
        risk = _risk,
        sport = _sport,
        hobby = _hobby,
        brain = _brain,
        hospital = false;

    this.check = function () {
        if (life < 0) {
            life = 0;
        }
        if (happy < 0) {
            happy = 0;
        }
        if (risk < 0) {
            risk = 0;
        }
        if (sport < 0) {
            sport = 0;
        }
        if (hobby < 0) {
            hobby = 0;
        }
        if (brain < 0) {
            brain = 0;
        }
        this.oh();
    };

    this.walk = function () {
        if (life != 0 && risk != 0) {
            happy++;
            risk--;
            life--;
            sport++;
            this.check();
            console.log(name + " " + "goes for a walk in the park" + " (" + life + "/ " + happy + "/ " + risk + "/ " + sport + "/ " + hobby + "/ " + brain + ")");
        }
        else this.check();
    };

    this.rain = function () {
        if (hospital) return;
        if (life != 0 && happy != 0 && hobby != 0) {
            life--;
            happy--;
            risk++;
            hobby--;
            this.check();
            console.log(name + " " + "gets wet in the rain" + " (" + life + "/ " + happy + "/ " + risk + "/ " + sport + "/ " + hobby + "/ " + brain + ")");
        }
        else this.check();
    };

    this.eat = function () {
        if (hospital) return;
        if (risk != 0 && happy != 0 && hobby != 0) {
            life++;
            brain++;
            happy--;
            risk--;
            hobby--;
            this.check();
            console.log(name + " " + "eating healthy food" + " (" + life + "/ " + happy + "/ " + risk + "/ " + sport + "/ " + hobby + "/ " + brain + ")");
        }
        else this.check();
    };

    this.sleep = function () {
        if (hospital) return;
        if (risk != 0 && sport != 0 && hobby != 0) {
            life++;
            happy++;
            risk--;
            hobby--;
            brain++;
            sport--;
            this.check();
            console.log(name + " " + "goes to sleep" + " (" + life + "/ " + happy + "/ " + risk + "/ " + sport + "/ " + hobby + "/ " + brain + ")");
        }
        else this.check();
    };

    this.eat_sweets = function () {
        if (hospital) return;
        if (life != 0 && sport != 0 && brain != 0) {
            life--;
            happy++;
            risk++;
            sport--;
            brain--;
            this.check();
            console.log(name + " " + "eating sweets" + " (" + life + "/ " + happy + "/ " + risk + "/ " + sport + "/ " + hobby + "/ " + brain + ")");
        }
        else this.check();
    };

    this.tv = function () {
        if (hospital) return;
        if (brain != 0 && sport != 0) {
            happy++;
            brain--;
            sport--;
            this.check();
            console.log(name + " " + "watching TV" + " (" + life + "/ " + happy + "/ " + risk + "/ " + sport + "/ " + hobby + "/ " + brain + ")");
        }
        else this.check();
    };

    this.accident = function () {
        if (hospital) return;
        if (life >= 0) {
            life = 0;
            happy = 0;
            risk = 0;
            hobby = 0;
            brain = 0;
            sport = 0;
            this.check();
            console.log(name + " " + "had an accident and is now in hospital" + " (" + life + "/ " + happy + "/ " + risk + "/ " + sport + "/ " + hobby + "/ " + brain + ")");
        }
        else this.check();
    };

    this.oh = function () {
        if (life == 0 && happy == 0 && risk == 0) {
            console.log(name + " " + "does not want to live" + " (" + life + "/ " + happy + "/ " + risk + "/ " + sport + "/ " + hobby + "/ " + brain + ")");
            hospital = true;
        }
        else if (life == 0 || brain == 0 || sport == 0) {
            console.log(name + " " + "is very sick" + " (" + life + "/ " + happy + "/ " + risk + "/ " + sport + "/ " + hobby + "/ " + brain + ")");
            brain++;
            life++;
            sport++;
        }
        else if (happy == 0 || hobby == 0 || risk == 0) {
            console.log(name + " " + "depressed" + " (" + life + "/ " + happy + "/ " + risk + "/ " + sport + "/ " + hobby + "/ " + brain + ")");
            hobby++;
            risk++;
            happy++;
        }
        else if (life > 5 || happy > 5 || risk > 5 || hobby > 5 || sport > 5 || brain > 5) {
            console.log(name + " " + "crazy" + " (" + life + "/ " + happy + "/ " + risk + "/ " + sport + "/ " + hobby + "/ " + brain + ")");
            life = 1;
            happy = 1;
            risk = 1;
            hobby = 1;
            brain = 1;
            sport = 1;
        }
        else console.log("HAPPY")
    };
}

var greenTamagotchi = new Tamagotchi("Tommy", 3, 3, 3, 3, 3, 3);
console.log(greenTamagotchi);



greenTamagotchi.walk();
greenTamagotchi.rain();
greenTamagotchi.eat();
greenTamagotchi.sleep();
greenTamagotchi.eat_sweets();
greenTamagotchi.tv();
greenTamagotchi.rain();
greenTamagotchi.eat_sweets();
greenTamagotchi.walk();
greenTamagotchi.sleep();
greenTamagotchi.tv();
greenTamagotchi.walk();
greenTamagotchi.rain();
greenTamagotchi.walk();
greenTamagotchi.rain();
greenTamagotchi.eat();
greenTamagotchi.sleep();
greenTamagotchi.eat_sweets();
greenTamagotchi.tv();
greenTamagotchi.accident();




