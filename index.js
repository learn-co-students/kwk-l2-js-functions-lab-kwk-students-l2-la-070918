// calculate absolute value of distance (blocks) from HQ
function distanceFromHqInBlocks(someValue){
  var distance = Math.abs (someValue - 42)
  return distance
}

// calculate absolute value of distance (feet) from HQ 
function distanceFromHqInFeet(secondValue){
  var distance = Math.abs ( (secondValue - 42)*264)
  return distance
}

function distanceTravelledInFeet(start, end){
var distance = Math.abs( (start - end) *264 )
return distance
}

function calculatesFarePrice(start, destination){
  var distance = Math.abs( (start - destination)*264)
  if (distance <= 400 ) {
    return 0
  }
  else if (distance > 400 && distance < 2000){
    var price= ((distance - 400) * 0.02 )
    return price
  }
  else if  (distance >2000 && distance < 2500){
    return 25
  }
  else {
    return ('cannot travel that far')
  }
}