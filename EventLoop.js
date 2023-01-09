// Whenever the js start to execute the code it firstly create the "Global Execution Context" into the stack.
// Questions- What are--
// 1.Web APIs?
// 2.Event Loop?
// 3.Call Back Queue or Task Queue?
// 4.Call Stack?
// 5.fetch API?
// 6.Micro Task Queue?-> All the callbacks comes from Promises and Mutation Observer go inside micro task Queue.


/*Web APIs are- console,fetch(),settimeout,geolocation,DOM APIs, etc these are all access by the js through the global 
object called "window".
Call stack is the part of js engine used to execute the commands line by line if any events occurs that takes time it 
will not execute at that time and the time started until the time complete it will wait then this function goes inside 
the "call back queue" from where it goes inside the call stack after the emptied call stack through the help of "Event Loop"
and then it will execute.The main function of the "Event Loop" is took check everytime in the call stak and the call back queue.
But in this case fetch api works differently or all the call back function that are comes from the promises and mutation observer
goes inside the "micro task queue" instead of task queue or call back queue.Actually, the micro task queue is high priority 
queue.*/