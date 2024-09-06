class studentHogwarts {
    //  private method to set arguments, # sign mean this class is praivate
    #privateScore = 0;
    #name = null;

    #changeScoreBy(points) {
        this.#privateScore += points;
    }
    // Public method to set name
    setName(newName) {
        this.#name = newName;
    }
    // Public method to reward student
    rewardStudent() {
        this.#changeScoreBy(1);
    }
    // Public method to penalize student
    penalizeStudent() {
        this.#changeScoreBy(-1);
    }
    getScore() {
        return this.#name + ' : ' + this.#privateScore;
    }
}

let harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());