// Fetch JSON data from the server
fetch('/data')
  .then((response) => {
    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse JSON data
  })
  .then((data) => {
    const section = document.getElementById('data-section'); // Target the section in the HTML
    const persons = data.Person;

    // Loop through each person in the JSON
    for (const name in persons) {
      const personData = persons[name][0];

      // Create an article element dynamically
      const article = document.createElement('article');

      // Add a heading with the name
      const heading = document.createElement('h2');
      heading.textContent = name;

      // Add a paragraph with the information
      const info = document.createElement('p');
      info.textContent = personData.information;

      // Add a paragraph with the age
      const age = document.createElement('p');
      age.textContent = `Age: ${personData.Age}`;

      // Add a paragraph with the school or job
      const schoolOrJob = document.createElement('p');
      schoolOrJob.textContent = personData.School
        ? `School: ${personData.School}`
        : `Job: ${personData.Job}`;

      // Add an image
      const img = document.createElement('img');
      img.src = personData.image;
      img.alt = name;

      // Append all elements to the article
      article.appendChild(heading);
      article.appendChild(info);
      article.appendChild(age);
      article.appendChild(schoolOrJob);
      article.appendChild(img);

      // Append the article to the section
      section.appendChild(article);
    }
  })
  .catch((error) => {
    // Log any errors
    console.error('Error fetching JSON data:', error);
  });
