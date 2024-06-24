$('#btn-begin').on('click', function(){
    $('.box-wrap').addClass('active');
    // $('.box-condition').css('display','flex');
});

$('#btnRefuser').click(function(){
    $('.box-wrap').addClass('remove');
    $('.box-start-game').addClass('active');
});
$('#btnAccepter').click(function(){
    $('.box-wrap').addClass('remove');
    $('.box-start-game').addClass('active');

});
$('#btn-ready').click(function(){
    $('.box-start-game').addClass('remove');
    $('.box-question').addClass('active');
});
var questions = [
    {
        titre:" Quelle planète est la plus proche du soleil ?",
        q1:"Mars",
        q2:"Jupiter",
        q3:"Mercure",
        q4:"Vénus",
        correcte:"q3"
    },
    {
        titre:"Qui a écrit la pièce de théâtre Roméo et Juliette?",
        q1:"Charles Dickens",
        q2:"William Shakespeare",
        q3:"Jane Austen",
        q4:"Mark Twain",
        correcte:"q2"
    },
    {
        titre:"Quelle est la capitale de la France ?",
        q1:"Berlin",
        q2:"Madrid",
        q3:"Paris",
        q4:"Rome",
        correcte:"q3"
    },
    {
        titre:"Quel est le plus grand océan sur Terre ?",
        q1:"Océan Atlantique",
        q2:" Océan Arctique",
        q3:"Océan Indien",
        q4:"Océan Pacifique",
        correcte:"q4"
    },
    {
        titre:"Qui a peint La Joconde",
        q1:"Vincent van Gogh",
        q2:"Pablo Picasso",
        q3:"Leonardo da Vinci",
        q4:"Michel-Ange",
        correcte:"q3"
    },
    {
        titre:"Quelle est la plus haute montagne du monde ?",
        q1:"Mont Everest",
        q2:"Mont Kilimandjaro",
        q3:"Mont McKinley",
        q4:"Mont Fuji",
        correcte:"q1"
    },
    {
        titre:"Quelle est la capitale du Japon ?",
        q1:"Beijing",
        q2:" Séoul",
        q3:"Tokyo",
        q4:"Bangkok",
        correcte:"q3"
    },
    {
        titre:"Quel est le plus grand désert du monde ?",
        q1:" Sahara",
        q2:"Gobi",
        q3:"Désert d'Atacama",
        q4:"Antartica",
        correcte:"q1"
    }
];

var reponse_valide = 0;
var numquestion = 0
var question_courante = questions[numquestion];
$("#titre-question").text(questions[0]['titre']);
$('.q1').text(questions[0]['q1']);
$('.q2').text(questions[0]['q2']);
$('.q3').text(questions[0]['q3']);
$('.q4').text(questions[0]['q4']);

$('.question').on('click', function(){
    var quest = $('.question');
    for(i=0; i<quest.length;i++){
        if($(quest[i]).css('border')=="2px solid rgb(0, 128, 0)"){
            $(quest[i]).css('border', '2px solid rgb(177, 22, 255)');
        }
    }
    $(this).css('border', '2px solid green');
});

$('#valider').click(function(){
    var nm = parseInt("A");
    var elem_selct;
    var quest = $('.question');
    for(i=0; i<quest.length;i++){
        if($(quest[i]).css('border')=="2px solid rgb(0, 128, 0)"){
            elem_selct = $(quest[i]);
        }
    }
    reponse_selec=elem_selct.attr('class').split(' ')[1];
    if(reponse_selec == question_courante.correcte){
        reponse_valide++;
    }
    if(numquestion!=7){
        numquestion++;
        question_courante = questions[numquestion];
        $('.box-question').removeClass('delete-move');
        $('.box-question').addClass('move');
        $("#titre-question").text(question_courante['titre']);
        $('.q1').text(question_courante['q1']);
        $('.q2').text(question_courante['q2']);
        $('.q3').text(question_courante['q3']);
        $('.q4').text(question_courante['q4']);
    }
    else{
    
        $(".box-question").addClass('finished');
        $(".score").text(`${reponse_valide}/${questions.length}`)
        $('.box-resultat').removeClass('delete');
        $('.box-resultat').addClass('active');
        $('.box-question').removeClass('active');
    }
    setTimeout(()=>{
        $('.box-question').addClass('delete-move');
    }, 1000);
    
});

$("#btnRecommencer").on('click', function(){
    $('.box-resultat').removeClass('active');
    $('.box-resultat').addClass('delete');
    $('.box-question').removeClass('finished');
    $('.box-question').removeClass('delete-move');
    $('.box-question').removeClass('move');
    $('.box-question').addClass('active');
    reponse_valide = 0;
    numquestion = 0;
    question_courante = questions[numquestion];
    $("#titre-question").text(question_courante['titre']);
    $('.q1').text(question_courante['q1']);
    $('.q2').text(question_courante['q2']);
    $('.q3').text(question_courante['q3']);
    $('.q4').text(question_courante['q4']);
});
