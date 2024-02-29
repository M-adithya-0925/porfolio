// Sample data for skills
const skillsData = {
  labels: ['Full stack design', 'Team management', 'data handling', 'Machine learning(Python)', 'RPA - UIpath', 'Promting'],
  datasets: [{
    label: 'Skill Level',
    data: [60, 85, 50, 45, 70, 90],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(15, 120, 200, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(53, 302, 155, 1)'
    ],
    borderWidth: 1
  }]
};

// Sample data for daily works
const dailyWorksData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [{
    label: 'Hours Worked',
    data: [8, 7, 8, 9, 7, 6, 5],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

// Function to create skills chart
function createSkillsChart() {
  var ctx = document.getElementById('skillsChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: skillsData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Function to create daily works chart
function createDailyWorksChart() {
  var ctx = document.getElementById('dailyWorksChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: dailyWorksData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Call functions to create charts when the page loads
window.onload = function() {
  createSkillsChart();
  createDailyWorksChart();
};
