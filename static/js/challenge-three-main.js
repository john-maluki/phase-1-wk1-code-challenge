/**
 * Challenge 3: Net Salary Calculator (Toy Problem)
 *
 * Write a program whose major task is to calculate an individual’s Net Salary by
 * getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax),
 * NHIFDeductions, NSSFDeductions, gross salary, and net salary.
 *
 * NB: Use KRA, NHIF, and NSSF values provided in the link below.
 * https://www.aren.co.ke/payroll/taxrates.htm
 * https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye
 */
const basic_salary_node = document.querySelector("#basic-salary");
const contribution_benefits_node = document.querySelector(
  "#contribution-benefits"
);
const personal_tax_relief_input_node = document.querySelector(
  "#personal-tax-relief"
);

const gross_salary_node = document.querySelector("#gross-salary");
const nhif_deduction_node = document.querySelector("#nhif-deduction");
const nssf_deduction_node = document.querySelector("#nssf-deduction");
const personal_tax_relief_node = document.querySelector(
  "#personal-tax-relief-out"
);
const net_salary_node = document.querySelector("#net-salary");
const paye_node = document.querySelector("#paye");
const tax_button_node = document.querySelector("#calcaculate-tax-button");

const set_element_text = (element, msg) => {
  span = element.querySelector("span");
  span.textContent = msg;
};

const formattedAmount = (amt) => amt.toLocaleString("en-US");

const get_personal_tax_relief = () =>
  Number.parseInt(personal_tax_relief_input_node.value);

const calculate_nhif_deduction_amount = (amount) => {
  let nhif_amount;

  switch (true) {
    case amount <= 5999:
      nhif_amount = 150;
      break;

    case amount >= 6000 && amount <= 7999:
      nhif_amount = 300;
      break;

    case amount >= 8000 && amount <= 11999:
      nhif_amount = 400;
      break;

    case amount >= 12000 && amount <= 14999:
      nhif_amount = 500;
      break;
    case amount >= 15000 && amount <= 19999:
      nhif_amount = 600;
      break;
    case amount >= 20000 && amount <= 24999:
      nhif_amount = 750;
      break;
    case amount >= 25000 && amount <= 29999:
      nhif_amount = 850;
      break;
    case amount >= 30000 && amount <= 34999:
      nhif_amount = 900;
      break;
    case amount >= 35000 && amount <= 39999:
      nhif_amount = 950;
      break;
    case amount >= 40000 && amount <= 44999:
      nhif_amount = 1000;
      break;
    case amount >= 45000 && amount <= 49999:
      nhif_amount = 1100;
      break;
    case amount >= 50000 && amount <= 59999:
      nhif_amount = 1200;
      break;
    case amount >= 60000 && amount <= 69999:
      nhif_amount = 1300;
      break;
    case amount >= 70000 && amount <= 79999:
      nhif_amount = 1400;
      break;
    case amount >= 80000 && amount <= 89999:
      nhif_amount = 1500;
      break;
    case amount >= 90000 && amount <= 99999:
      nhif_amount = 1600;
      break;
    default:
      nhif_amount = 1700;
      break;
  }
  return nhif_amount;
};

const calculate_nssf_deduction_amount = () => {
  return 200;
};

const calculate_gross_salary = () => {
  // adding basic salary and benefits allowances gives result to
  // goss salary
  const gross_salary_amt =
    Number.parseInt(basic_salary_node.value) +
    Number.parseInt(contribution_benefits_node.value);

  return gross_salary_amt;
};

const calculate_paye = () => {
  const gross_salary_amt = calculate_gross_salary();
  const nhif_amt = calculate_nhif_deduction_amount(gross_salary_amt);
  const nssf_amt = calculate_nssf_deduction_amount();
  const tax_relief_amt = get_personal_tax_relief();

  const paye_amt =
    (gross_salary_amt - (nhif_amt + nssf_amt)) * 0.3 - tax_relief_amt;

  if (paye_amt <= 0) {
    return 0.0;
  } else {
    return paye_amt;
  }
};

const calculate_net_salary = () => {
  const gross_salary_amt = calculate_gross_salary();
  const nhif_amt = calculate_nhif_deduction_amount(gross_salary_amt);
  const nssf_amt = calculate_nssf_deduction_amount();
  const paye_amt = calculate_paye();

  const net_salary_amt = gross_salary_amt - (nhif_amt + nssf_amt + paye_amt);
  return net_salary_amt;
};

const calculate_all_amount_handler = () => {
  const gross_salary_amt = calculate_gross_salary();
  const nhif_amt = calculate_nhif_deduction_amount(gross_salary_amt);
  const nssf_amt = calculate_nssf_deduction_amount();
  const paye_amt = calculate_paye();
  const net_salary_amt = calculate_net_salary();

  set_element_text(gross_salary_node, formattedAmount(gross_salary_amt));
  set_element_text(nhif_deduction_node, formattedAmount(nhif_amt));
  set_element_text(nssf_deduction_node, formattedAmount(nssf_amt));
  set_element_text(paye_node, formattedAmount(paye_amt));
  set_element_text(net_salary_node, formattedAmount(net_salary_amt));
};

const init = () => {
  // initialize span nested in h1 because the amount is constant
  // and known
  set_element_text(personal_tax_relief_node, get_personal_tax_relief());
};

tax_button_node.addEventListener("click", calculate_all_amount_handler);

window.onload = init;
