// create Manager card
const generateManager = function (manager) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${manager.name}</h3>
              <i class="material-icons">local_cafe</i><h4>Manager</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="office">Office Number: ${manager.officeNumber}</p>
          </div>
      </div>
  </div>
  `;
}

// create Engineer card
const generateEngineer = function (engineer) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${engineer.name}</h3>
              <i class="material-icons">engineering</i><h4>Engineer</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="github">Github: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
          </div>
      </div>
  </div>
  `
}

// create Intern card 
const generateIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${intern.name}</h3>
              <i class="material-icons">school</i><h4>Intern</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
          </div>
  </div>
</div>
  `
};

// gets input data
generateHTML = (data) => {

  // array for page
  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 
      // call manager function
      if (role === 'Manager') {
          const managerCard = generateManager(employee);
          pageArray.push(managerCard);
      }
      // call engineer function
      if (role === 'Engineer') {
          const engineerCard = generateEngineer(employee);
          pageArray.push(engineerCard);
      }
      // call intern function 
      if (role === 'Intern') {
          const internCard = generateIntern(employee);
          pageArray.push(internCard);
      }
  }

  // joining strings 
  const employeeCards = pageArray.join('')

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards); 
  return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center w-75" id="team-cards">
                <!--Team Cards-->
                ${employeeCards}
            </div>
        </div>
    </main>
    
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>
`;
}
// export to index
module.exports = generateHTML; 