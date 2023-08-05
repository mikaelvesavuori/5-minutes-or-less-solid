/**
 * **Interface Segregation Principle**
 *
 * Use interfaces (or similar constructs) to separate the
 * logic and functionality of code to better express it
 * as clean divisions. This way, classes (etc.) can use and
 * know about only what they need.
 *
 * In the example we'll use interfaces to express different
 * performance talents. We'll set up a dancer as well as a
 * multi-talented performer. Technically, giving them different
 * sets of skills is merely a matter of implementing one or more
 * interfaces.
 *
 * The counter-point to this specific tactic is that it inheritance
 * can go overboard.
 *
 * Joe Armstrong, creator of Erlang, famously stated his opinion that,
 *
 * > [...] The problem with object-oriented languages is they’ve got all
 * this implicit environment that they carry around with them.
 * You wanted a banana but what you got was a gorilla holding
 * the banana and the entire jungle.
 *
 * It can also lead to lead cohesion of the code, if interfaces and
 * implementations are only ever single-method oriented.
 *
 * Used reasonably and with attention to evolution pains, however, and
 * this is an indispensible part of object-oriented programming.
 *
 * @see https://en.wikipedia.org/wiki/Interface_segregation_principle
 */
function ispDemo() {
  interface Dancer {
    dance(): void;
  }

  interface Juggler {
    juggle(): void;
  }

  interface Singer {
    sing(): void;
  }

  class SimpleDancer implements Dancer {
    dance(): void {
      console.log('Just a plain simple dancer dancing...');
    }
  }

  class MultitalentedPerformer implements Dancer, Juggler, Singer {
    dance(): void {
      console.log("Can't compete with my dancing skillz!");
    }

    juggle(): void {
      console.log("Can't compete with my juggling skillz!");
    }

    sing(): void {
      console.log("Can't compete with my singing skillz!");
    }
  }

  const dancer = new SimpleDancer();
  dancer.dance();

  const performer = new MultitalentedPerformer();
  performer.juggle();
}

ispDemo();
