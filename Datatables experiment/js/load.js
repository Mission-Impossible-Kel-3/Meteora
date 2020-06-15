$(document).ready(function()
{
    $.getJSON("../JSON files/test.json", function(array)
    {
        // console.log(array);
        $.each(array, function(index, data)
        {
            // console.log(data);
            $("#songTableBody").append("<tr>");
            $.each(data, function(key, value)
            {
                $("#songTableBody").append("<td>" + value + "</td>");
            });
            $("#songTableBody").append("</tr>");
        });
    })
});