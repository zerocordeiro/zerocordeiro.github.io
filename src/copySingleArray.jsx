function copySingleArray(array){
    let width=array.length;
    let newarray=[];
    for(let i=0;i<width;i++){
        newarray.push(array[i]);
    }
    return(newarray);
}
export {copySingleArray};