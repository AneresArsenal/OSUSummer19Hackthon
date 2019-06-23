var array = ['@Setp 1', 'tep 2 Failed', 'tep 3 ( Current )', 'tep 4', ];
var step = 0;

jQuery(document).ready(function ($) {

    progressBar();

});

function progressBar() {
    $('#steps').progressbar({
        steps: array
    });
}

$(document).on("click", "#trigger", function () {
    if (step < 3) {
        $('#steps').html("");
        array[step] = array[step].replace('@', '');
        array[step + 1] += '@';
        step++;
    }
    else {

        $('#steps').html("");
        array[step] = array[step].replace('@', '');
        step = 0;
        array[step] += '@';
    }

    progressBar();
});
