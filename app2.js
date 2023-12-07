function savePreferences(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const colour = formData.get('colour');

    const preferences = {
        colour,
    };

    localStorage.setItem('preferences', JSON.stringify(preferences));
}

form.addEventListener('submit', savePreferences);

//1.) Declares function names 'savePreferences' that takes event object as perameter.
// Its purpose is to handle the saving of user processes
//2.) Prevents default behaviour (ie reloading)
//3.) Creates new instances of 'FormData' object using form element ('form'). 
//'FormData' object used to capture key/value pairs representing forms and their values
//4.) Retrives colour from formData and saves in variable 'colour'
//5.) Create object named 'preferences with colour key
//Its value is known by adding a ',' after it, therfore assigning the value form the const 'colour' to it
//6.) Stores users 'preferences' in the browser's local storage.
//'setItem' used to set a key:value pair where key is 'preferences'
//and value is JSON-stringified version of 'preferences' object
//'JSON.stringify' used to convert JavaScript object into a JSON string
//7.) Add event listener to form element, listening for 'submit' event and running 'savePreferences' when pressed,
// therefore storing user preferences in the 'localStorage'