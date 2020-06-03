$(document).ready(function () {
    $('#example').DataTable({
        "ajax": "../JSON files/regionalSongData.json",
        "columns": [
            {
                "data": "video",
                "render": function (data, type, row, meta) 
                {
                    return '<a href="' + data.url + '" target="_blank">' + data.title + '<a/>';
                }
            },
            {
                "data": "channel",
                "render": function (data, type, row, meta) 
                {
                    return '<a href="' + data.url + '" target="_blank">' + data.name + '<a/>';
                }
            },
            { "data": "regions" }
        ]
    });
});