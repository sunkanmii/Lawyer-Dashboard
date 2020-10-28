// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: '',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });

// var myLineChart = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: options
// });

let closedCasesObj = {
    label: 'closed cases',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: 'transparent',
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 2,
}

let activeCasesObj = {
    label: 'active cases',
    data: [24, 10, 23, 15, 22, 13],
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'dodgerblue',
    pointerBorderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ]
}
let newCasesObj = {
    label: 'new cases',
    data: [12, 15, 14, 12, 10, 2],
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'gold'
}



Chart.platform.disableCSSInjection = true;


let casesFunc = (closedCasesArr, activeCasesArr, newCasesArr) => {
    closedCasesObjDuplicate = closedCasesObj;
    activeCasesObjDuplicate = activeCasesObj;
    newCasesObjDuplicate = newCasesObj;
    
    closedCasesObjDuplicate.data = closedCasesArr;
    activeCasesObjDuplicate.data = activeCasesArr;
    newCasesObjDuplicate.data = newCasesArr;
    
    let allCases = [closedCasesObjDuplicate, activeCasesObjDuplicate, newCasesObjDuplicate];
    
    return allCases;
}

let allCases = casesFunc([12, 19, 3, 5, 2, 3], [24, 10, 23, 15, 22, 13], [12, 15, 14, 12, 10, 2]);

let ctx = document.getElementById('myChart');

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        datasets: allCases
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
