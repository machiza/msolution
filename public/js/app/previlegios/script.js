$(function() {
    $('.active').removeClass('active');
    $('.active').removeClass('active');
    $('#operacoes').addClass('active');

    $('#btnSalvar').click(function() {
        var frm = $('#frm-create');
        var route = '/previlegios';
        var nome = $('#nome').val();
        var previlegios = new Array();
        if($('#definicoes').is(':checked')) {
            previlegios.push('definicoes');
        }
        if($('#rh').is(':checked')) {
            previlegios.push('rh');
        }
        if($('#tarefas').is(':checked')) {
            previlegios.push('tarefas');
        }
        if($('#financas').is(':checked')) {
            previlegios.push('financas');
        }
        if($('#marketing').is(':checked')) {
            previlegios.push('marketing');
        }
        if($('#relatorio').is(':checked')) {
            previlegios.push('relatorio');
        }
        var obs = $('#observacao').val();

        $.ajax({
            type: 'POST',
            url: route,
            data: { nome, previlegios, obs },
            success: function(data) {
                alert(data);
            }
        });
    });

    $('#btnEdit').click(function() {
        var frm = $('#frm-update');
        var route = '/previlegios/'+$('#docId').val();
        var nome = $('#nome').val();
        var previlegios = new Array();
        if($('#definicoes').is(':checked')) {
            previlegios.push('definicoes');
        }
        if($('#rh').is(':checked')) {
            previlegios.push('rh');
        }
        if($('#tarefas').is(':checked')) {
            previlegios.push('tarefas');
        }
        if($('#financas').is(':checked')) {
            previlegios.push('financas');
        }
        if($('#marketing').is(':checked')) {
            previlegios.push('marketing');
        }
        if($('#relatorio').is(':checked')) {
            previlegios.push('relatorio');
        }
        var obs = $('#observacao').val();

        $.ajax({
            type: 'POST',
            url: route,
            data: { nome, previlegios, obs },
            success: function(data) {
                alert(data);
                window.location.href = '/previlegios';
            }
        });
    });

    $('#btnDelete').click(function() {
        var id = $(this).val();
        alert('id');
    });
});