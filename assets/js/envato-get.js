$( document ).ready(function() {

    // Envato Variables
    
    var urlEnv = 'http://marketplace.envato.com/api/v3/';
    var seller;
    var apiKey;
    var purchaseID;
    var envURL;
    
    
    //User Info Variables
    
    var buyerUsername;
    var buyDate;
    var itemID;
    var itemName;
    var license
    
    
        // bind form using ajaxForm 
        $('#jsonForm').ajaxForm({ 
            // dataType identifies the expected content type of the server response 
            dataType:  'json', 
     
            // success identifies the function to invoke when the server response 
            // has been received 
            success:   processJson 
        }); 
    
    function processJson(data) { 
        // 'data' is the json object returned from the server 
        apiKey = data.envForm.apiKey;
        seller = data.envForm.sellerUsername;
        purchaseID = data.envForm.purchaseCode;
        
        envURL = urlEnv+seller+"/"+apiKey+"/verify-purchase:"+purchaseID+".json";
        
        $.getJSON(envURL, function(purchaseData) {
            $(".infoBox").css("display", "block");
            $(".itemName").html(purchaseData["verify-purchase"].item_name);
            $(".itemID").html(purchaseData["verify-purchase"].item_id);
            $(".buyerUsername").html(purchaseData["verify-purchase"].buyer);
            $(".purchaseDate").html(purchaseData["verify-purchase"].created_at);
            $(".licenseType").html(purchaseData["verify-purchase"].licence);
        });
    }
    
    

    
    
});