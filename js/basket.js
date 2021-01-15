$(function(){		
	$('input[type="number"]').niceNumber();
	$('.in-basket').click(function(){
		var productTOBasket = $('<div class="prod-to-basket"></div>');
		var formProduct = $('<form action="#" class="appSite"></form>');
		var nameProduct = $('<label class="name-product-cart" name="nameProduct"></label>');
		var quantityProduct = $('<input class="quantity" type="number" name="quantityProduct" value="">');
		var priceProduct = $('<input class="price" type="text" name="priceProduct" value="" readonly>');
		var sumPriceProduct = $('<input class="summa" type="text" name="sumPriceProduct" value="" readonly>');
		var removeProd = $('<img id="remove" src="../../../icons/remove.png" alt="удалить">');
		var siblEl = $(this).siblings();
		removeProd.css({
			'position':'absolute',
			'top':'0',
			'right':'0',
			'cursor':'pointer',
		});
		$('.basket-left').prepend(productTOBasket);
		productTOBasket.prepend(formProduct);
		productTOBasket.append(removeProd);
		formProduct.append(nameProduct);
		formProduct.append(quantityProduct);
		formProduct.append(priceProduct);
		formProduct.append(siblEl.find('span').clone());
		formProduct.append(sumPriceProduct);
		nameProduct.html(siblEl.children('h2').html());
		priceProduct.val(siblEl.find('label').html());
		quantityProduct.val(siblEl.find('input').val());
		sumPriceProduct.val(quantityProduct.val()*priceProduct.val());
		$('.quantity').change( function () {
			sumPriceProduct.val(parseInt(quantityProduct.val())*parseInt(priceProduct.val()));
			totalSumma ();
		});
		checkLengthClass ();
		countProdCart ();
		totalSumma ();
	});
	$('body').on('click','#remove', function(){
		$(this).parent().remove();
		checkLengthClass ();
		countProdCart ();
		totalSumma ();
	});
	function totalSumma () {
		var sum = $('.summa').map(function(){
			return parseInt($(this).val());
		}).get();
		var totalSum = sum.reduce(function(accumulator, currentValue){
			return accumulator + currentValue;
		});
		$('.total-price').val(totalSum);
	}

	function checkLengthClass () {
		var $productCount = $('.prod-to-basket').length;
		if ($productCount != 0) {
			// var totalSum = parseInt(0);
			// $('.summa').each(function(){
			// 	totalSum += parseInt($('.summa').val());
			// 	return totalSum;
			// });
			// $('.total-price').val(parseInt(totalSum));
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
