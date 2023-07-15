const apiEndpoint = "https://my-json-server.typicode.com/preston176/results-summary-component/categories"
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

  let scores = payload.map((object) => object.score); // Extracting all the scores into a separate array

  let dataDisplay = payload.map((object) => {
    const { category, score, icon } = object;
    const averageScore = calculateAverage(scores); // Pass the entire scores array
    // console.log("Average score:", averageScore);
    avg.textContent = averageScore.toFixed(0); // display avg on html
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

displayData();

// avg scores
const calculateAverage = (scores) => {
  if (!Array.isArray(scores) || scores.length === 0) {
    return 0; // Return 0 if the input is not an array or if the array is empty
  }

  const sum = scores.reduce((total, score) => total + score, 0);
  const average = sum / scores.length;
  return average;
};

