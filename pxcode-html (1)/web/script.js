// Function to allow only letters in the textarea
function allowOnlyLetters(event) {
    const textarea = event.target;
    console.log("Before: ", textarea.value);  // Debugging input value before changes
    textarea.value = textarea.value.replace(/[^a-zA-Z\s]/g, '');  // Allow only letters and spaces
    console.log("After: ", textarea.value);   // Debugging input value after changes
}
