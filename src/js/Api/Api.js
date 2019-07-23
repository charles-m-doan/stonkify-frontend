export default function() {
	return new Api();
}

class Api {
	getRequest(location, callback) {
		fetch(location)
		  .then(response => response.json())
		  .then(callback)
		  .catch(err => console.log(err));
	  }
}

// -------------- DONNIE's CODE BELOW ----------------

// class Api {
//     getRequest(location, callback) {
//       fetch(location)
//         .then(response => response.json())
//         .then(callback)
//         .catch(err => console.log(err));
//     }
//   }
