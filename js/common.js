 $(document).ready(function () {

     $('.dp2 , .gnb_bg').hide();
     $('.gnb_dp1>li').mouseover(function () {
         $('.dp2 , .gnb_bg').stop().slideDown();


     });
     $('.gnb_dp1>li').mouseout(function () {
         $('.dp2 , .gnb_bg').stop().slideUp();
     });

     $('.visual_slide').bxSlider({
         auto: true,
         nextText: '베스트 선물세트',
         prevText: '할로윈 한정판매',
     });

     $('.best_slide').bxSlider({
         auto: true,
         maxSlides: 5,
         moveSlides: 1,
         slideWidth: 270,
         slideMargin: 10,
         pager: true
     });

     $('.mgnb_wrap').hide();
     $('.mgnb').click(function () {
         $('.mgnb_wrap').fadeIn();

     });

     $('.close').click(function () {
         $('.mgnb_wrap').fadeOut();
     });
 });
