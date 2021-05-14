$(document).ready(function() {

    let d = new Date();
    var date = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
    var hours = d.getHours() + ":" + d.getMinutes();
    let affichageHeure = $('#iaCircleCtn').text(hours);
    let affichageDate = $('#playerCircleCtn').text(date);


    let iaScore = 0;
    let playerScore = 0;
    let elements = ['pierre', 'feuille', 'ciseaux'];
    let game = 0


    $('button').click(function() {

        let stone = $('.pierre').hide()
        let paper = $('.feuille').hide()
        let scissor = $('.ciseaux').hide()
        let playerValue = $(this).val();
        let iaValue = elements[Math.floor(Math.random() * elements.length)];
        let message = $('#partieBloc').html("");
        game++


        if (playerValue == iaValue) {
            message.html("Egalité");

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

        let percentIa = ((iaScore / game) * 100);
        let percentPlayer = ((playerScore / game) * 100);
        $('#playerPercentCtn').html(Math.round(percentPlayer) + '%');
        $('#iaPercentCtn').html(Math.round(percentIa) + '%');
        let affichageplayer = $('#playerScore').text(playerScore);
        let affichageIa = $('#iaScore').text(iaScore);

        if (iaScore === 3) {

            swal({
                title: "DEFAITE",
                text: "Appuyer sur rejouer pour relancer une partie !",
                icon: "error",
            });

        } else if (playerScore === 3) {

            swal({
                title: "VICTOIRE",
                text: "Appuyer sur rejouer pour relancer une partie !",
                icon: "success",
            });

        }

    })

    $('#restart').click(function() {

        location.reload();

    })

})