<script>
  import {
    income,
    expenses,
    remainingBudget,
    expensesToIncomePercentage,
  } from "../store";

  let date = getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getDate() {
    let date = new Date();

    return {
      month: date.getMonth(),
      year: date.getFullYear(),
    };
  }
</script>

<header>
  <div class="available-budget">
    <p class="description">
      Available Budget in {months[date.month]}
      {date.year}
    </p>
    <p class="available">+ {$remainingBudget.toFixed(2)}</p>
  </div>

  <div class="box income">
    <span class="income-description">Income</span>
    <span class="income-amount">+ {$income.toFixed(2)}</span>
  </div>
  <div class="box expenses">
    <span class="expenses-description">Expenses</span>
    <div class="amt-perc-wrapper">
      <span class="expenses-amount">- {$expenses.toFixed(2)}</span>
      <span class="expenses-percentage"
        >{$expensesToIncomePercentage.toFixed(2)}%</span
      >
    </div>
  </div>
</header>

<style>
  header {
    height: 40vh;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url("../assets/header-image.webp");
    background-size: 100% 100%;
    color: #fff;
    text-align: center;
    padding-top: 1px;
  }

  .description {
    font-size: 1.2rem;
    margin: 2rem 0 1rem 0;
  }

  .available {
    font-size: 3.4rem;
    margin-bottom: 1rem;
    font-weight: lighter;
  }

  .box {
    width: 25rem;
    height: 2.8rem;
    margin: 0 auto;
  }

  .income {
    background-color: #4db6ac;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
  }

  .income-description,
  .expenses-description {
    text-transform: uppercase;
  }

  .expenses {
    background-color: #e64a19;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
  }

  .expenses-amount {
    margin-right: 1rem;
  }

  .expenses-percentage {
    background-color: #ff7043;
    padding: 0 0.5rem;
    border-radius: 0.2rem;
  }
</style>
