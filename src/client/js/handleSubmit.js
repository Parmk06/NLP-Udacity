import axios from "axios";
import { isValidUrl } from "./checkURL";

/**
 * Validates the user input before making the API call.
 * @param {HTMLFormElement} form 
 * @returns {boolean} 
 */
const validateInput = (form) => {
    // Perform your specific input validations
    const eleUrl = form.querySelector("#url");

    // Check if the URL is valid using the isValidUrl function
    if (eleUrl && !isValidUrl(eleUrl.value)) {
        console.error("Invalid URL");
        return false;
    }
    return true;
};

/**
 * Handles the form submission, including input validation and API call.
 * @param {Event} event 
 */
const handleSubmit = async (event) => {
    const form = document.querySelector("form");
    const eleText = document.getElementById("text");
    const eleAgreement = document.getElementById("agreement");
    const eleSubjectivity = document.getElementById("subjectivity");
    const eleConfidence = document.getElementById("confidence");
    const eleIrony = document.getElementById("irony");

    event.preventDefault();

    // Validate user input
    if (!validateInput(form)) {
        console.error("Input validation failed");
        return;
    }

    // Create a FormData object to serialize the form data
    const formData = new FormData(form);

    try {
        const response = await axios.post("http://localhost:8080", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Handle the API response as needed
        const { sample } = response.data;
        const { score_tag, agreement, subjectivity, confidence, irony } = sample;
        eleAgreement.innerHTML = agreement;
        eleSubjectivity.innerHTML = subjectivity;
        eleConfidence.innerHTML = confidence;
        eleIrony.innerHTML = irony;
        eleText.innerHTML = score_tag;
    } catch (error) {
        console.error("Error submitting form:", error.message);
    }
};

export { handleSubmit };