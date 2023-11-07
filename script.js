const chartCanvas = document.getElementById("myChart");

//Get JSON data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const labels = data.map((item) => item.day);
    const amounts = data.map((item) => item.amount);

    new Chart(chartCanvas, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Amount",
            data: amounts,
            backgroundColor: "hsl(10, 79%, 65%)",
            borderWidth: 1,
            borderRadius: 5,
            bordrSkipped: false,
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
