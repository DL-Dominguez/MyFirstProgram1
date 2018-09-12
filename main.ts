class MyFirstProgram1 {

    constructor(...argArray: Array<any>) {

    }
    PrintArgs(argArray) {
        console.log(argArray);
    }
    runFirst(callback: Function) {
        console.log('this method runs first!');
    }
    runLast() {
        console.log('this method runs last!');
    }
}
const newInstance = new MyfirstProgram1("a","b","c");

