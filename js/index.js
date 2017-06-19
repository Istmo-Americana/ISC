 function init() {
          window.addEventListener('scroll', function(e){
              var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                  shrinkOn = 300,
                  header = document.querySelector(".header");
                  header2 = document.querySelector(".center-image");
                  header3 = document.querySelector(".social-bar");
                  console.log(header);
                  console.log(header2);
                  console.log(header3);
              if (distanceY > shrinkOn) {
                  classie.add(header,"smaller");
                  classie.add(header2,"smaller");
                  classie.add(header3,"smaller");
              } else {
                  if (classie.has(header,"smaller")) {
                      classie.remove(header,"smaller");
                      classie.remove(header2,"smaller");
                      classie.add(header3,"smaller");
                  }
              }
          });
      }
      window.onload = init();

      /**Nav bar*/
      $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
      $('.button-collapse').sideNav({
      menuWidth: 260, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

    $('.dropdown-button').dropdown({
       inDuration: 300,
       outDuration: 225,
       constrainWidth: false, // Does not change width of dropdown to that of the activator
       hover: false, // Activate on hover
       gutter: 0, // Spacing from edge
       belowOrigin: false, // Displays dropdown below the button
       alignment: 'left', // Displays dropdown with edge aligned to the left of button
       stopPropagation: false // Stops event propagation
     }
   );
    $('.carousel.carousel-slider').carousel({fullWidth: true});
