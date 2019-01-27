

function produceDrivingRange(range) {
  return function(first, last) {
    let start = parseInt(first)
    let end = parseInt(last)
    let distance = Math.abs(end - start)
    let difference = (range - distance)
    
    if(difference > 0) {
      return `within range by ${Math.abs(difference)}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }

  }
}

function produceTipCalculator(percent) {
  return function(amount) {
    return percent * amount
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}