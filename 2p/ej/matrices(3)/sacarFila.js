var array =    [ [ 0,  1,  2,  3,  4  ],
[ 5,  6,  7,  8,  9  ],
[ 10, 11, 12, 13, 14 ],
[ 15, 16, 17, 18, 19 ] ];

function deleteRow(arr, row) {
   arr = arr.slice(0);
   arr.splice(row - 1, 1);
   return arr;
}

console.log(deleteRow(array, 4));
