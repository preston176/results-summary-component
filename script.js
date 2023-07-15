const apiEndpoint = "http://localhost:3000/categories"
const display = document.querySelector("#rWrapper");
let avg = document.querySelector('#avg');

const getData = async () => {
  const res = await fetch (apiEndpoint);
  const data = await res.json()

  console.log(data);
  return data
}

const displayData = async () => {
  const payload = await getData();

  let dataDisplay = payload.map((object) => {
    const { category, score, icon } = object;
    const averageScore = calculateAverage([score]); // Pass the score as an array [score]
    console.log("Average score:", averageScore);
    avg.textContent = averageScore.toFixed(0);
    // console.log(score);
    return `<div class="${category}">
      <div class="l-c">
        <span><img src=${icon} alt="icon" /></span>
        <span>${category}</span>
      </div>
      <div class="r-c"><span>${score}</span> / 100</div>
    </div>`;
  }).join('');

  display.innerHTML = dataDisplay;
};

/* The `displayData()` function is responsible for fetching data from the API endpoint, processing the
data, and displaying it on the webpage. */
displayData();

// avg scores
const calculateAverage = (scores) => {
  if (!Array.isArray(scores) || scores.length === 0) {
    return 0; // Return 0 if the input is not an array or if the array is empty
  }

/* The code is calculating the average of an array of scores. */
  const sum = scores.reduce((total, score) => total + score, 0);
  const average = sum / scores.length;
  return average;
};

