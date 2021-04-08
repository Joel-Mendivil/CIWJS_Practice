class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        alert(`${this.name} runs with the speed ${this.speed}`);
    }
    stop(){
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
}

let animal = new Animal("My Animal");

class Rabbit extends Animal {
    hide(){
        alert(`${this.name} hides!`)
    };
    stop(){
        //.. now this will be used for rabbit.stop()
        // instead of stop() from class Animal
        super.stop(); //call the parent stop
        this.hide(); //and then it will call our hide method
    }
}

let rabbit = new Rabbit('Beckham');

rabbit.run(5); //our rabbit runs at a speed of 5
rabbit.hide(); //our rabbit will hide!