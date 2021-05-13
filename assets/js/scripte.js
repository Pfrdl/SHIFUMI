$(document).ready(function() {


    let playerChoice;
    let iaScore = $('#iaScore');
    let playerScore = $('#playerScore');


    // PIERRE
    $('#playerStoneCtn').click(function() {
        let stone = $('.stone').hide();
        let paper = $('.paper').hide();
        let scissor = $('.scissor').hide();

        playerChoice = 0;
        let randomElement = Math.floor(Math.random() * 3);
        if (randomElement == 0) {

            $('#partieBloc').html('Egalité')
            stone.show();

        } else if (randomElement == 1) {
            $('#partieBloc').html('Perdu');
            paper.show();
            iaScore.html(1);

        } else {
            $('#partieBloc').html('Gagné !')
            scissor.show();


        }

    })



    // FEUILLE
    $('#playerPaperCtn').click(function() {
        let stone = $('.stone').hide();
        let paper = $('.paper').hide();
        let scissor = $('.scissor').hide();

        playerChoice = 1;
        let randomElement = Math.floor(Math.random() * 3);

        if (randomElement == 1) {
            $('#partieBloc').html('Egalité')
            paper.show();

        } else if (randomElement == 2) {
            $('#partieBloc').html('Perdu')
            scissor.show();

        } else {
            $('#partieBloc').html('Gagné !')
            stone.show();
        }
    })


    // CISEAUX
    $('#playerScissorCtn').click(function() {
        let stone = $('.stone').hide();
        let paper = $('.paper').hide();
        let scissor = $('.scissor').hide();
        playerChoice = 2;
        let randomElement = Math.floor(Math.random() * 3);

        if (randomElement == 2) {
            $('#partieBloc').html('Egalité')
            scissor.show();

        } else if (randomElement == 0) {
            $('#partieBloc').html('Perdu')
            stone.show();

        } else {
            $('#partieBloc').html('Gagné !')
            paper.show();
        }

    })



    $('#restart').click(function() {


        iaScore.empty();
        playerScore.empty()






    })



})