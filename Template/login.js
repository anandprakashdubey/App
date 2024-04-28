function todo() {
  // $(".message a").click(function () {
  //   $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  // });

  $(document).ready(function () {
    $(".error").insertAfter("input");
    $(".password-label").insertAfter("#password");
  });
}

todo();
