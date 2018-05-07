console.log("connected");
// //
// // var nyc = []
// // var sf = []
// // var la = []
// // var syd = []
// // var atx = []
//
//
// // ### Read user input
//
// var city = $("#city-type").val()
//
// ### Add New York City to select list

$("#city-type").append("<option>New York City</option>")
//
// ### Add San Francisco to select list
//
$("#city-type").append("<option>San Francisco</option>")

// ### Add Los Angeles to select list

$("#city-type").append("<option>Los Angeles</option>")

// ### Add Austin to select list

$("#city-type").append("<option>Austin</option>")

// ### Add Sydney to select list

$("#city-type").append("<option>Sydney</option>")

// ### If city is NYC change background image

$("#city-type").change(function(){
  if ($("#city-type").val() === "New York City"){
    $("body").css("background-image", "url(images/nyc.jpg)")
  }
}
)

// ### If city is San Francisco change background image

$("#city-type").change(function(){
  if ($("#city-type").val() === "San Francisco"){
    $("body").css("background-image", "url(images/sf.jpg)")
  }
}
)

// ### If city is Los Angeles change background image

$("#city-type").change(function(){
  if ($("#city-type").val() === "Los Angeles"){
    $("body").css("background-image", "url(images/la.jpg)")
  }
}
)

// ### If city is Austin change background image

$("#city-type").change(function(){
  if ($("#city-type").val() === "Austin"){
    $("body").css("background-image", "url(images/austin.jpg)")
  }
}
)

// ### If city is Sydney change background image

$("#city-type").change(function(){
  if ($("#city-type").val() === "Sydney"){
    $("body").css("background-image", "url(images/sydney.jpg)")
  }
}
)
