const rWrapper = document.getElementById('rWrapper');

fetch('http://localhost:3000/categories')
  .then(response => response.json())
  .then(data => {
    const jsonData = data.categories;
    jsonData.forEach(item => {
      const categoryDiv = document.querySelector(`.${item.category}`);

      if (categoryDiv) {
        const scoreSpan = categoryDiv.querySelector('.r-c span');
        const iconImg = categoryDiv.querySelector('.l-c img');

        if (scoreSpan) {
          scoreSpan.textContent = item.score;
        }

        if (iconImg) {
          iconImg.src = item.icon;
          iconImg.alt = item.category;
        }
      }
    });
  })

  .catch(error => {
    console.error('Error:', error);
  });