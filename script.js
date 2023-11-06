const chartCanvas = document.getElementById("myChart");

//Get JSON data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const labels = data.map((item) => item.day);
    const amounts = data.map((item) => item.amount);

    const myChart = new Chart("myChart", {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Amount",
            data: amounts,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  })
  .catch((error) => {
    console.log(error);
  });
