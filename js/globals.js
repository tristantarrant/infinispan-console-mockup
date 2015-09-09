(function($) {
  $(document).ready(function() {
    // Hide the clear button if the search input is empty
    $('.search-pf .has-clear .clear').each(function() {
      if (!$(this).prev('.form-control').val()) {
        $(this).hide();
      }
    });
    // Show the clear button upon entering text in the search input
    $('.search-pf .has-clear .form-control').keyup(function () {
      var t = $(this);
      t.next('button').toggle(Boolean(t.val()));
    });
    // Upon clicking the clear button, empty the entered text and hide the clear button
    $('.search-pf .has-clear .clear').click(function () {
      $(this).prev('.form-control').val('').focus();
      $(this).hide();
    });
    // matchHeight the contents of each .card-pf and then the .card-pf itself
    $('#cache-cards > [class*=\'col\'] > .card-pf .card-pf-title').matchHeight();
    $('#cache-cards > [class*=\'col\'] > .card-pf > .card-pf-body').matchHeight();
    $('#cache-cards > [class*=\'col\'] > .card-pf > .card-pf-footer').matchHeight();
    $('#cache-cards > [class*=\'col\'] > .card-pf').matchHeight();
    // initialize tooltips
    $('[data-toggle=\'tooltip\']').tooltip();
    // initialize datatables
    $('.datatable').dataTable({ "dom": '<"top">rt<"bottom">', "ordering": false});
    // initialize sliders
    $('[class*=\'metric-slider\']').each(function(i, element) {
        noUiSlider.create(element, {
            start: [ 0, 1000 ], // Handle start position
            step: 10, // Slider moves in increments of '10'
            margin: 20, // Handles must be more than '20' apart
            connect: true, // Display a colored bar between the handles
            direction: 'rtl', // Put '0' at the bottom of the slider
            orientation: 'horizontal',
            behaviour: 'tap-drag', // Move handle on tap, bar is draggable
            range: { // Slider can select '0' to '100'
                'min': 0,
                'max': 1000
            }
        });
    });
  });
})(jQuery);
