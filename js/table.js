$(document).ready(function () 
{
    $('#example').DataTable(
    {
        "ajax": "../JSON files/regionalSongData.json",
        "columns":
        [
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
            { 
                "data": "regions" 
            },
            {
                "data": "annotationDate",
                "render": function(data, type, row, meta)
                {
                    var dateSplit = data.split('-');

                    if (type === "display" || "type" == "filter")
                    {
                        var month = "";

                        switch (dateSplit[1])
                        {
                        case "01":
                            month = "Januari";
                            break;
                        case "02":
                            month = "Februari";
                            break;
                        case "03":
                            month = "Maret";
                            break;
                        case "04":
                            month = "April";
                            break;
                        case "05":
                            month = "Mei";
                            break;
                        case "06":
                            month = "Juni";
                            break;
                        case "07":
                            month = "Juli";
                            break;
                        case "08":
                            month = "Agustus";
                            break;
                        case "09":
                            month = "September";
                            break;
                        case "10":
                            month = "Oktober";
                            break;
                        case "11":
                            month = "November";
                            break;
                        case "12":
                            month = "Desember";
                            break;
                        default:
                            break;
                        }

                        return dateSplit[0] + ' ' + month + ' ' + dateSplit[2];
                    }
                    else if (type == "sort")
                    {
                        return dateSplit[2] + dateSplit[1] + dateSplit[0];
                    }
                    else
                    {
                        return data;
                    }
                }
            }
        ]
    });
});