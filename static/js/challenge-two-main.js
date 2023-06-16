/**
 * Challenge 2: Speed Detector (Toy Problem)
 *
 * Here we need to write a program that takes as input the speed of a car
 * e.g 80. If the speed is less than 70, it should print `Ok`. Otherwise,
 * for every 5 km/s above the speed limit (70), it should give the driver
 * one demerit point and print the total number of demerit points.
 *
 * `For example, if the speed is 80, it should print: “Points: 2”. If the
 *  driver gets more than 12 points, the function should print: “License suspended”.`
 */

const speed_input = document.querySelector("#car-speed");
const check_speed_button = document.querySelector("#check-speed");
const speed_element = document.querySelector("#speed");

const output_speed = (msg) => {
  // Change the content of this element based on the vaue
  // of the input element
  speed_element.textContent = msg;
};

const get_speed_value = () => {
  const speed_value = Number.parseInt(speed_input.value);
  if (isNaN(speed_value)) {
    output_speed("Unkown");
  } else {
    return speed_value;
  }
};

/**
 * Determines the points from the value of speed
 * provided
 */
const determine_speed_handler = () => {
  const speed_value = get_speed_value();

  if (isNaN(speed_value)) {
    output_speed("Unkown");
  } else {
    if (speed_value <= 70) {
      output_speed("Ok");
    } else {
      const point_value = Math.ceil((speed_value - 70) / 5);
      if (point_value > 12) {
        output_speed("License suspended");
      } else {
        output_speed(`Points: ${point_value}`);
      }
    }
  }
};

check_speed_button.addEventListener("click", determine_speed_handler);
