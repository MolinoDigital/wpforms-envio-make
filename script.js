
jQuery("form").submit(function(event) {
    //LLamada a cookie
    var output = {};
    var cookie_ref = decodeURIComponent(document.cookie.replace(/(?:(?:^|.;\s)__gtm_campaign_url\s*\=\s*([^;]).$)|^.*$/, "$1"));
        if(cookie_ref!=""){
            var cookie_url = cookie_ref.substring(cookie_ref.indexOf("?")+1);
            var cookie_ref_1 = cookie_url;
            
            cookie_url.split(/\s*&\s*/).forEach(function(pair) {
                pair = pair.split(/\s*=\s*/);
                output[pair[0]] = pair.splice(1).join("=");
            });
        }
       
    //Fin LLamada a cookie

   // Datos formulario

   var $inputs=jQuery(this).find('div.wpforms-field-container').find('input');
   var validacioncorrecta=true;
   $inputs.each(function() {
       var $this = jQuery(this);
       if($this.hasClass("wpforms-error")){
           validacioncorrecta=false;   
       }
       output[$this.parent().attr("class").split(" ")[2]]=$this.val();
       });
    // Final Datos formulario

    //Capturar url de completo con path
    var URLactual_origin = window.location.origin;
    var urlactual_path = window.location.pathname;
    var url_final = URLactual_origin+urlactual_path;
    output.secondary_content=url_final;
    if(validacioncorrecta){
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(output),
            redirect: 'follow'
        };

        fetch("https://hook.us1.make.com/wfkioetgmmiaxb7faqj7ovw8akzstupa", requestOptions)
            .then()
            .catch();

    }else{
    }
});


  var celular = document.getElementsByClassName("iti--allow-dropdown");
		for (var i = 0; i<celular.length; i++) {
   celular[i].classList.add("celular");
}
