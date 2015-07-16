  $( "#menuimg" ).click( function () {
    $( "#navdiv" ).toggle("slide", {direction:"up"});
 });

var slides =["logoPuz.Png", "Language.png", "Rtp.png"]

function setAtt (titem) {
   var item=titem;
        $( "#theimg" ).attr("src", "Images/"+slides[item]);
        $( "#theimg" ).show("fade");
 }
   
function slidefunc(titem) {
        var item=titem;
        $( "#theimg").hide("fade", 400, function() {
            setAtt(titem);
           });
       }
             

function slideShow() {
      $.each(slides, function (item) {
         var atime=item*3000;
        window.setTimeout(function () {
                slidefunc(item)}, atime);
      });
  };


//$(function () {
//   slideShow();
//});

function scrolear(destino){
    var stop = $(destino).offset().top;
    var delay = 1000;
    $('body, html').animate({scrollTop: stop}, delay);
    return false;
}
  
function doIntro () {
 var startDel=0;
 var delStep=800;
     var delay=1000;
     var hi = $(window).height();
     var blk= $( "#blktxt" ).offset().top;
     if (hi<blk) {
      $('body, html').animate({scrollTop: blk-hi }, delay);
      
//     if ($( window ).height() < 500) {
//         scrolear( "#active" );
      }
     $( "#bus" ).delay(startDel).show("fade");
    startDel=startDel+delStep;
   $( "#bet" ).delay(startDel).show("slide", {direction:"right"}, 800);
    startDel=startDel+delStep;
   $( "#str" ).delay(startDel).show("slide", {direction:"right"}, 800);
    startDel=startDel+delStep;
   $( "#fas" ).delay(startDel).show("slide", {direction:"right"}, 800);
    startDel=startDel+delStep;
    $( "#bus" ).delay(startDel).show("fade");
    startDel=startDel+delStep;
    $( "#wehave").delay(startDel).show("fade");
//    $( "#sysmod" ).delay(startDel+delStep).show("slide", {direction:"up"});
//    $( "#ec" ).delay(startDel+2*delStep).show("slide", {direction:"up"});
//    $( "#weHelp" ).delay(startDel+3*delStep).show("slide", {direction:"up"});
//    $( "#req" ).delay(startDel+4*delStep).show("fade");
}

$( function() {
  $( "#webticker" ).show();
  $( "#webticker" ).webTicker({speed: 30, startEmpty: false});
    
    doIntro();
   });

$(function(){
    // this will get the full URL at the address bar
    var url = window.location.href; 

    // passes on every "a" tag 
    $("#navdiv a").each(function() {
            // checks if its the same on the address bar
        if(url == (this.href)) { 
            $(this).closest("a").addClass("mactive");
        }
    });
});
