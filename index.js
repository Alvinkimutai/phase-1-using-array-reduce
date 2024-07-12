const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function(accumulator,element){
    let sum =[];
    sum+=element + accumulator; 
    return parseInt(sum);
},0);

console.log(totalBatteries);
