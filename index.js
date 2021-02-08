// Map-like Functions
function mapToNegativize(sourceArray){
   return sourceArray.map(num => num * -1)
}

function mapToNoChange(sourceArray){
    return sourceArray.map(num => num)
}

function mapToDouble(sourceArray){
    return sourceArray.map(num => num * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(num => num * num)
}

// Reduce-like functions

function reduceToTotal(sourceArray, startingPoint=0){
    return sourceArray.reduce(function(total, item){ return total + item },startingPoint)
}


function reduceToAllTrue(sourceArray){
    return sourceArray.reduce(function(total, item){ return total = true })
}

function reduceToAnyTrue(sourceArray){

}
