// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const useKeys = function() {
  var array = ["a", "b", "c", "d", "e"]; 
  var iterateur = array.keys();
  // The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.
  console.log(iterateur.next());  // { value: 0, done: false }
  console.log(iterateur.next());  // { value: 1, done: false }
  console.log(iterateur.next());  // { value: 2, done: false }
  console.log(iterateur.next());  // { value: 3, done: false }
  console.log(iterateur.next());  // { value: 4, done: false }
  console.log(iterateur.next());  // { value: undefined, done: true }
}; 
useKeys(); // call the funtion 