function sumRound(arr){
    let value = arr.reduce(function(sum, x){
        return (sum + Math.round(x));
    }, 0);
    return value;
}


console.log(sumRound([15.5, 2.3, 1.1, 4.7]));