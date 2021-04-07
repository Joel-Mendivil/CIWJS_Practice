let ladder = {
    step: 0,
    maxStep: 5,

    up(){
        if(this.step !== this.maxStep){
            this.step++;
        } else {
            alert("Max step reached");
        }
    },

    down(){
        this.step--;
    },

    showStep: function name() { //shows the current step
        console.log(this.step);
    }
};

ladder.up().up().down().up().down().showStep(); //1