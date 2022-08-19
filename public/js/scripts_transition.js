//store the audiofile as variable.
var sound_park = document.getElementById("sound_park");
var sound_voiture = document.getElementById("sound_voiture");
var sound_maison = document.getElementById("sound_maison");
var sound_café = document.getElementById("sound_café");
var sound_concert = document.getElementById("sound_concert");
var score = 1
var nextItem = 0;

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

function launch_music(){
    if(nextItem == 4){
        sound_park.play(); //play the audio file
        sound_park.currentTime = 0;

    }
    else if(nextItem == 7){
    sound_voiture.play(); //play the audio file
    sound_voiture.currentTime = 0;

    }
    else if(nextItem == 10){
        sound_maison.play(); //play the audio file
        sound_maison.currentTime = 0;
    
    }
    else if(nextItem == 13){
        sound_café.play(); //play the audio file
        sound_café.currentTime = 0;
    }

    else if(nextItem == 16){
        sound_concert.play(); //play the audio file
        sound_concert.currentTime = 0;
    }
}


$(".btn_perso").click(function(event){
    change_page(this,"button")
})

$("#btn-reload").click(function(event){
    change_page(this,"restart")
})

function display_final_result(){
    console.log("passage display !! ")
    var remarque_result = ""
    var remarque2_result = ""
    var conseil_result = ""
    var score_on_10 = (score * 10) / 6
    if(score_on_10 != 5 && score_on_10 != 10){
        score_on_10 = score_on_10.toFixed(1) 
    }

    if(score <= 3){
        remarque_result = "Votre score est inférieur à la moyenne"
        remarque2_result = "Vous avez probablement une perte auditive"
        conseil_result = "Nous vous invitons à prendre rendez-vous avec notre audioprothésiste. "
        $('#remarque2_result ').css("color", "red")

    }
    else{
        remarque_result = "Bonne nouvelle votre score est supérieur à la moyenne ! "
        remarque2_result = "Le test auditif montre que votre audition est satisfaisante"
        conseil_result = "Si vous souhaitez avoir un diagnostic plus précis sur votre audition, prenez rendez-vous dans un centre Acuitis, pour réaliser un bilan auditif complet et personnalisé."
        $('#remarque2_result ').css("color", "green")
    }

    $(".progress-bar").css("width", (score_on_10 * 10) + "%");
    $('#score_result ').html(score_on_10 + " sur 10")
    $('#remarque_result ').html(remarque_result)
    $('#remarque2_result ').html(remarque2_result)
    $('#conseil_result ').html(conseil_result)

}

async function change_page(this_page,element){

    sound_park.pause(); //stop the audio file
    sound_voiture.pause(); //stop the audio file
    sound_maison.pause(); //stop the audio file
    sound_café.pause(); //stop the audio file
    sound_concert.pause();//stop the audio file

    switch (element) {
        case "button":
            if(this_page.getAttribute("data-value") != null && this_page.getAttribute("data-value") != "false"){
              score++;
              console.log("score actuel : " + score)
            }
            await sleep(400)
            this_page = this_page.parentElement.parentElement.parentElement.parentElement;
            break;
        
        case "audio":
            this_page = this_page.parentElement;
            break;

        case "restart":
            this_page = this_page.parentElement.parentElement.parentElement.parentElement.parentElement;
            break;
        default:
            break;
    }

    if(nextItem == 17){
        display_final_result()
    }

    console.log(nextItem)
 
    if(nextItem >= 3){
        $('.carousel__bullets').css('display', 'show');
    }

    $('.page:eq('+ nextItem +')').css('z-index', parseInt($(this_page).css('z-index')) + 1);

    nextItem = nextItem == 17 ? 0 : nextItem+1;

    launch_music()

}


/* 
var playButton = document.getElementById('control');
var is_play = false
playButton.addEventListener('click', e => {
  e.preventDefault();
  if(!is_play){
    sound_ouverture.play(); //play the audio file
    playButton.classList.toggle('is--playing');

    is_play = true
  }

});

*/
