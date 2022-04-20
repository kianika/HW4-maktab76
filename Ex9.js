function protect_email(a){
    let e = a.split("@")[0];
    let l = e.length / 2;
    let s = e.slice(0,l);
    return s + "...@" + a.split("@")[1];
}


console.log(protect_email("robin_singh@example.com"));