/**
 * **Single Responsibility Principle**
 *
 * This one is pretty easy! Everything should have
 * its own clear responsibility. Or in the words
 * of Robert C. Martin,
 * > "A class should have only one reason to change".
 *
 * While this sounds trivial, you'll probably have seen poor
 * adherence to this principle hundreds of times.
 *
 * This doesn't mean that _literally_ every class does
 * one "thing" only, but that logical groupings of responsibility
 * should be furnished and that classes are logically unique.
 *
 * In the example, you'll see how the cookie is separated from
 * the act of "dipping" it. The cookie stores information on flavor,
 * and the dipper is the interactor. The same example can be easily
 * transferred to databases/repositories, game's character logic
 * vs their UI representation, and so on.
 *
 * @see https://en.wikipedia.org/wiki/Single-responsibility_principle
 */
function srpDemo() {
  class Cookie {
    private flavor: string;

    constructor(flavor: string) {
      this.flavor = flavor;
    }

    getFlavor(): string {
      return this.flavor;
    }
  }

  class MilkDipper {
    dipCookie(cookie: Cookie): void {
      const flavor = cookie.getFlavor();
      console.log(
        `Dipping the ${flavor} cookie into the milk and savoring that sweet taste!`
      );
    }
  }

  const cookie = new Cookie('Chocolate Chip');
  new MilkDipper().dipCookie(cookie);
}

srpDemo();
