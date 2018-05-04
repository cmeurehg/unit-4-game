
$(document).ready(function(){

     
       
    var randomToMatch = Math.floor(Math.random() * 102) + 19;
    console.log(randomToMatch);
  
    
    $("#match-or-die").text(randomToMatch);

    var coins = $("#coins");

    var counter = 0;
    var countSaves = 0;
    var countSlashes = 0;

    var valuesForCoins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    

    for (i=0; i < 4; i++) {

        var coinSet = $("<img>");

        coinSet.addClass("coins-photo");
        coinSet.attr("src", "assets/images/gold-coins.jpg");
        coinSet.attr("data-value", valuesForCoins[i]);
        coins.append(coinSet);

    }


    coins.on("click", ".coins-photo", function () {

        var valueOfCoin = ($(this).attr("data-value"));
        valueOfCoin = parseInt(valueOfCoin);
        counter += valueOfCoin;
        $("#total").text(counter);

        if (counter === randomToMatch) {
            countSaves ++;
            $("#saved").text(countSaves);
            alert("Lucky You!");
        } else if (counter >= randomToMatch) {
            countSlashes ++;
            $("#slashes").text(countSlashes);
            alert("Ouch!");
        
            counter = 0;
        }
    
     
        
        })
    

});
