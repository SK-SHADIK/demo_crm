// $(window).on('resize', function() {
//     $('select').each(function() {
//       if ($(this).data('select2')) {
//         $(this).select2('destroy').select2(); // Destroy and reapply Select2
//       }
//       $(this).select2(); // Initialize Select2 again
//     });
//   });
  
// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});