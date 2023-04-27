# Part 2

## Answers

1. `3` will be printed because `i` is declared as a function-scope variable using `var`; it is accessible after the for block in the function and the last iteration of the for loop happens when `i` is `2`, the loop guards kills the for loop when `i` gets incremented to `3`
2. `150` will be printed because `discountedPrice` is declared as a function-scope variable using `var`; it is accessible after the for block in the function, and the time time it gets assigned with a value is when `i` is `2`, `prices[i]` is `300`. Half of `300` is `150`
3. `150` will be printed because `finalPrice` is declared as a function-scope variable using `var`; it is accessible after the for block in the function, and the time time it gets assigned with a value is when `i` is `2`, `prices[i]` is `300`, which gives `discountedPrice` a value `150`. Then calculation on `finalPrice` basically rounds the decimal places to two places, but since we have an integer result, its value is `150`
4. The function returns a list with value `[50, 100, 150]`, which is half the value of the input list `[100, 200, 300]` since the discount is `0.5`
5. `ReferenceError` is thrown becuase `i` is a block-scope variable; it is not accessible after the for loop
6. `ReferenceError` is thrown because `discountedPrice` is declared as a block-scope variable; it is not accessible after the for loop
7. `150` is printed since `finalPrice` is a block-scope variable declared in the function block, so it is accessible within the function block
8. The function returns `[50, 100, 150]` since the discount is half the input price `[100, 200, 300]`. Also, since all variables are accessible when needed, no error is thrown
9. `ReferenceError` is thrown, since `i` is declared as a block-scope variable; it is not accessible after the for loop
10. `3` is printed, since `length` is a constant initialized with the length of input list `prices`, which in this case has length `3`
11. The function returns `[50, 100, 150]`, since the discount is half the input price `[100, 200, 300]`. Also, since all variables are accessible when needed, no error is thrown
12. Object notations
    1. `student.name`
    2. `student["Grad Year"]`
    3. `student.greeting()`
    4. `student["Favorite Teacher"].name`
    5. `student.courseLoad[0]`
13. Arithmetic
    1. `'32'` since `'3'` is a string, the operator does concatenation instead of "plus" 
    2. `1` since `-` is only defined among numbers, `'3'` gets converted to number implicitly
    3. `3` since `null` has number value of `0`
    4. `'3null'` since `null` gets converted to its string representation due to the string `'3'` and the "concat operator" `+`
    5. `4` since `true` gets mapped to its number representation which has value of `1`
    6. `0` since both `false` has `null` have value of `0` for their number representation
    7. `'3undefined'` since `'3'` is a string and "concat operator is used", `undefined` gets converted to its string representation 
    8. `NaN` since `'3'` has number value `3` and `undefined` has number value `NaN`
14. Comparison
    1. `true` since `'2'` gets converted to number and compared
    2. `false` since both operands are strings, and each character is compared one by one: `'2'` is greater than `'1'`
    3. `true` since `'2'` gets converted to number and compared
    4. `false` since they have different types
    5. `false` since `true` gets converted to number which is `1`
    6. `true` since explicitly converting `2` to boolean will give `true`
15. `==` compares value solely, and if values have different types, they will be converted to their number representations. On the other hand, `===` first check if types match, then check if values match.
16. Refer to `part2-question16.js`
17. The result is `[2, 4, 6]`. The function `modifyArray` is called with arguments `[1, 2, 3]` and `doSomething`. The function `doSomething` basically doubles any input number. Now, the function will iterate all elements in the input array, and pass the value to `doSomething` and store the result in `newArr`. Thus, it just doubles every element in the input array and return the result in a new array.
18. Refer to `part2-question18.js`
19. The result is:
    ```text
    1
    4
    3
    2
    ```
