function remove_first_occurrence(a, b){
    let array = a.split(" ");
    let firstIndex = array.indexOf(b);
    let removedOne = array.splice(firstIndex, 1);
    return array.join(" ");
    }
    
    console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));