$(async function () {
    //get the pie chart canvas
    await loadDataChart("pie-chartcanvas-1", "C");
    await loadDataChart("pie-chartcanvas-2", "D");
});

function loadDataChart(el_id, partisi) {
    $.get("../php/?partisi=" + partisi, (result) => {
        result = JSON.parse(result);
        let data = [result.used_int, result.free_int];
        let label = ["Used : " + result.used, "Free : " + result.free];
        console.log("data", data);
        let ctx1 = $("#" + el_id);
        //pie chart data
        var data1 = {
            labels: label,
            datasets: [
                {
                    label: "Partisi " + partisi,
                    data: data,
                    backgroundColor: ["#DEB887", "#A9A9A9"],
                    borderColor: ["#CDA776", "#989898"],
                    borderWidth: [1, 1],
                },
            ],
        };

        //options
        var options = {
            responsive: true,
            title: {
                display: true,
                position: "top",
                text: "Pie Chart",
                fontSize: 18,
                fontColor: "#111",
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    fontColor: "#333",
                    fontSize: 16,
                },
            },
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.datasets[0].data[
                            context.dataIndex
                        ];
                    },
                },
            },
        };

        //create Chart class object
        let cart = new Chart(ctx1, {
            type: "pie",
            data: data1,
            options: options,
        });
    });
}
