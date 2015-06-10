// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

$('.carousel').carousel({
  interval: 400
})

// $('.summaryShow').click(function(){
//     $('.movingBoxIndex').animate({width: 'toggle'});
// });
// $( "#summaryShow" ).hover(function() {
//   $(".movingBoxIndex").fadeOut( 100 );
// });
// $("#summaryShow").mouseenter( handlerIn ).mouseleave( handlerOut );
// $("#summaryShow").on("mouseover", function () {
//     $(".movingBoxIndex").fadeOut(500);

// });
$( "#summaryShow" ).click(function() {
  $( ".postTime" ).fadeOut( "slow")
});

$(document).ready(function(){

  // info gone subject show
  $(".summaryShow").click(function(){
    var $myParent = $(this).parent()
    // $("#movingBoxIndex").animate({width:'toggle'}, 3000)
    // $("#movingBoxIndex").delay(350).slideToggle(500, 'linear');
    $myParent.next().next().next().animate({ width:'0%'}, {duration: 1200});
    // animate({width:'toggle'}), 'slow');
    $myParent.delay(1800).slideToggle(1200);
    $myParent.next().delay(1800).slideToggle(1200);
    $myParent.next().next().delay(2000).slideToggle(1000);
    $myParent.next().next().next().delay(2200).animate({ width:'100%'}, {duration: 1200});
    $myParent.next().next().next().next().delay(2400).animate({"height": "34px"}, {duration: 1400});
  });


$(".indexPostBack").click(function(){
    var $mySibling = $(this).prev().prev()

    $(this).next().animate({ width:'0%'}, {duration: 1000});
    $(this).delay(1200).fadeOut(1200);
    $(this).prev().delay(1700).slideToggle(900);
    // $(this).next().delay(2000).animate({"padding-bottom": "19px"}, {duration: 1000});
    
    $(this).next().delay(2100).animate({"padding-bottom": "0px"}, {duration: 1000});
    
    // $(this).next().next().delay(3000).animate({"height": "74px", "opacity": "1"}, {duration: 1000});
    $mySibling.delay(2100).slideToggle(1000);
    $(this).next().animate({ width:'100%'}, {duration: 1000});
    $(this).next().next().delay(2300).animate({"height": "0px", "opacity": "1"}, {duration: 1000});
    

    
    
  });


  // info back subject hide
  // $(".indexPostBack").click(function(){
  //   var $mySibling = $(this).prev().prev()

  //   $(this).next().animate({ width:'0%'}, {duration: 1200});
  //   $(this).delay(1500).fadeOut(1500);
  //   $(this).prev().delay(2000).slideToggle(1000);
  //   // $(this).next().delay(2000).animate({"padding-bottom": "19px"}, {duration: 1000});
    
  //   $(this).next().delay(2500).animate({"padding-bottom": "0px"}, {duration: 1000});
    
  //   // $(this).next().next().delay(3000).animate({"height": "74px", "opacity": "1"}, {duration: 1000});
  //   $mySibling.delay(2500).slideToggle(1000);
  //   $(this).next().animate({ width:'100%'}, {duration: 1000});
  //   $(this).next().next().delay(2600).animate({"height": "0px", "opacity": "1"}, {duration: 1000});
    

    
    
  // });


  // show options
  $(".optionsButton").click(function(){
    $(this).fadeOut(1000);
    $(this).siblings(".optionsHidden").delay(1200).fadeIn(1000);
    $(this).siblings('.backFromOptions').delay(1200).fadeIn(1000);
  });

  // leave options
  $(".backFromOptions").click(function(){
    $(this).fadeOut(1000);
    $(this).siblings('.optionsHidden').fadeOut(1000);
    $(this).siblings('.optionsButton').delay(1200).fadeIn(1000);
  });

  // hover over picture for subject


  // $(".archivedHiddenSubject").mouseover(function(){
  //   $(this).fadeOut('slow');
  //   $(this).prev().delay('slow').fadeIn('slow');
  // })

  $(".archivedImage")

  $(".archivedImage")

  $(".archivedImageFour").mouseover(function(){
    // $(this).fadeOut('slow');
    $(this).animate({"opacity": "0", "height": "0px"}, (1000));
    $(this).next().animate({"height": "100px", "max-height": "100px", "opacity": "1", "margin-bottom": "-10px", "margin-top": "10px" }, (1000))
    // $(this).next().delay('slow').fadeIn('slow');
    // $(this).next().delay('slow').animate({opacity: 1}, ('slow'));


  })

  $(".archivedImage")

  $(".archivedImage")

  // Times slide Toggle(archived)

  $(".archivedHeadingOne").click(function(){
    $(".archivedTimeDisplayedOne").slideToggle(500);
  })

  $(".archivedHeadingTwo").click(function(){
    $(".archivedTimeDisplayedTwo").slideToggle(500);
  })

  $(".archivedHeadingThree").click(function(){
    $(".archivedTimeDisplayedThree").slideToggle(500);
  })

  $(".archivedHeadingFour").click(function(){
    $(".archivedTimeDisplayedFour").slideToggle(500);
  });

  $(".archivedHeadingFive").click(function(){
    $(".archivedTimeDisplayedFive").slideToggle(500);
  })

  $(".archivedHeadingSix").click(function(){
    $(".archivedTimeDisplayedSix").slideToggle(500);
  })

  // Picture slide toggle(archived)

  

  $(".archivedTimeDisplayedOne").click(function(){
    var $myChild = $(this).children(":not('.archivedHiddenSubject')")

    $myChild.slideToggle(500);
  });

  $(".archivedTimeDisplayedTwo").click(function(){
    var $myChild = $(this).children(":not('.archivedHiddenSubject')")
    $myChild.slideToggle(500);
  });

  $(".archivedTimeDisplayedThree").click(function(){
    var $myChild = $(this).children(":not('.archivedHiddenSubject')")
    $myChild.slideToggle(500);
  });

  $(".archivedTimeDisplayedFour").click(function(){
    var $myChild = $(this).children(":not('.archivedHiddenSubject')")
    // var $myChildTwo = $(this).children('div:not(.archivedHiddenSubject, .archivedTimeCounter)')
    $(this).children('.archivedTimeCounter').slideToggle(1000);
    $(this).children('.archivedImageFour').delay(1350).slideToggle(1000).css({"border-color": "#4B4947", 
                                                                             "border-weight":"2px", 
                                                                             "border-style":"solid"});

    // $myChildTwo.slideToggle(5000);
  });

  $(".archivedTimeDisplayedFive").click(function(){
    var $myChild = $(this).children(":not('.archivedHiddenSubject')")
    $myChild.slideToggle(500);
  });

  $(".archivedTimeDisplayedSix").click(function(){
    var $myChild = $(this).children(":not('.archivedHiddenSubject')")
    $myChild.slideToggle(500);
  });

});