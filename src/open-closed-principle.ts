/**
 * **Open-Closed Principle**
 *
 * You've maybe heard some variant of how a module
 *
 * > "[...] should be open for extension and closed for modification."
 *
 * This principle is closely related to polymorphism, as we use
 * an abstraction (the Toy, in this case) to fulfill our principle.
 *
 * In terms of the "open" and "closed" notions, this can be more easily
 * understood if you think of "open for extension" as referring to
 * the abstractions, rather than the concrete implementation. Thus,
 * you build new classes (such as a `CuddlyBear`) that implements the
 * Toy abstraction; i.e. they are "open for extension". This keeps the
 * unique properties and implementation details of each Toy discrete;
 * i.e. they are "closed for modification".
 *
 * @see https://en.wikipedia.org/wiki/Open–closed_principle
 */
function ocpDemo() {
  interface Toy {
    play(): void;
  }

  class DancingRobot implements Toy {
    play(): void {
      console.log('Robot: The clanking robot slam-dances wildly!');
      this.adjustHydraulics();
    }

    adjustHydraulics() {
      console.log('Robot: Adjusting hydraulics...');
    }
  }

  class SingingDinosaur implements Toy {
    play(): void {
      this.snack();
      console.log('Dinosaur: The giant dinosaur roars into a song!');
    }

    snack() {
      console.log(
        'Dinosaur: Eating some lesser creatures as a pre-performance snack...'
      );
    }
  }

  class ToyPlayer {
    playWithToys(toys: Toy[]): void {
      for (const toy of toys) toy.play();
    }
  }

  new ToyPlayer().playWithToys([new DancingRobot(), new SingingDinosaur()]);
}

ocpDemo();
