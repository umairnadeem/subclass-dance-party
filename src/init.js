

$(document).ready(function() {
  window.dancers = [];
  
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var characters = ["url(image/01-ironman.svg)","url(image/02-thor.svg)","url(image/03-hulk.svg)","url(image/04-captain.svg)","url(image/05-hawk.svg)","url(image/06-black.svg)"];                
    var rand = Math.floor(Math.random()*characters.length);  
    
    console.log(window[dancerMakerFunctionName]);
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() - 50,
      $(".left").width() * Math.random(),
      Math.random() * 1000
    );
    dancer.$node.css("background", characters[rand]);
    $('section.left').append(dancer.$node);
    window.dancers.push(dancer);
  });
    
  $('.assemble').on('click', function(event){
    var counter = 10;
    window.dancers.forEach(function(each){
      each.assemble(counter);
      counter += 50;
    })
  });
  
  


  $('.interact').on('click', function(event){

    var arr1 = [];

    for (var x = 0; x < window.dancers.length - 1; x++) {
      var arr2 = [];
      for (var y = x + 1; y < window.dancers.length; y++) {
        var distance = Math.sqrt(Math.pow(window.dancers[x].top - window.dancers[y].top, 2) + Math.pow(window.dancers[x].left - window.dancers[y].left, 2));
        arr2.push(distance);
      }
      arr1.push(arr2);
    }
    
    //For each element in our nested array (containing neighbor distances)
    arr1.forEach(function(each){
      // get the closest neighbor
      var smallest = Math.min(...each);
      
      //for each element in the dancers array
      for (var i = 0; i < window.dancers.length - 1; i++) {
        //get the index of the closest neighbor
        var index = arr1[i].indexOf(smallest) + i;
        if (window.dancers[index]) {
          window.dancers[i].$node.css({
          top: window.dancers[index].top + 50, 
          left: window.dancers[index].left - 50,
          transition: 'all 1s ease-out'
        });
        }
      }
    })
  });
  
});

$('.left').on("click", ".dancer", function(event) {
  $( ".dancer" ).append( "<div class='quote'>Whatever it takes!</div>" );
});

