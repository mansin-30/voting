// Define the vote counts for each candidate
let votes = {
    Alice: 0,
    Bob: 0,
    Charlie: 0,
    David: 0
  };
  
  // Get references to HTML elements
  const voteButton = document.getElementById("voteButton");
  const results = document.getElementById("results");
  const aliceVotes = document.getElementById("aliceVotes");
  const bobVotes = document.getElementById("bobVotes");
  const charlieVotes = document.getElementById("charlieVotes");
  const davidVotes = document.getElementById("davidVotes");
  const loginSection = document.getElementById("loginSection");
  const adminPassword = document.getElementById("adminPassword");
  const loginButton = document.getElementById("loginButton");
  
  // Mock admin password
  const adminPasswordValue = "admin123";
  
  // Function to cast vote
  function castVote() {
    // Get the selected candidate
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
  
    if (!selectedCandidate) {
      alert("Please select a candidate to vote for.");
      return;
    }
  
    // Update the vote count for the selected candidate
    const candidateName = selectedCandidate.value;
    votes[candidateName]++;
  
    // Hide the voting section after voting
    document.getElementById("votingSection").style.display = "none";
  
    // Show the results button after voting (only admin can see results)
    alert("Vote cast successfully!");
  
    // Disable further voting
    voteButton.disabled = true;
  }
  
  // Function to show the results after admin login
  function showResults() {
    aliceVotes.textContent = votes.Alice;
    bobVotes.textContent = votes.Bob;
    charlieVotes.textContent = votes.Charlie;
    davidVotes.textContent = votes.David;
    
    // Show the results
    results.style.display = "block";
  }
  
  // Admin login verification
  loginButton.addEventListener("click", function() {
    const enteredPassword = adminPassword.value;
  
    if (enteredPassword === adminPasswordValue) {
      // Hide login section and show results
      loginSection.style.display = "none";
      showResults();
    } else {
      alert("Invalid password. Please try again.");
    }
  });
  
  // Event listener for the vote button
  voteButton.addEventListener("click", castVote);
  
  // Display the login form for the admin when the page loads
  loginSection.style.display = "block";
  