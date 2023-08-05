/**
 * **Dependency Inversion Principle**
 *
 * This one is strong! It may also be one of the harder ones to
 * pull off correctly.
 *
 * Following the Dependency Inversion Principle means
 * 1. Relying on contracts and interfaces rather than concrete implementations.
 * This is, of course, very similar to the Interface Segregation Principle,
 * which if you've followed it, will mean you have interfaces you can
 * rely on.
 * 2. High–level modules should not depend on lower-level modules; both
 * depend on abstractions.
 *
 * In the example you'll see how all food providers have a common interface
 * that they implement. So far so good.
 *
 * The dependency inversion happens as our high-level modules (the respective
 * `FoodProvider`-derived classes) depends only on the `FoodProvider` interface.
 * The `Foodie`, in turn, only expects to be provided with a concretion to use.
 *
 * We actually even do dependency injection in the `Foodie` class, since
 * we provide it a `FoodProvider` instance. This enables a more flexible and
 * testable system, as we can easily adapt and expand the `FoodProvider`s from the
 * outside, even (for example) injecting fake databases into repository implementations
 * or other cases that are typically hard to test without infrastructure.
 *
 * @see https://en.wikipedia.org/wiki/Dependency_inversion_principle
 */
function dipDemo() {
  interface FoodProvider {
    provideFood(): void;
  }

  class PizzaRestaurant implements FoodProvider {
    provideFood(): void {
      console.log("Man, that's some tasty pizza!");
    }
  }

  class IceCreamTruck implements FoodProvider {
    provideFood(): void {
      console.log('Some sick ice cream!');
    }
  }

  class Foodie {
    private foodProvider: FoodProvider;

    constructor(foodProvider: FoodProvider) {
      this.foodProvider = foodProvider;
    }

    consumeFood(): void {
      this.foodProvider.provideFood();
    }
  }

  const pizzaLover = new Foodie(new PizzaRestaurant());
  pizzaLover.consumeFood();

  const icecreamLover = new Foodie(new IceCreamTruck());
  icecreamLover.consumeFood();
}

dipDemo();
