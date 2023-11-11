const chartCanvas = document.getElementById("myChart");

const date = new Date();
const options = { weekday: "short" };
const abbreviatedDay = date.toLocaleDateString("en-US", options);

//Get JSON data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const labels = data.map((item) => item.day);
    const amounts = data.map((item) => item.amount);

    const backgroundColors = labels.map((day) =>
      day === abbreviatedDay.toLowerCase()
        ? "hsl(186, 34%, 60%)"
        : "hsl(10, 79%, 65%)"
    );

    new Chart(chartCanvas, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Amount",
            data: amounts,
            backgroundColor: backgroundColors,
            borderWidth: 1,
            borderRadius: 5,
            bordrSkipped: false,
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: false,
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  })
  .catch((error) => {
    console.log(error);
  });
