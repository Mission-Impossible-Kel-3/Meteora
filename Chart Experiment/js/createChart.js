$(document).ready(function () {
    var statistic = []

    $.getJSON("../JSON files/regionalSongData.json", function (data) 
    {
        $.each(data.data, function(i, song) 
        {
            $.each(song.regions, function(j, regionName)
            {
                var found = false;
                var k = 0;

                while (k < statistic.length && !found)
                {
                    // if (regionName.localCompare(statistic[k].label) == 0)
                    if (regionName == statistic[k].label)
                    {
                        statistic[k].y++;
                        found = true;
                    }
                    else
                    {
                        k++;
                    }
                }

                if (!found)
                {
                    statistic.push({label:regionName, y:1});
                }
                
                // console.log(regionName);
            });
        });
    });

    console.log(statistic);

    // var statistic = [
    //     { label: "Department Stores", y: 6492917 },
    //     { label: "Discount Stores", y: 7380554 },
    //     { label: "Stores for Men / Women", y: 1610846 },
    //     { label: "Teenage Specialty Stores", y: 950875 },
    //     { label: "All other outlets", y: 900000 }
    // ]

    var options = {
        animationEnabled: true,
        title: {
            text: "ACME Corporation Apparel Sales"
        },
        data: [
            {
                type: "doughnut",
                innerRadius: "60%",
                showInLegend: true,
                legendText: "{label}",
                indexLabel: "{label}: #percent%",
                dataPoints: statistic
            }
        ]
    };
    $("#chartContainer").CanvasJSChart(options);
});