jQuery(document).ready(function ($) {

    //Creating reference for the countdown
    var $advance_clock = $('#advance_clock');

    var remaining_time = new Date().getTime();

    var current_time = new Date().getTime();

    var end_time = current_time + 2 * 60 * 1000;

    var flag = false;

    //this calling function will start the countdown
    $advance_clock.countdown(end_time)
        .on('update.countdown', function (event) {
            var format = '%H:%M:%S';
            if (event.offset.totalDays > 0) {
                format = '%-d day%!d ' + format;
            }
            $(this).html(event.strftime(format));
        })

        .on('finish.countdown', function (event) {
            $(this).html('This offer has expired!')
                .parent().addClass('disabled');
            $("#test").remove();
        });

    // Pause the countdown
    $("#pause_btn").on('click', function () {
        $advance_clock.countdown('pause');
        current_time = new Date().getTime();
        remaining_time = end_time - current_time;
        flag = true;
    });

    // Resume the countdown
    $("#resume_btn").on('click', function () {
        if (flag){
            $advance_clock.countdown('resume');
            current_time = new Date().getTime();
            end_time = current_time + remaining_time;
            $advance_clock.countdown(end_time);
            flag = false;
        }
    });

    // Setting 1 min time for countdown
    $("#time_set_btn").on('click', function () {
        $advance_clock.countdown(set_one_min());
    });

    $('#reset_btn').on('click', function() {
        $advance_clock.countdown(getSevenSecondFromNow());
    });

    //give extra one minute this will add to the current time
    $('#extra_time_btn').on('click', function () {
        $advance_clock.countdown(give_extra_one_min());
    });

    //cut 10 second
    $('#cut_time_btn').on('click', function () {
        $advance_clock.countdown(cut_ten_second());
    });

    //get seven second for reset value
    function getSevenSecondFromNow() {
        current_time = new Date().getTime();
        end_time = current_time + 7 * 1000;
        return end_time;
    }

    //setting one minute for countdown
    function set_one_min() {
        current_time = new Date().getTime();
        end_time = current_time + 60 * 1000;
        return end_time;
    }

    //give extra 1 min including remaining time
    function give_extra_one_min() {
        current_time = new Date().getTime();
        var remaining_time = end_time - current_time;
        end_time = current_time + (60 * 1000) + remaining_time;
        return end_time;
    }

    //reduce 10 second form the countdown
    function cut_ten_second() {
        end_time = end_time - (10 * 1000);
        return end_time;
    }


    //getting time after 10 seconds in timestamp value
    end_time_of_clock = current_time + 10*1000;
    //Basic countdown
    var $basic_clock = $('#basic_clock');
    //this calling function will start the countdown
    $basic_clock.countdown(end_time_of_clock)
        .on('update.countdown', function (event) {
            var format = '%H:%M:%S';
            if (event.offset.totalDays > 0) {
                format = '%-d day%!d ' + format;
            }
            $(this).html(event.strftime(format));
        })

        .on('finish.countdown', function (event) {
            $(this).html('This offer has expired!')
                .parent().addClass('disabled');
            $("#test").remove();
        });

});