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

// function printReversePyramid(n) {
//   for (let row = n - 1; row >= 0; row--) {
//     let value = "";
//     for (let col = 0; col <= n; col++) {
//       if (row + col <= n) {
//         value = value + " ";
//       } else {
//         value = value + "*";
//       }
//     }
//     for (let col = 0; col <= n; col++) {
//       if (row >= col) {
//         value = value + "*";
//       } else {
//         value = value + " ";
//       }
//     }
//     console.log(value);
//   }
// }

// printReversePyramid(5);

// print star diamond pattern

// function printDiamond(n) {
//   for (let row = 0; row < n; row++) {
//     let value = "";
//     for (let col = 0; col <= n; col++) {
//       if (row + col <= n) {
//         value = value + " ";
//       } else {
//         value = value + "*";
//       }
//     }
//     for (let col = 0; col <= n; col++) {
//       if (row >= col) {
//         value = value + "*";
//       } else {
//         value = value + " ";
//       }
//     }
//     console.log(value);
//   }
//   for (let row = n - 1; row >= 0; row--) {
//     let value = "";
//     for (let col = 0; col <= n; col++) {
//       if (row + col <= n) {
//         value = value + " ";
//       } else {
//         value = value + "*";
//       }
//     }
//     for (let col = 0; col <= n; col++) {
//       if (row >= col) {
//         value = value + "*";
//       } else {
//         value = value + " ";
//       }
//     }
//     console.log(value);
//   }
// }

// printDiamond(5);

// Print Half star diamond pattern

// function printHalfDiamond(n) {
//   for (let row = 1; row <= n; row++) {
//     let value = "";
//     for (let col = 1; col <= n; col++) {
//       if (row <= col - 1) {
//         value = value + " ";
//       } else value = value + "*";
//     }
//     console.log(value);
//   }
//   for (let row = 1; row <= n - 1; row++) {
//     let value = "";
//     for (let col = n; col > 0; col--) {
//       if (row < col) {
//         value = value + "*";
//       } else value = value + " ";
//     }
//     console.log(value);
//   }
// }

// printHalfDiamond(5);

// print 0 1 triangle pattern

// function printTriangle(n) {
//   for (let row = 1; row <= n; row++) {
//     let value = "";
//     for (let col = 1; col <= row; col++) {
//       if ((row + col) % 2 === 0) {
//         value = value + "1";
//       } else value = value + "0";
//     }
//     console.log(value);
//   }
// }

// printTriangle(5);

//Number Crown Pattern

// function printNumberCrown(n) {
//   for (let row = 1; row < n; row++) {
//     let value = "";
//     for (let col = 1; col < n; col++) {
//       if (row >= col) {
//         value = value + col;
//       } else value = value + " ";
//     }
//     for (let col = n - 1; col > 0; col--) {
//       if (row >= col) {
//         value = value + col;
//       } else value = value + " ";
//     }
//     console.log(value);
//   }
// }
// printNumberCrown(6);

//  Increasing Number Triangle Pattern
// function printIncreasingNumberTriangle(n) {
//   let num = 1;
//   for (let row = 1; row <= n; row++) {
//     let value = "";
//     for (let col = 1; col <= n; col++) {
//       if (row >= col) {
//         value += num++ + " ";
//       } else value = value + " ";
//     }
//     console.log(value);
//   }
// }

// printIncreasingNumberTriangle(5);

//  Increasing Letter Triangle Pattern

function printLetterTriangle(n) {
  for (let row = 0; row < n; row++) {
    let value = "";
    for (let col = 0; col <= row; col++) {
      value = value + String.fromCharCode(65 + col);
    }
    console.log(value);
  }
}
printLetterTriangle(5);
