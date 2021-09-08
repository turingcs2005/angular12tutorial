
  // If meal is selected, burger and fries grey out; if either burger or fries is selected, meal greys out.
  export const optionList = ['meal', 'burger', 'fries', 'T-shirt'];

  export class Choice {
      constructor(
        public name: string,
        public selected: boolean = false,
        public disabled: boolean = false
      ) {}
  }

  export class MultiChoices {
      constructor(
        public choices: Choice[] = []
      ){}

    //  return a choice by name
    returnChoice(name: string) {
        const i = this.choices.map(x => x.name).indexOf(name);
        return this.choices[i];
    }

    // deselect and disable a choice by name
    disable(choice: Choice) {
        choice.disabled = true;
    }

    enable(choice: Choice) {
        choice.disabled = false;
    }

    get meal() {
        return this.returnChoice('meal');
    }

    get burger() {
        return this.returnChoice('burger');
    }

    get fries() {
        return this.returnChoice('fries');
    }

    returnOtherChoice(choice: Choice) {
        if (choice === this.burger) {
            return this.fries;
        } else {
            return this.burger;
        }
    }

    //   💩 Logics to enable/disable choices
    click(choice: Choice) {

        if (choice === this.meal) {
            // if 'meal' is selected, disable 🍔 and 🍟; if unselected, enable them.
            if (this.meal.selected) {
                this.burger.disabled = true;
                this.fries.disabled = true;
            } else {
                this.burger.disabled = false;
                this.fries.disabled = false;
            }
        }

        if (['burger', 'fries'].includes(choice.name)) {

            let otherChoice = this.returnOtherChoice(choice);
            console.log(choice.name);

            // if 🍔 or 🍟 is selected, disable meals (again)
            if (choice.selected || otherChoice.selected) {
                this.meal.disabled = true;  
            } else { 
            // if both 🍔 & 🍟 are deselected, enable meals
                this.meal.disabled = false;
            }
        }
    }
  }

  export const menuChoices = new MultiChoices();
  optionList.forEach( x => {
      menuChoices.choices.push(new Choice(x));
  });
  