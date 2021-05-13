$(document).ready(function() {


    let playerChoice;
    let iaScore = 0;
    let playerScore = 0;
    let elements = ['pierre', 'feuille', 'ciseaux'];
    let game = 0



    $('button').click(function() {


        let stone = $('.stone').hide()
        let paper = $('.paper').hide()
        let scissor = $('.scissor').hide()
        let playerValue = $(this).val();
        let iaValue = elements[Math.floor(Math.random() * elements.length)];
        let message = $('#partieBloc').html("");
        game++




        if (playerValue == iaValue) {
            message.html("Egalité")

        } else if (playerValue == 'pierre' && iaValue == 'ciseaux') {
            playerScore++;
            message.html("Gagné !");
            scissor.show();


        } else if (playerValue == 'feuille' && iaValue == 'pierre') {
            playerScore++;
            message.html("Gagné !");
            stone.show();
        } else if (playerValue == 'ciseaux' && iaValue == 'feuille') {
            playerScore++;
            message.html("Gagné !");
            paper.show();

        } else {
            message.html("Perdu !");
            iaScore++;;

        }


        let percentIa = ((iaScore / game) * 100)
        let percentPlayer = ((playerScore / game) * 100)
        $('#playerPercentCtn').html(Math.round(percentPlayer) + '%')
        $('#iaPercentCtn').html(Math.round(percentIa) + '%')
        $('#playerScore').text(playerScore);
        $('#iaScore').text(iaScore)






    })





    $('#restart').click(function() {


        $('button').trigger("reset");
        return false;



    })
















    // PIERRE
    // $('#playerStoneCtn').click(function() {
    //     let stone = $('.stone').hide();
    //     let paper = $('.paper').hide();
    //     let scissor = $('.scissor').hide();

    //     playerChoice = 0;
    //     let randomElement = Math.floor(Math.random() * 3);
    //     if (randomElement == 0) {

    //         $('#partieBloc').html('Egalité')
    //         stone.show();

    //     } else if (randomElement == 1) {
    //         $('#partieBloc').html('Perdu');
    //         paper.show();
    //         iaScore.html(1);

    //     } else {
    //         $('#partieBloc').html('Gagné !')
    //         scissor.show();


    //     }

    // })



    // // FEUILLE
    // $('#playerPaperCtn').click(function() {
    //     let stone = $('.stone').hide();
    //     let paper = $('.paper').hide();
    //     let scissor = $('.scissor').hide();

    //     playerChoice = 1;
    //     let randomElement = Math.floor(Math.random() * 3);

    //     if (randomElement == 1) {
    //         $('#partieBloc').html('Egalité')
    //         paper.show();

    //     } else if (randomElement == 2) {
    //         $('#partieBloc').html('Perdu')
    //         scissor.show();

    //     } else {
    //         $('#partieBloc').html('Gagné !')
    //         stone.show();
    //     }
    // })


    // // CISEAUX
    // $('#playerScissorCtn').click(function() {
    //     let stone = $('.stone').hide();
    //     let paper = $('.paper').hide();
    //     let scissor = $('.scissor').hide();
    //     playerChoice = 2;
    //     let randomElement = Math.floor(Math.random() * 3);

    //     if (randomElement == 2) {
    //         $('#partieBloc').html('Egalité')
    //         scissor.show();

    //     } else if (randomElement == 0) {
    //         $('#partieBloc').html('Perdu')
    //         stone.show();

    //     } else {
    //         $('#partieBloc').html('Gagné !')
    //         paper.show();
    //     }

    // })



    // $('#restart').click(function() {


    //     iaScore.empty();
    //     playerScore.empty()






    // })



})