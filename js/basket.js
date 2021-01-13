$(function(){		
	$('input[type="number"]').niceNumber();
	$('.in-basket').click(function(){
		var productTOBasket = $('<div class="prod-to-basket"></div>');
		var wrapFormImg = $('<div class="wrap-form-img"></div>');
		var removeProd = $('<img id="remove" src="../../../icons/remove.png" alt="удалить">');
		var siblEl = $(this).siblings();
		removeProd.css({
			'cursor':'pointer',
		});
		$('.basket-left').prepend(productTOBasket);
		productTOBasket.prepend(siblEl.children('img, h2').clone());
		productTOBasket.append(wrapFormImg);
		wrapFormImg.append(siblEl.children('form').clone());
		wrapFormImg.append(removeProd);
		checkLengthClass ();
		countProdCart ();
	});
	$('body').on('click','#remove', function(){
		$(this).parent().parent().remove();
		checkLengthClass ();
		countProdCart ();
	});
	function checkLengthClass () {
		var $productCount = $('.prod-to-basket').length;
		if ($productCount != 0) {
			$('#popup p').hide();
			$('.basket-rigth').show();
			$('.basket-left').show();
		}
		else {
			$('#popup p').show();
			$('.basket-rigth').hide();
			$('.basket-left').hide();
		}
	}
	function countProdCart () {
		var productCount = $('.prod-to-basket').length;
			if (productCount != 0) {
				$('.count-prod').text(productCount);
				$('.count-prod').css('background-color','#ff0303e3');
				if ($('.count-prod').text().length > 1) {
					$('.count-prod').css({
						'font-size':'12px',
					});
				} else {
					$('.count-prod').css({
						'font-size':'',
					});
				}
			} else {
				$('.count-prod').text('');
				$('.count-prod').css({
					'background-color':'',
				});
			}
	}
});
