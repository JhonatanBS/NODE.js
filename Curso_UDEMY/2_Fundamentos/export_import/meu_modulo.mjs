function fatorial(x){
    if(x === 0)
    return;
    if(x === 1)
    return x;

    return x*fatorial(x-1);
}

export default fatorial;