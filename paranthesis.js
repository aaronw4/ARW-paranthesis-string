var longestValidParentheses = function(s) {
    let result = 0

    for (i = 0; i < s.length; i++) {
        let pointer = i
        let openParenthesis = 0
        let parenthesisArr = []
        let substringLength = 0

        if (s[i] === '(') {
            parenthesisArr.push('(')
            openParenthesis++
            pointer++  

            while (pointer < s.length) {
                if (s[pointer] === '(') {
                    parenthesisArr.push('(')
                    openParenthesis++
                    pointer++
                } else if (s[pointer] === ')' && openParenthesis === 1) {
                    substringLength = substringLength + 2 * parenthesisArr.length
                    parenthesisArr = []
                    openParenthesis--
                    pointer++
                } else if (s[pointer] === ')' && openParenthesis > 1) {
                    openParenthesis--
                    pointer++
                } else if (s[pointer] === ')' && openParenthesis === 0) {
                    i = pointer
                    break
                }                
            }
        }

        if (substringLength > result) {
            result = substringLength
        }
        console.log(i)
    }

    return result
};

console.log(longestValidParentheses(")()())()()("))