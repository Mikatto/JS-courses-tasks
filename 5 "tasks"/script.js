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

// Для массива tasks необходимо выполнить следующую цепочку методов:

let steps = tasks.map(function (days) {

    return days.map(function (taskMap) {
        return [taskMap[0], taskMap[1] /= 60] ;

    }).filter(function (taskFilter) {
        return taskFilter[1] >= 2;

    }).map(function (task) {
        return [task[0],task[1],task[1] *= amount]
    })

}).forEach(function (days) {
    days.forEach(function (tasks) {
    
        document.write(
        `
        <div class=task_border>
            <div class=taskinfo>
                <div class=title>Task name:</div>
                <div class=flex>${tasks[0]}</div>
            </div>
            <div class=taskinfo>
                <div class=title>Taks duration:</div>
                <div class=flex>${tasks[1]} hours</div>
            </div>
            <div class=taskinfo>
                <div class=title>Task amount:</div>
                <div class=flex>$${tasks[2]}</div>
            </div>
        </div>
        `
        )
    })
})

