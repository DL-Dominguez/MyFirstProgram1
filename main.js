var MyFirstProgram1 = /** @class */ (function () {
    function MyFirstProgram1() {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
    }
    MyFirstProgram1.prototype.PrintArgs = function (argArray) {
        console.log(argArray);
    };
    MyFirstProgram1.prototype.runFirst = function (callback) {
        console.log('this method runs first!');
    };
    MyFirstProgram1.prototype.runLast = function () {
        console.log('this method runs last!');
    };
    return MyFirstProgram1;
}());
var newInstance = new MyfirstProgram1("a", "b", "c");
