function toUppercase(str){
    let s = str.split(" ");
     
     let result = s.map(x => {
        return x.charAt(0).toUpperCase() + x.substring(1);
    });

    return result.join(" ");
    
}


console.log(toUppercase('the quick brown fox'));