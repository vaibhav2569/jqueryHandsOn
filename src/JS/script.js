// 6.Target the Same Element with Multiple jQuery Selectors
$(document).ready(function() {
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
      
//  7.Remove Classes from an Element with jQuery
$("button").addClass("animated bounce");
$(".well").addClass("animated shake");
$("#target3").addClass("animated fadeOut");
$("button").removeClass("btn-default");

//8. Change the CSS of an Element Using jQuery
$("#target1").css("color", "red");

// 9.Disable an Element Using jQuery
$("#target1").prop("disabled", true);

// 10.Change Text Inside an Element Using jQuery
$("#target4").html("<em>#target4</em>");

// 11.Remove an Element Using jQuery
$("#target4").remove();

// 12.Use appendTo to Move Elements with jQuery
$("#target2").appendTo("#right-well");

// 13.Clone an Element Using jQuery
$("#target5").clone().appendTo("#left-well");

// 14.Target the Parent of an Element Using jQuery
$("#target1").parent().css("background-color", "red");

// 15.Target the Children of an Element Using jQuery
$("#right-well").children().css("color", "orange");

// 16.Target a Specific Child of an Element Using jQuery
$(".target:nth-child(2)").addClass("animated bounce");

// 17.Target Even Elements Using jQuery
$(".target:even").addClass("animated shake");

// 18.Use jQuery to Modify the Entire Page
$("body").addClass("animated hinge");

  });
  



