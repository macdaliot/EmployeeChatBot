$(document).ready(function () {
    $("table.grid tr:odd").addClass("alternate");
});

$(function () {
    $('#loading').hide();
});
$(document).ready(function () {
    $('#loading').hide();
    $('form').submit(function () {
        $('#loading').show();
    });
});

$(document).ready(function () {
    $("a.disabled").click(function (e) {
        e.preventDefault();
    });
});
