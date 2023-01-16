const jobForm = document.getElementById("post-job");
const jobListingSection = document.querySelector(".job-listing");

jobForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("job-title").value;
  const company = document.getElementById("company-name").value;
  const location = document.getElementById("location").value;
  const description = document.getElementById("job-description").value;

  const jobListing = document.createElement("section");
  jobListing.classList.add("job-listing");
  jobListing.innerHTML = `
        <h3>${title}</h3>
        <p>${company}</p>
        <p>${location}</p>
        <p>${description}</p>
        <a href="#">View Job</a>
    `;
  jobListingSection.appendChild(jobListing);
  // clear the form fields after submitting
  jobForm.reset();
});

// Fetch the JSON data from the server
fetch("jobs-data.json")
  .then((response) => response.json())
  .then((data) => {
    // Get the job listings container
    const jobListings = document.getElementById("job-listings");

    // Loop through the jobs array in the JSON data
    data.jobs.forEach((job) => {
      // Create a new job listing element
      const jobListing = document.createElement("section");
      jobListing.classList.add("job-listing");

      // Create the job title element
      const jobTitle = document.createElement("h3");
      jobTitle.textContent = job.title;

      // Create the company name element
      // const companyName = document.createElement("p");
      // companyName.textContent = job.company;

      const companyName = document.createElement("p");
      const companyBold = document.createElement("b");
      companyBold.textContent = job.company;
      companyName.appendChild(companyBold);

      // Create the location element
      // const location = document.createElement("p");
      // location.textContent = job.location;

      const location = document.createElement("p");
      const locationBold = document.createElement("b");
      locationBold.textContent = job.location;
      location.appendChild(locationBold);

      // Create the job description element
      const jobDescription = document.createElement("p");
      jobDescription.textContent = job.description;

      // Create the apply link element
      const applyLink = document.createElement("a");
      applyLink.textContent = "View Job";
      applyLink.href = job.apply_link;

      // Append the job title, company name, location, job description, and apply link elements to the job listing element
      jobListing.appendChild(jobTitle);
      jobListing.appendChild(companyName);
      jobListing.appendChild(location);
      jobListing.appendChild(jobDescription);
      jobListing.appendChild(applyLink);

      // Append the job listing element to the job listings container
      jobListings.appendChild(jobListing);
    });
  });

// Get the filter form
const filterForm = document.getElementById("job-filter");

// Add a submit event listener to the filter form
filterForm.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the keyword and location values from the form inputs
  const keyword = document.getElementById("keyword").value;
  const location = document.getElementById("location").value;

  // Get the job listings container
  const jobListings = document.getElementById("job-listings");

  // Remove all existing job listings
  while (jobListings.firstChild) {
    jobListings.removeChild(jobListings.firstChild);
  }

  // Fetch the JSON data from the server
  fetch("jobs-data.json")
    .then((response) => response.json())
    .then((data) => {
      // Filter the jobs array based on the keyword and location values
      const filteredJobs = data.jobs.filter((job) => {
        let match = true;
        if (
          keyword &&
          !job.title.toLowerCase().includes(keyword.toLowerCase())
        ) {
          match = false;
        }
        if (
          location &&
          !job.location.toLowerCase().includes(location.toLowerCase())
        ) {
          match = false;
        }
        return match;
      });

      // Loop through the filtered jobs array
      filteredJobs.forEach((job) => {
        // Create a new job listing element
        const jobListing = document.createElement("section");
        jobListing.classList.add("job-listing");

        // Create the job title element
        const jobTitle = document.createElement("h3");
        jobTitle.textContent = job.title;

        // Create the company name element
        const companyName = document.createElement("p");
        companyName.textContent = job.company;

        // Create the location element
        const location = document.createElement("p");
        location.textContent = job.location;

        // Create the job description element
        const jobDescription = document.createElement("p");
        jobDescription.textContent = job.description;

        // Create the apply link element
        const applyLink = document.createElement("a");
        applyLink.textContent = "View Job";
        applyLink.href = job.apply_link;

        // Append the job title, company name, location, job description, and apply link elements to the job listing element
        jobListing.appendChild(jobTitle);
        jobListing.appendChild(companyName);
        jobListing.appendChild(location);
        jobListing.appendChild(jobDescription);
        jobListing.appendChild(applyLink);

        // Append the job listing element to the job listings container
        jobListings.appendChild(jobListing);
      });
    });
});
