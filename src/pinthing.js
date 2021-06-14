var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Shield #1
  var motor1 = new five.Motor({
    pins: { pwm: 8, dir: 9, cdir: 10 },
      address: 0x60,
    controller: 'PCA9685'
  })
  var motor2 = new five.Motor({
    pins: { pwm: 13, dir: 12, cdir: 11 },
      address: 0x60,
    controller: 'PCA9685'
  })
  var motor3 = new five.Motor({
    pins: { pwm: 2, dir: 3, cdir: 4 },
      address: 0x60,
    controller: 'PCA9685'
  })
  var motor4 = new five.Motor({
    pins: { pwm: 7, dir: 6, cdir: 5 },
      address: 0x60,
    controller: 'PCA9685'
  })
  // Shield #2
  var motor5 = new five.Motor({
    pins: { pwm: 8, dir: 9, cdir: 10 },
      address: 0x61,
    controller: 'PCA9685'
  })
  var motor6 = new five.Motor({
    pins: { pwm: 13, dir: 12, cdir: 11 },
      address: 0x61,
    controller: 'PCA9685'
  })
  var motor7 = new five.Motor({
    pins: { pwm: 2, dir: 3, cdir: 4 },
      address: 0x61,
    controller: 'PCA9685'
  })
  var motor8 = new five.Motor({
    pins: { pwm: 7, dir: 6, cdir: 5 },
      address: 0x61,
    controller: 'PCA9685'
  })
  // Shield #3
  var motor9 = new five.Motor({
    pins: { pwm: 8, dir: 9, cdir: 10 },
      address: 0x63,
    controller: 'PCA9685'
  })
  var motor10 = new five.Motor({
    pins: { pwm: 13, dir: 12, cdir: 11 },
      address: 0x63,
    controller: 'PCA9685'
  })
  var motor11 = new five.Motor({
    pins: { pwm: 2, dir: 3, cdir: 4 },
      address: 0x63,
    controller: 'PCA9685'
  })
  var motor12 = new five.Motor({
    pins: { pwm: 7, dir: 6, cdir: 5 },
      address: 0x63,
    controller: 'PCA9685'
  })  
  // Shield #4
  var motor13 = new five.Motor({
    pins: { pwm: 8, dir: 9, cdir: 10 },
      address: 0x62,
    controller: 'PCA9685'
  })
  var motor14 = new five.Motor({
    pins: { pwm: 13, dir: 12, cdir: 11 },
      address: 0x62,
    controller: 'PCA9685'
  })
  var motor15 = new five.Motor({
    pins: { pwm: 2, dir: 3, cdir: 4 },
      address: 0x62,
    controller: 'PCA9685'
  })  
  
  var sayHi = function() {
    // H
    motor1.fwd(); setTimeout(function() { motor1.stop() }, 130)
    motor2.fwd(); setTimeout(function() { motor2.stop() }, 130)  
    motor3.fwd(); setTimeout(function() { motor3.stop() }, 130)      
    motor5.fwd(); setTimeout(function() { motor5.stop() }, 130) 
    motor7.fwd(); setTimeout(function() { motor7.stop() }, 140)    
    motor8.fwd(); setTimeout(function() { motor8.stop() }, 140)   
    motor9.fwd(); setTimeout(function() { motor9.stop() }, 140)    
    
    // I
    motor13.fwd(); setTimeout(function() { motor13.stop() }, 180)    
    motor14.fwd(); setTimeout(function() { motor14.stop() }, 180)   
    motor15.fwd(); setTimeout(function() { motor15.stop() }, 180)                  
  }
  
  var allDown = function() {
    motor1.rev(); setTimeout(function() { motor1.stop() }, 120)
    motor2.rev(); setTimeout(function() { motor2.stop() }, 120)  
    motor3.rev(); setTimeout(function() { motor3.stop() }, 120) 
    motor4.rev(); setTimeout(function() { motor4.stop() }, 120)    
    motor5.rev(); setTimeout(function() { motor5.stop() }, 120) 
    motor6.rev(); setTimeout(function() { motor6.stop() }, 120)   
    motor7.rev(); setTimeout(function() { motor7.stop() }, 120)    
    motor8.rev(); setTimeout(function() { motor8.stop() }, 120)   
    motor9.rev(); setTimeout(function() { motor9.stop() }, 120) 
    motor10.rev(); setTimeout(function() { motor10.stop() }, 120)   
    motor11.rev(); setTimeout(function() { motor11.stop() }, 120)     
    motor12.rev(); setTimeout(function() { motor12.stop() }, 120)         
    motor13.rev(); setTimeout(function() { motor13.stop() }, 160)    
    motor14.rev(); setTimeout(function() { motor14.stop() }, 160)   
    motor15.rev(); setTimeout(function() { motor15.stop() }, 160)                 
  }
  
  var allUp = function() {
    motor1.fwd(); setTimeout(function() { motor1.stop() }, 100)
    motor2.fwd(); setTimeout(function() { motor2.stop() }, 100)  
    motor3.fwd(); setTimeout(function() { motor3.stop() }, 100) 
    motor4.fwd(); setTimeout(function() { motor4.stop() }, 100)    
    motor5.fwd(); setTimeout(function() { motor5.stop() }, 100) 
    motor6.fwd(); setTimeout(function() { motor6.stop() }, 100)   
    motor7.fwd(); setTimeout(function() { motor7.stop() }, 100)    
    motor8.fwd(); setTimeout(function() { motor8.stop() }, 100)   
    motor9.fwd(); setTimeout(function() { motor9.stop() }, 100) 
    motor10.fwd(); setTimeout(function() { motor10.stop() }, 100)   
    motor11.fwd(); setTimeout(function() { motor11.stop() }, 100)     
    motor12.fwd(); setTimeout(function() { motor12.stop() }, 100)         
    motor13.fwd(); setTimeout(function() { motor13.stop() }, 100)    
    motor14.fwd(); setTimeout(function() { motor14.stop() }, 100)   
    motor15.fwd(); setTimeout(function() { motor15.stop() }, 100)                 
  }  
  

  var allFwd = function() {
    motor1.fwd()
    motor2.fwd()
    motor3.fwd()
    motor4.fwd()
    motor5.fwd()
    motor6.fwd()
    motor7.fwd()
    motor8.fwd()
    motor9.fwd()
    motor10.fwd()
    motor11.fwd()
    motor12.fwd()
    motor13.fwd()
    motor14.fwd()
    motor15.fwd()          
  }

  var allStop = function() {
    motor1.stop()
    motor2.stop()
    motor3.stop()
    motor4.stop()
    motor5.stop()
    motor6.stop()
    motor7.stop()
    motor8.stop()
    motor9.stop()
    motor10.stop()
    motor11.stop()
    motor12.stop() 
    motor13.stop()
    motor14.stop()
    motor15.stop()         
  }

  this.repl.inject({
    m1: motor1,
    m2: motor2,
    m3: motor3,
    m4: motor4,
    m5: motor5,
    m6: motor6,
    m7: motor7,
    m8: motor8,
    m9: motor9,
    m10: motor10,
    m11: motor11,
    m12: motor12,  
    m13: motor13,
    m14: motor14,
    m15: motor15,                       
    allFwd: allFwd,
    allStop: allStop,
    allUp: allUp,
    allDown: allDown,
    sayHi: sayHi
  })
  


})