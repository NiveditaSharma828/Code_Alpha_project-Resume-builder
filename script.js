document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var university = document.getElementById("university").value;
    var degree = document.getElementById("degree").value;
    var gradYear = document.getElementById("gradYear").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var company = document.getElementById("company").value;
    var jobDescription = document.getElementById("jobDescription").value;
  
    // Generate the resume HTML
    var resumeHTML = "<h2>Personal Information</h2>" +
                     "<p><strong>Name:</strong> " + fullName + "</p>" +
                     "<p><strong>Email:</strong> " + email + "</p>" +
                     "<p><strong>Phone:</strong> " + phone + "</p>" +
                     "<p><strong>Address:</strong> " + address + "</p>" +
                     "<h2>Education</h2>" +
                     "<p><strong>University:</strong> " + university + "</p>" +
                     "<p><strong>Degree:</strong> " + degree + "</p>" +
                     "<p><strong>Graduation Year:</strong> " + gradYear + "</p>" +
                     "<h2>Experience</h2>" +
                     "<p><strong>Job Title:</strong> " + jobTitle + "</p>" +
                     "<p><strong>Company:</strong> " + company + "</p>" +
                     "<p><strong>Job Description:</strong> " + jobDescription + "</p>";
  
    // Display the generated resume
    document.getElementById("resumeOutput").innerHTML = resumeHTML;
  });
  