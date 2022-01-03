import Laptop from "./2-BaseLaptop";

class Asus<T> extends Laptop<T> {
  constructor(type: T, numeric: boolean, touchButton: boolean) {
    super("Asus", type, numeric, touchButton);
  }
}
export default Asus;
