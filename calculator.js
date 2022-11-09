class calculator{
    constructor(a,b=1){
    this.a=a;
    this.b=b;
    }
    add=()=>a+b;
    subtract=()=>a-b;
    divide=()=>a/b;
    multiply=()=>a*b;

}
module.exports = calculator;