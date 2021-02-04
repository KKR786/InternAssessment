$('#henryDetail').hide();
$('#designmodoDetail').hide();
$('#designerDetail').hide();

$('#inbox').click(function(event){
    $('#henryDetail').hide();
    $('#designmodoDetail').hide();
    $('#designerDetail').hide();
})

$('#henry').click(function(event){
    $('#henryDetail').show();
    $('#designmodoDetail').hide();
    $('#designerDetail').hide();
})

$('#designmodo').click(function(event){
    $('#designmodoDetail').show();
    $('#henryDetail').hide();
    $('#designerDetail').hide();
})

$('#designer').click(function(event){
    $('#designmodoDetail').hide();
    $('#henryDetail').hide();
    $('#designerDetail').show();
})