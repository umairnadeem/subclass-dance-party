// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  

  makeDancer.prototype.step.call(this,timeBetweenSteps);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
// $(function() {
//   $( ".dancer" ).on('click',function(event) {
//       $( ".dancer" ).append( "<div class='quote'>Whatever it takes!</div>" );
//       console.log('sdfsdf');
//     });
// })
  

  // return dancer;
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


// extend makeDancer prototype with a method of assemble
// set top and left to 0
// add display: block property

makeDancer.prototype.assemble = function(top){
  var styleSettings = {
    top: top,
    left: 0,
    display: 'block'
  };
  this.$node.css(styleSettings);
}

makeDancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // debugger;
  var savedFunction = this.step.bind(this);
  setTimeout(savedFunction, timeBetweenSteps);
};


  
