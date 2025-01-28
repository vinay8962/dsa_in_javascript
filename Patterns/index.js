// Square Pattern

// function printSquarePattern(size) {
//   for (let i = 0; i < size; i++) {
//     let row = "";
//     for (let j = 0; j < size; j++) {
//       //   row += "* ";
//       //   row += i + " ";
//     }
//     console.log(row);
//   }
// }

// printSquarePattern(5); // Example usage

// Triangle Pattern

function printTrianglePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

printTrianglePattern(5); // Example usage
