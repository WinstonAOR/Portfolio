var change = true;
function Translate(){
    if(change==true){
        const elements = ''
        change = false;
    }else{
        change = true;
    }
}

document.addEventListener("interruptor", googleTranslateElementInit);
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
       
translateOption
