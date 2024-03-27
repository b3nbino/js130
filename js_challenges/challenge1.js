class Triangle {
  static isValidTriangle(sidesArr) {
    if (!sidesArr.some((side) => side > 0)) {
      throw new Error("Expected all sides to be greater than 1");
    } else if (sidesArr[0] + sidesArr[1] <= sidesArr[2]) {
      throw new Error("Expected smaller sides to be greater than hypotenuse");
    }
    return true;
  }

  constructor(...sides) {
    sides.sort((a, b) => a - b);
    if (Triangle.isValidTriangle(sides)) {
      this.sides = sides;
    }
  }

  kind() {
    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
      return "equilateral";
    } else if (
      this.sides[0] === this.sides[1] ||
      this.sides[1] === this.sides[2]
    ) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}

let tri = new Triangle(3, 4, 2);
console.log(tri.sides);

module.exports = Triangle;
