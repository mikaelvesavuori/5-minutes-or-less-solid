/**
 * **Liskov Substitution Principle**
 *
 * This one is often explained in confusing ways, but it's
 * actually very simple. The principle just really states that both
 * superclasses and their subclasses should be interchangeable.
 * You've probably seen this many times!
 *
 * The benefits of this include a higher degree of consistency,
 * being more modular and looser coupled, and subsequently being
 * easier to logically test and reason about.
 *
 * This principle complements the Interface Segregation Principle,
 * marking the edge between the interface "around" the code and LSP's
 * focus on behavior.
 *
 * The demo is shown without interfaces to clarify the principle's
 * nature on functional compatibility. You can certainly use
 * interfaces (leaning on the Interface Segregation Principle) and
 * some of the other principles too!
 *
 * @see https://en.wikipedia.org/wiki/Liskov_substitution_principle
 */
function lspDemo() {
  class Animal {
    protected name: string;

    constructor(name: string) {
      this.name = name;
    }

    getName(): string {
      return this.name;
    }

    makeSound(): string {
      return 'Animal sound!';
    }
  }

  class Cat extends Animal {
    makeSound(): string {
      return 'Meow!';
    }
  }

  /**
   * @param animal
   * @example
   */
  function greetAnimal(animal: Animal): void {
    console.log(`Hello, ${animal.getName()}!`);
    console.log(animal.makeSound());
  }

  const animal = new Animal('Any Animal');
  greetAnimal(animal); // Output: Hello, Any Animal!\n Animal sound!

  const cat = new Cat('Whiskers');
  greetAnimal(cat); // Output: Hello, Whiskers!\n Meow!
}

lspDemo();
