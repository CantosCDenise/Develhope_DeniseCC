class AreaCalculator{
    static calculate(val){
        let result;
        if(val === square){
            result = "Square area: " + val.side * val.side;
        }else if(val === rectangle){
            result = "Rectangle area: " + val.width * val.height;
        }else if(val === circle){
            result = "Circle area: " + 2 * Math.PI * val.radius;
        }
    return result;
    }
}

class Square {
    constructor(side) {
      this.side = side;
    }
  }
  
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  }
  
  const square = new Square(4);
  const rectangle = new Rectangle(4, 2);
  const circle = new Circle(5);
  
  console.log(AreaCalculator.calculate(square));
  console.log(AreaCalculator.calculate(rectangle));
  console.log(AreaCalculator.calculate(circle));