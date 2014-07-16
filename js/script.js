/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
  $("button").on("click", function() {
    $(".prod-icon").addClass("suggested");
  });

  $(document).ready(function() {
    $(".info.active").tooltip();
  });
});