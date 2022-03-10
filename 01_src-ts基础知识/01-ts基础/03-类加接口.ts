interface IFunc {
  getName: () => string;
  getAge: () => number;
}

class A implements IFunc {
  fnA1() {}
  fuA2() {}
  getName() {
    return "aaaa";
  }
  getAge() {
    return 1;
  }
}

class B implements IFunc {
  fnB1() {}
  fuB2() {}
  getName() {
    return "bbbbb";
  }
  getAge() {
    return 1;
  }
}

function init(obj: IFunc) {
  obj.getName();
  obj.getAge()
}
let objA = new A();
let objB = new B();

init(objA);
init(objB);
export default {};
