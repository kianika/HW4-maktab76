function month_name(a){

    let m = a.getMonth();
    const month =  ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"]
    return  month[m];
}

console.log(month_name(new Date("10/11/2009")));