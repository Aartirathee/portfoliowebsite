// Set the width of the progress bar dynamically
const skills = document.querySelectorAll('.skill-progress');
skills.forEach(skill => {
  const width = skill.parentNode.querySelector('.skill-percent').textContent;
  skill.style.setProperty('--progress-width', width);
});

function submitForm() {
  var name = document.getElementsByName("name")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var suggestion = document.getElementById("suggestion").value;

  var data = {
    values: [[name, email, suggestion]]
  };

  fetch(
    'https://sheets.googleapis.com/v4/spreadsheets/{SPREADSHEET_ID}/values/{SHEET_NAME}:append?valueInputOption=USER_ENTERED',
    {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer {ACCESS_TOKEN}',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
  .then(response => response.json())
  .then(result => {
    console.log('Data submitted successfully!');
    // Additional actions after successful submission
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error
  });
}
