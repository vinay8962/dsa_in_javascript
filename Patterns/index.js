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

// Star Triangle Pattern

// function printTriangle(n) {
//   for (let i = 0; i < n; i++) {
//     let row = " ";
//     for (let j = 0; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }

// printTriangle(5); // Example usage

// Number Triangle Pattern

// function printNumberTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = " ";

//     for (let j = 1; j <= i; j++) {
//       // row = row + j;
//       row = row + i;
//     }
//     console.log(row);
//   }
// }

// printNumberTriangle(5); // Example usage

// Print Star Reverse Triangle Pattern

// function printReverseTriangle(n) {
//   for (let i = n; i > 0; i--) {
//     let row = " ";
//     for (let j = 0; j < i; j++) {
//       row = row + "*";
//     }
//     console.log(row);
//   }
// }

// printReverseTriangle(5); // Example usage

// Print Number Reverse Triangle Pattern

// function printNumberReverseTriangle(n) {
//   for (let i = n; i > 0; i--) {
//     let row = " ";
//     for (let j = 1; j <= i; j++) {
//       row = row + j;
//     }
//     console.log(row);
//   }
// }

// printNumberReverseTriangle(5);

// Print Star Pyramid Pattern

// function printPyramid(n) {
//   for (let row = 1; row <= n; row++) {
//     let str = " ";
//     for (let col = 1; col <= n; col++) {
//       if (row + col <= n) {
//         str = str + " ";
//       } else str = str + "*";
//     }
//     for (let col = 1; col <= n; col++) {
//       if (row <= col) {
//         str = str + " ";
//       } else str = str + "*";
//     }
//     console.log(str);
//   }
// }
// printPyramid(5);

//  Print Star Reverse Pyramid Pattern

function printReversePyramid(n) {
  for (let row = 1; row <= n; row++) {
    let value = "";

    for (let col = 1; col <= 2 * n - 1; col++) {
      // Check if the position should have a star or a space
      if (col >= row && col <= 2 * n - row) {
        value += "*";
      } else {
        value += " ";
      }
    }

    console.log(value);
  }
}

printReversePyramid(5);
