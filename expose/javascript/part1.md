# Part 1

## Answers

1. `20` is printed
2. `20` is printed
3. `20` is printed
4. `ReferenceError` is thrown since variable `result` is not defined. This is because `let` has block scope, the variable `result` in only accessible in the block where it is declared: the if statement block
5. `TypeError` is thrown since `result` is declared with `const` meaning it is a constant, the value cannot be changed after declaration
6. This line is not executed, since the at line 9 the program has already exited
