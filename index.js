function receivesAFunction(chai,spy){
    return chai(spy);
}
receivesAFunction("Bond", function (chai) {return "Hello Mr." + chai})

function returnsANamedFunction(){
   return receivesAFunction(function () {return receivesAFunction })

}

function returnsAnAnonymousFunction(){
    return function (){return 1+1}
}
