$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }

        // $("#monthlyIncome, #monthlyExpend").priceFormat({
        //     prefix: ''
        // });

        var i=1;
        $("#add_row").click(function(){
            $('#addr'+i).html("<td>"+ (i+1) +"</td><td><input id='expense"+i+"' name='expense"+i+"' type='text' placeholder='Enter expense (Bill, Food, Drink, etc)' class='form-control input-md'  /> </td><td><input id='cashSpent"+i+"' name='cashSpent"+i+"' type='text' placeholder='Enter money spent'  class='form-control input-md'></td>");

          $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
          i++; 
      });
        $("#delete_row").click(function(){
           if(i>1){
               $("#addr"+(i-1)).html('');
               i--;
           }
       });

    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});
