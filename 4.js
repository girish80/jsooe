class Circle{
    constructor (radius){
        this.radius = radius;
    }
    calculateArea (){
        return Math.PI*this.radius*this.radius;
    }
    calculatPerimeter (){
        return 2*Math.PI*this.radius;
    }
}

class Rectangle {
    constructor (length, width){
        this.length= length;
        this.width = width;
    }
    calculateArea (){
        return this.length*this.width
    }
    calculatPerimeter(){
        return 2*(this.length+this.width)
    }
} 

class Triangle{
    constructor(side1,side2,side3){
        this.side1= side1;
        this.side2= side2;
        this.side3= side3;
    }
    calculateArea (){
        const s = (this.side1+this.side2+this.side3)/2
        return Math.sqrt(s*(s-this.side1)*(s-this.side2)*(s-this.side3))
    }
    calculatPerimeter(){
        return this.side1+this.side2+this.side3
    }
}
const circle = new Circle(5)
console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatPerimeter()}`);

const rectangle = new Rectangle(4,6)
console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatPerimeter()}`);

const triangle = new Triangle(8,6,5)
console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatPerimeter()}`);

