

    // <!--jQuery-start-->

  //    <!-- color-class-start -->

    $(function(){

      $('.bg-primary').click(function(){
        $('body').addClass('bg-primary text-white');
        $('body').removeClass('bg-success bg-dark bg-info bg-danger bg-secondary');
      });

      $('.bg-success').click(function(){
        $('body').addClass('bg-success text-white');
        $('body').removeClass('bg-primary bg-dark bg-info bg-danger bg-secondary');
      });

      $('.bg-info').click(function(){
        $('body').addClass('bg-info text-white');
        $('body').removeClass('bg-success bg-dark bg-primary bg-danger bg-secondary');
      });

      $('.bg-dark').click(function(){
        $('body').addClass('bg-dark text-white');
        $('body').removeClass('bg-success bg-primary bg-info bg-danger bg-secondary');
      });

      $('.bg-danger').click(function(){
        $('body').addClass('bg-danger text-white');
        $('body').removeClass('bg-success bg-dark bg-info bg-primary bg-secondary');
      });

      $('.bg-secondary').click(function(){
        $('body').addClass('bg-secondary text-white');
        $('body').removeClass('bg-success bg-dark bg-info bg-danger bg-primary');
      });

    });


  //    <!-- color-class-end -->


  //  <!-- settings-image-animation-start-->

      $('.settings img').click(function(){
        $('.settings').toggleClass('move');
      });

  //  <!-- settings-image-animation-end-->


    // <!--jQuery-end-->