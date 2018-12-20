$(function() {
    $('#ChangeToggle').off('click').on('click', function() {
        $('#navbar-hamburger').toggleClass('hidden');
        $('#navbar-close').toggleClass('hidden'); 
        $('.opacity_div').toggleClass('hidden');
        $('body').css('overflow', $('body').css('overflow') === 'hidden' ? 'visible' : 'hidden');
    });
	var arr = ['Quality', 'Efficiency', 'Passion'];
	var arrText = ['Agility and optimization for unique business needs.', 'Custom-built solutions for any scale or scope.', 'Our pride is your success'];

	/*$('.active_text').text(arrText[0]);
	$('.carousel_value1').text(arr[0]);
	$('.carousel_value2').text(arr[1]);
	$('.carousel_value3').text(arr[2]);*/

	$('.left_click').off('click').on('click', function(){
		var el1 = arr.pop();
		arr.unshift(el1);

		var elText1 = arrText.pop()
		arrText.unshift(elText1);

		$('.carousel_value1').text(arr[0]);
		$('.carousel_value2').text(arr[1]);
		$('.carousel_value3').text(arr[2]);

		$('.active_text').text(arrText[0]);

		$('#carousel_active').attr('data-name', arr[1].toLowerCase());			
	})


	$('.right_click').off('click').on('click', function(){
		
		var el1 = arr.shift();
		arr.push(el1);

		var elText1 = arrText.pop()
		arrText.unshift(elText1);
			
		$('.carousel_value1').text(arr[0]);
		$('.carousel_value2').text(arr[1]);
		$('.carousel_value3').text(arr[2]);

		$('.active_text').text(arrText[0]);
		
		$('#carousel_active').attr('data-name', arr[1].toLowerCase());			
	})

    $('.check1 span').off('click').on('click', function () {
        let $cb = $('.check1 input');
        $cb.prop('checked', !$cb.prop('checked'));
    });
});