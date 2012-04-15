function center(id, constant) {
  var posTop = (($(window).height() - $(id).height()) / 2) - constant;
  $(id).css({marginTop: (posTop + "px")});
}

function showResult(data) {
  if (data.result == "success") {
	$(".name").fadeOut(250);
	$(".email").fadeOut(250);
	$(".url").fadeIn(250);
	$("#url").val("http://ubazaar.uchicago.edu/seller/tedxuchicago/?ref=" + data.code);
  } else {
  	$("form").replaceWith("Error: " + data.error);
  }
}

$(document).ready(function() {
  center("#container", 150);
  $("#submit").click(function(e) {
    e.preventDefault();
    $(this).attr("disabled");
    $.ajax({
      url: "action.php",
      dataType: 'json',
      data: $("#codeRetrieve").serialize(),
      success: function(data) {
        showResult(data);
      }
    });
  });
});

