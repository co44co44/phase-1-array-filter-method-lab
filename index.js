// Code your solution here
function findMatching (arrayOfDriverNames, driverWeAreLookingFor){
    return arrayOfDriverNames.filter ((driverName) => driverName.toLowerCase ().includes(driverWeAreLookingFor.toLowerCase()));
}

//const myArray =["Luis", "Luis","Cris", "Bob", "Sofia", "Tomas" ]

//console.log (findMatching(myArray, "LUis"))

function fuzzyMatch (arrayOfDriversNames, firstTwoLetters){
    return arrayOfDriversNames.filter ((driverName) => driverName.startsWith (firstTwoLetters));
}


//const myArray =["Luis", "Luis","Cris", "Bob", "Sofia", "Tomas" ]
//console.log (fuzzyMatch(myArray, "Lu"))

function matchName(arrayOfDriversObjects,matchString ){
    return arrayOfDriversObjects.filter ((driverName) => driverName.name  === matchString);
}
