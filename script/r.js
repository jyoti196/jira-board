$(document).ready(function(){
     $("#sortable1,#sortable2,#sortable3,#sortable4,#sortable5,#sortable6").sortable({
              containment:".jira-board-table",
              revert:"valid",
              connectWith: "#sortable1,#sortable2,#sortable3,#sortable4,#sortable5,#sortable6"
            }).disableSelection();


     $(".tl").droppable({
              classes :{
                "ui-droppable active":"ui-state active",
                 "ui-droppable hover":"ui-state hover"
          },
             drop: function( event, ui ) {
             $( this )
             .addClass("ui-state-highlight");
             return false;
      }

    });
});
