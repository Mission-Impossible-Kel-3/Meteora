$(document).ready(function () {
    $('#example').DataTable({
        "ajax": "../JSON files/test2.json",
        "columns": [
            {
                "data": "staff",
                "render": function(data, type, row, meta)
                {
                    return '<a href="' + data.link + '" target="_blank">' + data.name + '<a/>';
                }
            },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ]
    });
});