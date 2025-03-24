document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("bk_form_1")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      let checkin = document.getElementById("checkin").value;
      let checkout = document.getElementById("checkout").value;
      let guests = document.getElementById("guests");
      let today = new Date();

      //Errors
      let guestError1 = document.getElementById("guestError1");
      let guestError2 = document.getElementById("guestError2");
      let checkin_error_1 = document.getElementById("checkin_error_1");
      let checkin_error_2 = document.getElementById("checkin_error_2");
      // Declare point variables
      let email_point = 0;
      let guest_point = 0;
      let checkin_point_1 = 0;
      let checkin_point_2 = 0;
      let checkout_point_1 = 0;
      let checkout_point_2 = 0;

      if (bk_email.value.includes("@")) {
        let email_point = 1;
      } else {
        email_error_1.style.display = "block";
        let email_point = 0;
      }

      //Check if date is empty
      if (checkin === null || checkout === null) {
      }

      //check if guests is less than 1 or more than 8
      if (guests.value < 1 || guests.value > 8) {
        errorShow();
        console.log("error, too many guests" + guests);
      }

      //check if checkin date is beyond six months

      const raw_sixMonthsLater = new Date();
      raw_sixMonthsLater.setMonth(today.getMonth() + 6);
      // raw_threeWeeksLater.setDate(che.getDate()+ 21)
      // Format date in YYYY-MM-DD
      function formatDate(d) {
        const year = d.getFullYear();
        const month = (d.getMonth() + 1).toString().padStart(2, "0"); // Add leading zero for single-digit months
        const day = d.getDate().toString().padStart(2, "0"); // Add leading zero for single-digit days
        return `${year}-${month}-${day}`;
      }
      const sixMonthsLater = formatDate(raw_sixMonthsLater);
      const today1 = formatDate(today);
      //check check in
      if (checkin > sixMonthsLater) {
        checkin_error_2.style.display = "block";
        let checkin_point_1 = 0.5;
      } else {
        checkin_error_2.style.display = "none";
        let checkin_point_1 = 0;
      }

      if (checkin < today1) {
        checkin_error_1.style.display = "block";
        let checkin_point_2 = 0.5;
      } else {
        checkin_error_1.style.display = "none";
        let checkin_point_2 = 0;
      }

      //check out
      //check date is greater than 3 weeks
      function addThreeWeeksToDate(givenDate) {
        const newDate = new Date(givenDate);
        newDate.setDate(newDate.getDate() + 21); // Adds 21 days (3 weeks)
        return newDate;
      }

      function addOneDayToDate(givenDate) {
        const newDate = new Date(givenDate);
        newDate.setDate(newDate.getDate() + 1); // Adds 21 days (3 weeks)
        return newDate;
      }
      const threeWeeksLater = addThreeWeeksToDate(checkin);
      const tomorrow = addOneDayToDate(checkin);

      if (checkout > formatDate(threeWeeksLater)) {
        checkout_error_2.style.display = "block";
        let checkout_point_1 = 0.5;
      } else {
        console.log("Your checkout is within 3 weeks from the check-in date.");
        let checkout_point_1 = 0;
      }

      if (checkout == checkin) {
        checkout_error_1.style.display = "block";
        let checkout_point_2 = 0.5;
      } else {
        checkout_error_1.style.display = "none";
        let checkout_point_1 = 0;
      }

      //check if guests are greater 8 or less than 1
      function errorShow() {
        if (guests.value <= -1) {
          guestError1.style.display = "block";
          guests.value = 1;
        } else if (guests.value > 8) {
          guestError2.style.display = "block";
          guests.value = 1;
        } else {
          guestError1.style.display = "none";
          guestError2.style.display = "none";
        }
      }

      console.log("Total Points:");
      console.log(
          email_point +
          guest_point +
          checkin_point_1 +
          checkin_point_2 +
          checkout_point_1 +
          checkout_point_2
      );

      window.location.href = 'rooms.html';
  });

  if (guests.value == null) {
    alert("Please enter a number");
  }

  guests.addEventListener("change", function () {
    console.log("changed");
    errorShow();
    guests.innerHTML = "0";
  });

  function errorShow() {
    if (guests.value <= -1) {
      guestError1.style.display = "block";
      guests.value = 1;
    } else {
      guestError1.style.display = "none";
    }
  }




});
