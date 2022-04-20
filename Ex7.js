function curday(n){

    let d = new Date();
    let dDay = d.getDate();
    let dMonth = d.getMonth() + 1;
    let dYear = d.getFullYear();
    
    return dMonth + n + dDay + n + dYear;
    }
    
    console.log(curday("-"));