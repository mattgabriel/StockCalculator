// JavaScript Document
jQuery(document).ready(function($){
	var NumberOfShares = 0;
	var BuyPrice = 0;
	var SellPrice = 0;
	
	$(".NumberOfShares").on("keyup",function(){
		NumberOfShares = $(this).val();
		checkValues();
	});
	$(".BuyPrice").on("keyup",function(){
		BuyPrice = $(this).val();
		checkValues();
	});
	$(".SellPrice").on("keyup",function(){
		SellPrice = $(this).val();
		checkValues();
	});
	function checkValues(){
		if(NumberOfShares > 0 && BuyPrice > 0 && SellPrice > 0){
			var initialValue 	= NumberOfShares * BuyPrice;
			var finalValue		= NumberOfShares * SellPrice;
			
			var profitValue = (finalValue - initialValue).toFixed(2);
			var profitPercentage = (100 * finalValue / initialValue).toFixed(0) + "%";
			if(profitValue > 0){
				var profitOrLossColorClass = "SC_profit";
			} else {
				var profitOrLossColorClass = "SC_loss";
			}
			
			$(".SC_results").fadeIn(600);
			$(".SC_profitValue p").html(profitValue).removeClass().addClass(profitOrLossColorClass);
			$(".SC_profitPercentage p").html(profitPercentage).removeClass().addClass(profitOrLossColorClass);
			$(".SC_message p").html("You bought " + NumberOfShares + " shares for " + initialValue.toFixed(2) + " and now you could sell them for " + finalValue.toFixed(2));
		}
	}	
});