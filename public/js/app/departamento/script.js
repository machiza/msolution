$(function() {
    $('.active').removeClass('active');
    $('#operacoes').addClass('active');
    $('#departamento').addClass('active');

    $('#btnSalvar').click(function() {
        var des = $('#des').val();
        var sigla = $('#sigla').val();
        var obs = $('#obs').val();
        var route = '/departamento';

        $.ajax({
            type: 'POST',
            url: route,
            data: { des, sigla, obs },
            success: function(data) {
                alert(data);
            }
        });
    });

    $('#btnEdit').click(function() {
        var des = $('#des').val();
        var sigla = $('#sigla').val();
        var obs = $('#obs').val();
        var id = $('#idDept').val();
        var route = '/departamento/'+id;

        $.ajax({
            type: 'POST',
            url: route,
            data: { des, sigla, obs },
            success: function(data) {
                alert(data);
                window.location.href = '/departamento';
            }
        });
    });
})