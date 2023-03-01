function fibonacci(n) {
    if (n < 0) {
      throw new Error("Input value must be non-negative");
    } else if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
console.log("Fibonacci",fibonacci(-1))


function getBalancedSubstrings(S) {
    const isBalanced = (substr) => {
      // check if substring is balanced
      const chars = new Set(substr);
      if (chars.size !== 2) {
        return false;
      }
      const [c1, c2] = chars;
      return substr.split(c1).length === substr.split(c2).length;
    };
    
    const substrings = [];
    for (let i = 0; i < S.length; i++) {
      for (let j = i+1; j <= S.length; j++) {
        substrings.push(S.substring(i, j));
      }
    }
    
    const balancedSubstrings = substrings.filter(isBalanced);
    console.log("balancedSubstrings",balancedSubstrings)

    let longestBalancedSubstrings = [];
    let maxLength = 0;
    for (const substring of balancedSubstrings) {
      const length = substring.length;
      if (length > maxLength) {
        longestBalancedSubstrings = [substring];
        maxLength = length;
      } else if (length === maxLength) {
        longestBalancedSubstrings.push(substring);
      }
    }
    console.log("longestBalancedSubstrings",longestBalancedSubstrings)
    return longestBalancedSubstrings;
  }
  getBalancedSubstrings('aaabbbcccdddeeefff')