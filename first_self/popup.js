
console.log('first log')
// $(function () {
//     $("div#click").click(function () {
//         $(this).html('还不对吗？');
//     });
// }
// )
$(document).ready(
    function () {
        $("div#click").click(function () {
            $(this).html('还不对吗？');
            // alert($(this));
        });
    }
);