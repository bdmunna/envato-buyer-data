$( document ).ready(function() {

    //Variables
    
    var apiURL = 'http://marketplace.envato.com/api/v3/';
    var envURL;
    
        // get Form Data as JSON Object 
        $('#jsonForm').ajaxForm({ 
            dataType:  'json', 
            success:   processJson 
        }); 
    
    // Use Form Data to access Envato Marketplaces API
    function processJson(data) { 
        envURL = apiURL+data.envForm.sellerUsername+"/"+data.envForm.apiKey+"/verify-purchase:"+data.envForm.purchaseCode+".json";
        
        // Get JSON Object
        $.getJSON(envURL, function(purchaseData) {
            // Hide both boxes in case form is resubmitted
            $(".infoBox, .alertBox").css("display", "none");
            
            // Display Info Div
            $(".infoBox").css("display", "block");
            
            // Put Object data in HTML
            $(".itemName").html(purchaseData["verify-purchase"].item_name);
            $(".itemID").html(purchaseData["verify-purchase"].item_id);
            $(".buyerUsername").html(purchaseData["verify-purchase"].buyer);
            $(".purchaseDate").html(purchaseData["verify-purchase"].created_at);
            $(".licenseType").html(purchaseData["verify-purchase"].licence);
        }).fail(function(jqXHR, status, error){
            if(status == 'error'){
                // Hide both boxes in case form is resubmitted
                $(".infoBox, .alertBox").css("display", "none");
                
                // Display Error Div
                $(".alertBox").css("display", "block");
            }
        });
    }
});