/**
 * Challenge 1: Student Grade Generator (Toy Problem)
 *
 * In this challenge, we need to write a program that requests user to input
 * student marks. The input should be between 0 and 100. Then output the correct grade:
 * A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E - less 40.
 */

const mark_input = document.querySelector("#mark");
const check_grade_button = document.querySelector("#check-grade");
const grade_element = document.querySelector("#grade");

const get_mark = () => {
  const mark = Number.parseInt(mark_input.value);
  if (isNaN(mark)) {
    console.log("Unkown");
    print_output("Unkown");
  } else {
    return mark;
  }
};

/**
 * Evaluates a grade based on provided mark
 */
const determine_grade_handler = () => {
  const mark = get_mark();

  // validate mark range
  if (mark >= 0 && mark <= 100) {
    if (mark > 79 && mark <= 100) {
      print_output("A");
    } else if (mark >= 60 && mark <= 79) {
      print_output("B");
    } else if (mark >= 49 && mark < 60) {
      print_output("C");
    } else if (mark >= 40 && mark < 49) {
      print_output("D");
    } else {
      print_output("E");
    }
  } else {
    print_output("Invalid");
  }
};

const print_output = (msg) => {
  // Change the content of this element based on the vaue
  // of the input element
  grade_element.textContent = msg;
};

check_grade_button.addEventListener("click", determine_grade_handler);
