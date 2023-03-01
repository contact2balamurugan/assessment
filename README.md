1.Install necessary softwares Node.js v16.17.0, NPM 8.15.0
2.Open the specific file in any code editor like vscode, sublime , gitpod
3.Run the file using node <fileName.js> in terminal
 
 
Fibonnacci algorithm:
The function first checks whether the input value n is non-negative, and throws an error with the message "Input value must be non-negative" if it is negative. This is to enforce the requirement that the input value must be non-negative, since the Fibonacci sequence is only defined for non-negative integers.
If n is equal to 0 or 1, the function returns the corresponding Fibonacci value (0 or 1, respectively). Otherwise, the function recursively calls itself with n - 1 and n - 2 as arguments, and adds the results together to obtain the Fibonacci value at position n in the sequence.


Program 2:

The function first defines an inner function isBalanced that takes a substring substr as input and checks if it is balanced. It does this by creating a set of the characters in the substring and checking if the size of the set is 2 (i.e., if there are exactly 2 distinct characters in the substring). If there are not 2 distinct characters, the substring is not balanced and false is returned. Otherwise, the function splits the substring by each of the distinct characters and checks if the resulting arrays have the same length. If they do, the substring is balanced and true is returned.

The function then creates an array substrings of all possible non-empty substrings of S by looping over all pairs of indices (i, j) such that 0 <= i < j <= S.length. It uses the substring method to extract the substring between i and j and adds it to the substrings array.

Next, the function filters the substrings array to include only those substrings that are balanced, using the isBalanced function defined earlier. The resulting array is stored in balancedSubstrings.

The function then initializes an empty array longestBalancedSubstrings and a maximum length maxLength to 0. It loops over each substring in balancedSubstrings and checks if its length is greater than maxLength. If it is, longestBalancedSubstrings is set to an array containing only that substring and maxLength is set to its length. If the substring length is equal to maxLength, the substring is added to longestBalancedSubstrings.

Finally, the function returns longestBalancedSubstrings, which contains the longest balanced substrings of S. The function also logs the arrays balancedSubstrings and longestBalancedSubstrings to the console.
