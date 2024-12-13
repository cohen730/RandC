<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import Hero from "../components/Hero.vue";
</script>

<template>
  <primary-template>
 <hero image="catering.jpg"
       headline="We Cater"
       sub-head="Let us cater your special events and celebrations!"
 />

<h4>Please fill the form to contact with any questions you may have.</h4>

  <div class="container">
    <form action="action_page.php">

      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your first and last name..">

      <label for="phone">Phone</label>
      <input type="text" id="phone" name="phone-number" placeholder="Enter the best number to contact you..">

      <label for="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Your email..">

      <label for="event-type">Event Type</label>
      <input type="text" id="event-type" name="event-type" placeholder="Enter your event type (e.g., birthday, corporate meeting)..">

      <label for="date">Date</label>
      <input type="text" id="date" name="date" placeholder="Date of event..">

      <label for="guest-count">Guest Count</label>
      <input type="text" id="guest-count" name="guest-count" placeholder="How many guests will be attending?">

      <label for="delivery-details">Delivery Details</label>
      <input type="text" id="delivery-details" name="delivery-details" placeholder="Enter your delivery address and preferred time..">

      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Tell us what items you would like .." style="height:200px"></textarea>

      <input type="submit" value="Submit">

    </form>
  </div>
  </primary-template>
</template>

<style scoped>
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 10px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical;/* Allow the user to vertically resize the textarea (not horizontally) */
  font-family: Avenir, sans-serif;
  font-size: 1rem;
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #EA9637;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #BD6500;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #11120C;
  padding: 20px;
}

</style>