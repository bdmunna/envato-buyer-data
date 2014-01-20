$( document ).ready(function() {

    // Envato Variables
    
    var urlEnv = 'http://marketplace.envato.com/api/v3/';
    var seller;
    var apiKey;
    var purchaseID;
    
    $('#jsonForm').ajaxForm({ 
        // dataType identifies the expected content type of the server response 
        dataType:  'json', 
 
        // success identifies the function to invoke when the server response 
        // has been received 
        success:   processJson 
    }); 
    
    function processJson(data) { 
    // 'data' is the json object returned from the server 
    alert(data.message); 
}
});