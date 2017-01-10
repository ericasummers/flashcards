$(document).ready(function() {
  // $(".set").each(function() {
  //   var set = this;
  //   $(".initially-seen", this).click(function() {
  //     $(".initially-seen", set).toggle();
  //     $(".initially-hidden", set).toggle();
  //   });
  //
  //   $(".initially-hidden", this).click(function() {
  //     $(".initially-seen", set).toggle();
  //     $(".initially-hidden", set).toggle();
  //   });
  // });

  $(".set").each(function() {
    $(this).click(function() {
      $(".initially-seen", this).toggle();
      $(".initially-hidden", this).toggle();
    });
  });
});
