import axios from "axios";

const input = document.querySelector("form input");
const form = document.querySelector("form");
const eleText = document.getElementById("text");
const eleAgreement = document.getElementById("agreement");
const eleSubjectivity = document.getElementById("subjectivity")
const eleConfidence = document.getElementById("confidence")
const eleIrony = document.getElementById("irony")


const handleSubmit = async (event) => {
  event.preventDefault();
  console.log("it is working")
  // Create a FormData object to serialize the form data
  const formData = new FormData(form);

  try {
    const response = await axios.post('http://localhost:8080', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Handle the response as needed
    const {sample} = response.data;
    const {score_tag, agreement, subjectivity, confidence, irony} = sample;
    console.log(sample);
    eleAgreement.innerHTML = agreement;
    eleSubjectivity.innerHTML = subjectivity;
    eleConfidence.innerHTML = confidence;
    eleIrony.innerHTML = irony;
    eleText.innerHTML = score_tag;

  } catch (error) {
    // Handle errors, including network errors
    console.error("Error submitting form:", error.message);
  }
};

export { handleSubmit };
