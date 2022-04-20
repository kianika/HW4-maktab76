/* console.log(merge_array(array1, array2));
[3, 2, 30, 1] */

function merge(a, b){
    let c = a.concat(b);
    console.log(c);
    let r = [];
    c.forEach(e => { 
        if( !r.includes(e)){
            r.push(e);
        }
    });
    return r;
    }
    
    console.log(merge([1, 2, 3], [2, 30, 1]));