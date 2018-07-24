$(function() {
    $('.active').removeClass('active');
    $('#operacoes').addClass('active');
    $('#departamento').addClass('active');

    $('#btnSalvar').click(function() {
        var nome = $('#nome').val();
        var obs = $('#obs').val();
        var route = '/cargo';
        
        $.ajax({
            type: 'POST',
            url: route,
            data: { nome, obs },
            success: function(data) {
                alert(data);
            }
        });
    });

    $('#btnEdit').click(function() {
        var nome = $('#nome').val();
        var obs = $('#obs').val();
        var id = $('#idCargo').val();
        var route = '/cargo/'+id;
        
        $.ajax({
            type: 'POST',
            url: route,
            data: { nome, obs },
            success: function(data) {
                alert(data);
                window.location.href = '/cargo';
            }
        });
    });
});