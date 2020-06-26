const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  
  function fetchWebsite(url) {
    fetch(url)
    .then(resp => resp.json())
    .then(json => addInfo(json.results))
  }

  function addInfo(jsonResultsArray) {

    // BUTTON IS CLICKED -> append info to<h3>,<h4>
    jsonResultsArray.forEach(array => {
    
      const firstName = array.name.first
      const lastName = array.name.last
      const email = array.email
      const streetName = array.location.street.name
      const streetNumber = array.location.street.number
      const city = array.location.city
      const state = array.location.state
      const postCode = array.location.postcode
      const phone = array.cell
      const date = array.dob.date
      console.log(`${city}`)
      document.getElementById('fullname').textContent = `${firstName} ${lastName}`
      document.getElementById('email').textContent = `${email}`
      document.getElementById('street').textContent = `${streetNumber} ${streetName}`
      document.getElementById('city').textContent = `${city}`
      document.getElementById('state').textContent = `${state}`
      document.getElementById('postcode').textContent = `${postCode}`
      document.getElementById('phone').textContent = `${phone}`
      document.getElementById('date_of_birth').textContent = `${date}`
    
    })
    }

    // document.querySelector('.btn.btn-primary').style
    
    // primary vs. success changes button in index html

    const listenerBase = document.querySelector('div.row.align-items-end')
    listenerBase.addEventListener('click', function(e) {
      if (e.target.className === 'btn btn-primary') {
        fetchWebsite('https://randomuser.me/api/')

      





    })

  
   

});


// <div class="container">
// <div class="row align-items-start">

//   <div class="col">

//     <img src="Profile Picture Url" alt="" id="profile_picture"/>

//   </div>

//   <div class="col">

//     <label for="fullname"> <!-- Include first name, last name AND title -->
//       Name:
//     </label>
//     <h3 id="fullname"></h3>
  
//   </div>

//   <div class="col">

//     <label for="email">
//       Email:
//     </label>
//     <h4 id="email"></h4>

//   </div>
// </div>

// <div class="row align-items-center">
//   <div class="col">

//     <label for="street">Street:</label>
//     <h4 id="street"></h4>

//     <label for="city">City:</label>
//     <h4 id="city"></h4>

//     <label for="state">State:</label>
//     <h4 id="state"></h4>

//     <label for="postcode">Post Code:</label>
//     <h4 id="postcode"></h4>

//   </div>

//   <div class="col">

//     <label for="phone">Phone:</label>
//     <h4 id="phone"></h4>

//     <label for="cell">Cell:</label>
//     <h4 id="cell"></h4>

//   </div>

//   <div class="col">

//     <label for="date_of_birth">Date of Birth:</label>
//     <h4 id="date_of_birth"></h4>

//   </div>

// </div>

//  <div class="row align-items-end">
//   <div class="col">
//   </div>
//   <div class="col">
//     <button type="button" class="btn btn-primary">Press me to add a new person!</button>
//   </div>
//   <div class="col">
//   </div>
// </div>
// </div> }


// const listenerBase = document.getElementsByClassName('row.align-items-end')[0]

// const = button 

