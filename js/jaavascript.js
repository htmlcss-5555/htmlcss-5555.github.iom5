let nightMode = document.querySelector('#night-mode');
let mode = false;

nightMode.addEventListener('click', function(){
    if (mode == false) {
        mode = true;

        document.querySelector('#night-mode').style.background = "#fff";

        


        document.querySelector('body').style.background = '#000';
        document.querySelector('body').style.color = '#fff';
        document.querySelector('.main3').style.background = 'yellow';
        document.querySelector('.index2').style.background = '#fff';
        document.querySelector('.index3').style.color = '#fff';
        document.querySelector('.main2').style.color = '#000';
    }   else {
        mode = false;
        document.querySelector('#night-mode').style.background = "#000";


        



        document.querySelector('body').style.background = '#fff';
        document.querySelector('body').style.color = '#000';
        document.querySelector('.main3').style.background = '#d4d4d4';
        document.querySelector('.index2').style.background = '#000';

        document.querySelector('.index3').style.color = '#000';
        
        document.querySelector('.main2').style.color = '#fff';
    }
});
