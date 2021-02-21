/* =============================================================================
                            initialize()
============================================================================= */


var modal1 = null;

function initialize(){

  // Not part  demo, but nice to have...
  setTimeout(function(){
    console.log("CSS class '.preload' removed from body element.");
    document.body.classList.remove('preload');
  }, 1000);


  modal1 = new Modal("#modal-1");
}


/* =============================================================================

============================================================================= */


document.addEventListener("DOMContentLoaded", function(){ initialize(); });
// window.onpageshow = (e) => {if (e.persisted){ location.reload(); }}; // Optional
