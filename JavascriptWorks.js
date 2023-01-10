/*Everything in javascript happens inside an "execution context". 
Two Components of EC->
1.Memory or variable environment
2.Code Component or thread of execution.
---------------------------------------
Javascript is a "synchronous Single threaded" Language.
---------------------------------------

What happens when you run Javascript code?
EC is created in two phases->
1.Creation Phase or Memory creation phase.
In the first phase every variable get the memory with the value "undefined" as we know that in memory all the things stored 
in key:value manner but the function have the value which is code which is written in the function.

2.Code Execution Phase->
Values are being allocated here to all the variable correspondingly. When we invoke the function the new Execution context 
is created again it has two component that are memory and code.
"return" keyword in the function states that now return the control of the program to the place where function was invoked.
the whole new ec which was generated now it will be deleted as the return statement execute.
When the whole code is executed the global ec is also deletes off.


Call stack is used for managing the execution context.
Call Stack maintains the "order of execution" of execution contexts.
call stack is also known as-
1.Execution Context Stack.
2.Program Stack.
3.Control Stack.
4.Runtime Stack.
5.Machine Stack.
*/