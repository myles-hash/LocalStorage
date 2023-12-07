const form = document.querySelector('form');
// //Retrives form from html

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const colour = formData.get('colour');

    localStorage.setItem('colour',colour);
});

//1.) Adds event listener to our form
//2.) When 'submit' is pressed, run function definied with 'event' parameter
//3.) Prevent the default behaviour of the submission of the form (reloading the page)
//4.) Defines new variable for the data in the form using 'form' as a perameter.
// 'New' keyword is for creating new object
//5.) Retrives value associated with colour key from 'formData' object
//6.) Stores retrived colour in browsers local storage. Key is named 'colour'

const colour = localStorage.getItem('colour');
// // retrives value from 'colour' key in local storage

if (colour) {
    const input = document.querySelector('input');
    input.value = colour;
}

//1.) If the constant colour exists (which it will if its in local storage)
//2.) Defines variable for html type of 'input'
//3.) Makes the value of the input the colour saved in local storage

