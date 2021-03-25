Given:
let amount = 100;
let monday = [
   ['Write a tutorial', 180],
   ['Some web development', 120]
];
let tuesday = [
   ['Keep writing that tutorial', 240],
   ['Some more web development', 180],
    ['A whole lot of nothing', 240]
];
let tasks = [monday, tuesday];

For the tasks array, you need to execute the following chain of methods:
Convert time spent on tasks in hours instead of minutes.
Filter tasks that took two hours or more to complete.
Multiply the result by the hourly rate.

Output to html a table that consists of cells with filtered tasks in the form:
<tr>
   <td> Task name: Write a tutorial </td>
   <td> Taks duration: 3 hours </td>
   <td> Task amount: $ 300 </td>
</tr>