const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

var totalBatteries = batteryBatches.reduce(function(currentTotal, number){
    return currentTotal + number
})

// Code your solution here
