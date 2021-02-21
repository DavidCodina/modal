/* =============================================================================
                              initialization
============================================================================= */


// Not part  demo, but nice to have...
setTimeout(function(){
  console.log("CSS class '.preload' removed from body element.");
  document.body.classList.remove('preload');
}, 1000);


const modal1 = new Modal("#modal-1");
