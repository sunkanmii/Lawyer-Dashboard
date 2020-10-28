/**
 * Closed cases graph object
 * @type {Object}
 * @property {String} label - label name (it's closed cases for this instance)
 * @property {(Number|Array)} data - Accepts an array of numbers (but can be of strings as well)
 * @property {String} backgroundColor - Background color of line
 * @property {String} borderWidth - Width of the line and the points
 */
let closedCasesObj = {
    label: 'closed cases',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: 'transparent',
    borderColor: 'red',
    borderWidth: 2,
}
/**
 * Active cases graph object
 * @type {Object}
 * @property {String} label - label name (it's active cases for this instance)
 * @property {(Number|Array)} data - Accepts an array of numbers (but can be of strings as well)
 * @property {String} backgroundColor - Background color of line
 * @property {String} borderWidth - Width of the line and the points
 */

let activeCasesObj = {
    label: 'active cases',
    data: [24, 10, 23, 15, 22, 13],
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'dodgerblue'
}

/**
 * New cases graph object
 * @type {Object}
 * @property {String} label - label name (it's new cases for this instance)
 * @property {(Number|Array)} data - Accepts an array of numbers (but can be of strings as well)
 * @property {String} backgroundColor - Background color of line
 * @property {String} borderWidth - Width of the line and the points
 */
let newCasesObj = {
    label: 'new cases',
    data: [12, 15, 14, 12, 10, 2],
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'gold'
}

/**
 * Allows CSS to load for secure sites
 * @type {Boolean} 
 */
Chart.platform.disableCSSInjection = true;

/**
 * canvas element on the DOM
 * @type {Window}
 */
const ctx = document.getElementById('myChart');

/**
 * This renders the canvas element on the DOM based on closed, active, 
 * and new cases. If you want to create a new graph, call this function 
 * and pass in the array parameters
 * @param {Array} closedCasesArr - Number of closed cases per day 
 * @param {Array} activeCasesArr - Number of active cases per day
 * @param {Array} newCasesArr - Number of new cases per day
 */

const casesFunc = (closedCasesArr, activeCasesArr, newCasesArr) => {
    closedCasesObjDuplicate = closedCasesObj;
    activeCasesObjDuplicate = activeCasesObj;
    newCasesObjDuplicate = newCasesObj;

    closedCasesObjDuplicate.data = closedCasesArr;
    activeCasesObjDuplicate.data = activeCasesArr;
    newCasesObjDuplicate.data = newCasesArr;

    let allCases = [closedCasesObjDuplicate, activeCasesObjDuplicate, newCasesObjDuplicate];

    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
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
}

/**
 * Renders the first month graph of cases
 */
let allCases = casesFunc([12, 19, 3, 5, 2, 3], [24, 10, 23, 15, 22, 13], [12, 15, 14, 12, 10, 2]);

/**
 * Retrieves first button (this month) named with title class
 */
const title = document.querySelector(".title");

/**
 * Retrieves the dropdown section
 */
const dropdown = document.querySelector(".dropdown");
/**
 * Retrieves all the options available
 */
const options = document.querySelectorAll(".option");

/**
 * Hides and displays dropdown when clicked
 */
title.addEventListener('click', () => {
    if (dropdown.classList.contains('hide')) {
        dropdown.classList.remove('hide');
    } else {
        dropdown.classList.add('hide');
    }
})

/**
 * Close the dropdown if the user clicks anywhere outside of it
 * @param {object} event 
 */
window.onclick = function (event) {
    if (!event.target.matches('.title')) {
        if (dropdown.classList.contains('hide') === false) {
            dropdown.classList.add('hide');
        }
    }
}

/**
 * Returns a random number from two specific values
 * @param {Number} min - minimum number to be randomly generated (inclusive)
 * @param {Number} max - maximum number to be randomly generated (exclusive)
 * @returns {Number} - Random number from min - max (the max is excluded)
 */
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Loops through the month options and generates a random data set
 * when the month is selected.
 */
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', () => {
        title.textContent = options[i].textContent;
        let temp = [];
        let multi = [];
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 14; k++) {
                temp.push(getRandomInt(3, 10));
            }
            multi.push(temp);
            temp = [];
        }

        if (i != 6) {
            allCases = casesFunc(multi[0], multi[1], multi[2]);
        } else {
            allCases = casesFunc([12, 19, 3, 5, 2, 3, 15, 11, 10], [24, 10, 23, 15, 22, 13, 13, 16, 12], [12, 15, 14, 12, 10, 2, 16, 5, 10]);
        }
    })
}