var array = ['@Round 1', 'Round 2', 'Round 3', 'Round 4', ];
var interval = 0;

$(document).on("click", "#trigger", function(){
    triggerProgress(interval);
    interval++;

});


jQuery(document).ready(function ($) {

    progressBar();

});

function progressBar() {
    $('#steps').progressbar({
        steps: array
    });
}

function triggerProgress(step) {

    $('#steps').html("");
    array[step] = array[step].replace('@', '');

    if (step < 3) {

        array[step + 1] += '@';
    }
    else {

        step = 0;
        interval = 0;
        array[step] += '@';
    }

    progressBar();
};
