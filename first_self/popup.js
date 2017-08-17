
console.log('first log')
function jq () {
        $("div#click").click(function () {
            $(this).html('还不对吗？');
        });
    }
document.addEventListener('DOMContentLoaded',
    $(document).ready(jq));