/* 6 kyu
Bob is preparing to pass IQ test. 
The most frequent task in this test is to find out which one of the given numbers differs from the others. 
Bob observed that one number usually differs from the others in evenness. 
Help Bob — to check his answers, he needs a program 
that among the given numbers finds one that is different in evenness, and return a position of this number.
! Keep in mind that your task is to help Bob solve a real IQ test, 
which means indexes of the elements start from 1 (not 0)
*/
function iqTest(nums) {
  let odd = 0;
  let even = 0;
  let positionOdd = 0;
  let positionEven = 0;
  let arr = nums.split(" ");

  for (i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd++;
      if (odd === 1) {
        positionOdd = i + 1;
      }
    } else if (arr[i] % 2 === 0) {
      even++;
      if (even === 1) {
        positionEven = i + 1;
      }
    }
  }
  return even == 1 ? positionEven : positionOdd;
}
