$(document).ready(function () {
  // Configure/customize these variables.
  var showChar = 150; // How many characters are shown by default
  var ellipsestext = "...";
  var moretext = "Read more >";
  var lesstext = "Read less";

  $(".more").each(function () {
    var content = $(this).html();

    if (content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

      var html =
        c +
        '<span class="moreellipses">' +
        ellipsestext +
        ' </span><span class="morecontent"><span>' +
        h +
        '</span>  <a href="" class="morelink">' +
        moretext +
        "</a></span>";

      $(this).html(html);
    }
  });

  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});



/* 2. Cases */
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".js-cases-row")) {
    const row = document.querySelector(".js-cases-row");
    const casesCard = [...row.querySelectorAll(".js-cases-card")];

    function cloneNodes() {
      casesCard.forEach((card) => {
        const clone = card.cloneNode(true);

        clone.dataset.clone = true;

        row.appendChild(clone);
      });
    }
    cloneNodes();

    casesCard.forEach((card) => {
      row.appendChild(card);
    });

    cloneNodes();
  }
});

// items
$(".feature-35-owl").owlCarousel({
  loop: true,
  margin: 30,
  autoplay:true,
//   responsiveClass: true,
  responsive: {
    0: { items: 1, nav: false },
    1000: { items: 2, nav: false },
    // 1650: { items: 3, nav: false, loop: false },
  },
});
