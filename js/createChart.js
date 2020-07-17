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

            // console.log(channelStatistic.length);

            regionStatistic.sort((a, b) => a.y - b.y);

            console.log(regionStatistic);

            $("#numberOfVideosListIndex").append('<span class="counter text-success">' + data.data.length + '</span>');
            $("#numberOfChannelsListIndex").append('<span class="counter text-purple">' + channelStatistic.length + '</span>');
            $("#numberOfRegionsListIndex").append('<span class="counter text-info">' + regionStatistic.length + '</span>');

            CanvasJS.addColorSet("customColorSet", [
                "#ffebee",
                "#ffebee",
                "#ffebee",
                "#ffcdd2",
                "#ffcdd2",
                "#ffcdd2",
                "#ef9a9a",
                "#ef9a9a",
                "#ef9a9a",
                "#ef9a9a",
                "#e57373",
                "#e57373",
                "#e57373",
                "#ef5350",
                "#ef5350",
                "#ef5350",
                "#f44336",
                "#f44336",
                "#f44336",
                "#f44336",
                "#f44336",
                "#e53935",
                "#e53935",
                "#e53935",
                "#d32f2f",
                "#d32f2f",
                "#d32f2f",
                "#c62828",
                "#c62828",
                "#c62828",
                "#b71c1c",
                "#b71c1c",
            ]);

            var options = {
                animationEnabled: true,
                colorSet: "customColorSet",
                width: 900,
                height: 600,
                axisY: {
                    tickThickness: 0,
                    lineThickness: 0,
                    valueFormatString: " ",
                    gridThickness: 0
                },
                axisX: {
                    tickThickness: 0,
                    lineThickness: 0,
                    labelFormatter: function () {
                        return " ";
                    }
                },
                data: [{
                    indexLabelFontSize: 12,
                    toolTipContent: "<span style=\"color:#62C9C3\">{label}:</span> <span style=\"color:#CD853F\"><strong>{y}</strong></span>",
                    indexLabelFontColor: "black",
                    indexLabelFontWeight: 500,
                    indexLabelFontFamily: "Rubik, sans-serif",
                    type: "bar",
                    // type: "doughnut",
                    // innerRadius: "70%",
                    // showInLegend: true,
                    legendText: "{label}",
                    indexLabel: "{label}",
                    dataPoints: regionStatistic
                }],
                animationDuration: 800,
                animationEnabled: true,
                backgroundColor: "transparent",
                colorSet: "customColorSet",
                theme: "theme2",
                // legend: {
                //     fontFamily: "calibri",
                //     fontSize: 14,
                //     horizontalAlign: "left",
                //     verticalAlign: "center",
                //     itemTextFormatter: function (e) {
                //         return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / activeUsers * 100) + "%";
                //     }
                // },
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
});