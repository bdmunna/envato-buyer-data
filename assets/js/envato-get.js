$( document ).ready(function() {

    // Envato Variables
    
    var apiURL = 'http://marketplace.envato.com/api/v3/';
    var envURL;
    
        // bind form using ajaxForm 
        $('#jsonForm').ajaxForm({ 
            // dataType identifies the expected content type of the server response 
            dataType:  'json', 
     
            // success identifies the function to invoke when the server response 
            // has been received 
            success:   processJson 
        }); 
    
    function processJson(data) { 
        envURL = apiURL+data.envForm.sellerUsername+"/"+data.envForm.apiKey+"/verify-purchase:"+data.envForm.purchaseCode+".json";
        
        $.getJSON(envURL, function(purchaseData) {
            $(".infoBox, .alertBox").css("display", "none");
            $(".infoBox").css("display", "block");
            $(".itemName").html(purchaseData["verify-purchase"].item_name);
            $(".itemID").html(purchaseData["verify-purchase"].item_id);
            $(".buyerUsername").html(purchaseData["verify-purchase"].buyer);
            $(".purchaseDate").html(purchaseData["verify-purchase"].created_at);
            $(".licenseType").html(purchaseData["verify-purchase"].licence);
        }).fail(function(jqXHR, status, error){
            if(status == 'error'){
                $(".infoBox, .alertBox").css("display", "none");
                $(".alertBox").css("display", "block");
            }
        });
    }
    
    

    
    
});