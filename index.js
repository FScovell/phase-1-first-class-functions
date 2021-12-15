function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction (){
    const fn = function(){
    }
    return fn;
}


function returnsAnAnonymousFunction(){
    return () => {};
}