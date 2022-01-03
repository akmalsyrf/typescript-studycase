import InterfaceLaptop from "./1-InterfaceLaptop";
import * as Keyboard from "./3-Keyboard";

abstract class BaseLaptop<T> implements InterfaceLaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(name: string, type: T, numeric: boolean, touchButton: boolean) {
    this.name = name;
    this.type = type;
    this.withNumeric = numeric;
    this.withTouchButton = touchButton;
  }
  a() {
    return Keyboard.a();
  }
  b() {
    return Keyboard.b();
  }
}

export default BaseLaptop;
