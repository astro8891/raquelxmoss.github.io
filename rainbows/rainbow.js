$(document).ready(function(){
    function getColor(noOfColors){
        htmlString ="";
        frequency=5/noOfColors;
        for (var i = 0; i < noOfColors; ++i){
            r =   Math.sin(frequency*i + 0) * (127) + 128;
            g =   Math.sin(frequency*i + 2) * (127) + 128;
            b =   Math.sin(frequency*i + 4) * (127) + 128;
            div='<div class="color" style="background-color:rgb({r},{g},{b});">  </div>';
            div=div.replace("{r}",Math.floor(r));
            div=div.replace("{g}",Math.floor(g));
            div=div.replace("{b}",Math.floor(b));
            htmlString  += div;
        }
        return htmlString ;
    }
    $('#rainbow').on('mouseover','.color',function(){
        $( this ).fadeTo( "slow", 0.20 );
     });

    $('#rainbow').html(getColor(251));

    setInterval(function() {
      $('.color').fadeTo("slow", 1);
    }, 10000);
});
