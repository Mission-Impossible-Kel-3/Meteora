$(document).ready(function () {

    $.getJSON("https://mission-impossible-kel-3.github.io/Meteora/JSON%20files/regionalSongData.json", function (data)
        // $.getJSON("../JSON files/regionalSongData.json", function (data) 
        {
            var regionStatistic = [];
            var channelStatistic = [];

            console.log(data.data.length);
            $.each(data.data, function (i, song) {
                var l = 0;
                var found2 = false;
                // console.log(song.channel.name);
                while (l < channelStatistic.length && !found2) {
                    if (song.channel.name == channelStatistic[l])
                        found2 = true;
                    else
                        l++;
                }

                if (!found2)
                    channelStatistic.push(song.channel.name);

                $.each(song.regions, function (j, regionName) {
                    var found = false;
                    var k = 0;

                    while (k < regionStatistic.length && !found) {
                        if (regionName == regionStatistic[k].label) {
                            regionStatistic[k].y++;
                            found = true;
                        } else
                            k++;
                    }

                    if (!found)
                        regionStatistic.push({
                            label: regionName,
                            y: 1
                        });
                });
            });

            console.log(channelStatistic.length);

            $("#numberOfVideosListIndex").append('<span class="counter text-success">' + data.data.length + '</span>');
            $("#numberOfChannelsListIndex").append('<span class="counter text-purple">' + channelStatistic.length + '</span>');
            $("#numberOfRegionsListIndex").append('<span class="counter text-info">' + regionStatistic.length + '</span>');

            CanvasJS.addColorSet("customColorSet", [
                "#393f63",
                "#e5d8B0",
                "#ffb367",
                "#f98461",
                "#d9695f",
                "#e05850",
            ]);

            var options = {
                animationEnabled: true,
                colorSet: "customColorSet",
                data: [{
                    type: "doughnut",
                    innerRadius: "70%",
                    showInLegend: true,
                    legendText: "{label}",
                    indexLabel: "{label}: #percent%",
                    dataPoints: regionStatistic
                }],
                animationDuration: 800,
                animationEnabled: true,
                backgroundColor: "transparent",
                colorSet: "customColorSet",
                theme: "theme2",
                legend: {
                    fontFamily: "calibri",
                    fontSize: 14,
                    horizontalAlign: "left",
                    verticalAlign: "center",
                    itemTextFormatter: function (e) {
                        return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / activeUsers * 100) + "%";
                    }
                },
                title: {
                    dockInsidePlotArea: true,
                    fontSize: 55,
                    fontWeight: "normal",
                    horizontalAlign: "center",
                    verticalAlign: "center",
                    text: data.data.length
                }
            };

            var chart = new CanvasJS.Chart("chartContainer", options);
            chart.render();
        });

    // console.log(regionStatistic);

    // var regionStatistic = [
    //     { label: "Department Stores", y: 6492917 },
    //     { label: "Discount Stores", y: 7380554 },
    //     { label: "Stores for Men / Women", y: 1610846 },
    //     { label: "Teenage Specialty Stores", y: 950875 },
    //     { label: "All other outlets", y: 900000 }
    // ]

    // var options = {
    //     animationEnabled: true,
    //     data: [
    //         {
    //             type: "doughnut",
    //             innerRadius: "60%",
    //             showInLegend: true,
    //             legendText: "{label}",
    //             indexLabel: "{label}: #percent%",
    //             dataPoints: regionStatistic
    //         }
    //     ]
    // };

    // var chart = new CanvasJS.Chart("chartContainer", options);
    // chart.render();
    // $("#chartContainer").CanvasJSChart(options);
});