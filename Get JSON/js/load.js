$(document).ready(function()
{
    $.getJSON("../JSON files/test.json", function(array)
    {
        console.log(array);
        $.each(array, function(index, data)
        {
            console.log(data);
            $("#bar").append("<tr>");
            $.each(data, function(key, value)
            {
                $("#bar").append("<td>" + value + "</td>");
            });
            $("#bar").append("</tr>");
        });
    });
});