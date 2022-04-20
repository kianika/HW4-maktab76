function rem(arr){
    let a = ["null", "0", '""',
    "false", "undefined", "NaN"];
    let s = [];
 console.log(arr.filter(x =>  !a.includes(x)));
  
}

rem(["null", "a", "b", '""']);