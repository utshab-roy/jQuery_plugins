jQuery(document).ready(function ($) {

    //Some format and usages
    moment();                                       // Wed Jun 13 2018 19:03:40 GMT+0600
    moment()._d;                                    // Wed Jun 13 2018 18:59:54 GMT+0600 (Bangladesh Standard Time)
    moment().format('DD-MMMM-YYYY');                // 13-June-2018
    moment().format('MMMM Do YYYY, h:mm:ss a');     // June 13th 2018, 7:07:10 pm
    moment().format('YYYY [escaped] YYYY');         // 2018 escaped 2018
    moment().format();                              // 2018-06-13T19:10:57+06:00
    moment().add(3, 'day').format("DD-MM-YYYY");    // 16-06-2018 (adding 3 days from current day)
    moment().hour();                                // 19 (12 + 7 = 19 which is current hour)
    moment().format('x');                           // 1528896046858 (timestamp value of current time)
    moment().format("ddd, hA");                     // Wed, 7PM
    moment("25-12-2016", "DD-MM-YYYY");             //here the first arg is the date and the second arg is the format

    //Relative Time
    moment().startOf('day').fromNow();              // 20 hours ago
    moment().endOf('day').fromNow();                // in 4 hours
    moment().startOf('hour').fromNow();             // 33 minutes ago

    //Calendar Time
    moment().calendar();                            // Today at 7:23 PM
    moment().add(1, 'days').calendar();             // Tomorrow at 7:24 PM
    moment().add(3, 'days').calendar();             // Saturday at 7:24 PM (Three days from now)
    moment().add(10, 'days').calendar();            // 06/23/2018 (10 days from now)
    moment().subtract(1, 'days').calendar();        // Yesterday at 7:26 PM (One day before)
    moment().subtract(3, 'days').calendar();        // Last Sunday at 7:27 PM (3 days before)
    moment().subtract(10, 'days').calendar();       // 06/03/2018 (10 days before)

    //Multiple Locale Support
    moment.locale();                                // en
    moment().format('LT');                          // 7:29 PM
    moment().format('LTS');                         // 7:29:26 PM
    moment().format('L');                           // 06/13/2018
    moment().format('l');                           // 6/13/2018
    moment().format('LL');                          // June 13, 2018
    moment().format('ll');                          // Jun 13, 2018
    moment().format('LLL');                         // June 13, 2018 7:29 PM
    moment().format('lll');                         // Jun 13, 2018 7:29 PM
    moment().format('LLLL');                        // Wednesday, June 13, 2018 7:29 PM

    //Other test
    moment("25-12-2016", "DD-MM-YYYY").format("DD-MMMM-YYYY hh:mm:ss x"); //25-December-2016 12:00:00 1482602400000


    // $('#show_time').text(moment("25-12-2016", "DD-MM-YYYY"));
});