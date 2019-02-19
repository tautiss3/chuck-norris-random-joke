// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../hello.txt
xhr.open('GET', 'https://api.chucknorris.io/jokes/categories');

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    // if it's not 200, consider it an error
    alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
  } else {
    // show the result
    console.log(xhr.responseText); // responseText is the server response
    let masyvas = JSON.parse(xhr.responseText);
    let categories = document.querySelector('.categories')
    for (let i = 0; i < masyvas.length; i++) {
      categories.innerHTML += "<button type='button' onclick='showCategoryJoke(this)'>" + masyvas[i] + "</button>";
      
    }

  }
};

let showCategoryJoke = (button) =>{
  console.log(button.innerText)
  
  let xhr_trys = new XMLHttpRequest();

  xhr_trys.open('GET', 'https://api.chucknorris.io/jokes/random?category=' + button.innerText);
  xhr_trys.send();


  xhr_trys.onload = function() {
    if (xhr_trys.status != 200) { // analyze HTTP status of the response
      // if it's not 200, consider it an error
      alert(xhr_trys.status + ': ' + xhr_trys.statusText); // e.g. 404: Not Found
    } else {
      // show the result
      console.log(xhr_trys.responseText); // responseText is the server response
      let duomenys = JSON.parse(xhr_trys.responseText);

      document.querySelector('.randomJoke').innerText = duomenys.value;
  
    }
  };
  
  

}

// let search = () =>{
//   let searchValue = document.querySelector('.categories').value;

//   let xhr_du = new XMLHttpRequest();

//   xhr_du.open('GET', 'https://api.chucknorris.io/jokes/random');
//   xhr_du.send();

//   // 4. This will be called after the response is received
//   xhr_du.onload = function() {
//       if (xhr_du.status != 200) { // analyze HTTP status of the response
//           // if it's not 200, consider it an error
//           alert(xhr_du.status + ': ' + xhr_du.statusText); // e.g. 404: Not Found
//       } else {
//           // show the result
//           let gautiJuokeliai = JSON.parse(xhr_du.responseText)
//           console.log(gautiJuokeliai.result); // responseText is the server response
//           let manoSarasas = document.querySelector('.randomJoke');
//           for(let i = 0; i < gautiJuokeliai.result.length; i++){
//               manoSarasas.innerHTML += '<li>'+ gautiJuokeliai.result[i].value + '</li>';
//           }
//       }
//   };
// }
