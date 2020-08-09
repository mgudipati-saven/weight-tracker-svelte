<script>
  import { db } from "../firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import { onMount, afterUpdate } from "svelte";

  import Chart from "chart.js";

  export let uid;

  const query = db
    .collection("weights")
    .where("uid", "==", uid)
    .orderBy("date");

  const weights = collectionData(query, "id").pipe(startWith([]));

  let data = [];

  const createChart = () => {
    var ctx = document.getElementById("myChart");
    $weights.forEach((wt) => {
      data.push({ x: wt.date.toDate(), y: wt.value });
    });
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Weight",
            data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "day",
              },
              ticks: {
                source: "data",
              },
            },
          ],
        },
      },
    });
  };

  afterUpdate(createChart);
</script>

<canvas id="myChart" width="400" height="500" />
