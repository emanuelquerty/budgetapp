<script>
  import {
    income,
    expenses,
    remainingBudget,
    expensesToIncomePercentage,
    incomeList,
    expensesList,
  } from "../store";
  import { v4 as uuidv4 } from "uuid";

  let descriptionInputIsFocused = false;
  let priceInputIsFocused = false;
  let itemType = "income";
  let itemDescription = "";
  let itemPrice = 0;

  $: selectedClass = function getSelectedClass() {
    return itemType === "income"
      ? "income-selected-border"
      : "expense-selected-border";
  };

  function handleSubmit(event) {
    let item = { id: uuidv4(), itemDescription, itemPrice };
    if (itemType === "income") {
      $income += itemPrice;
      $incomeList = [item, ...$incomeList];
    } else {
      $expenses += itemPrice;
      $expensesList = [item, ...$expensesList];
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <select class="item-type" bind:value={itemType}>
    <option value="income" name="income">+ Income</option>
    <option value="expense" name="expense">- Expenses</option>
  </select>

  <input
    type="text"
    name="item-description"
    placeholder="Add description"
    id="item-description"
    class={descriptionInputIsFocused && selectedClass()}
    on:focus={() => (descriptionInputIsFocused = true)}
    on:blur={() => (descriptionInputIsFocused = false)}
    bind:value={itemDescription}
  />
  <input
    type="number"
    name="item-price"
    placeholder="Value"
    id="item-price"
    class={priceInputIsFocused && selectedClass()}
    on:focus={() => (priceInputIsFocused = true)}
    on:blur={() => (priceInputIsFocused = false)}
    bind:value={itemPrice}
  />
  <input class="check-mark {selectedClass()}" type="submit" value="&#10004;" />
</form>

<style>
  form {
    background-color: #eee;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  select,
  input {
    height: 2.5rem;
    margin-right: 1rem;
  }

  select {
    width: 6rem;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
    border-radius: 0.4rem;
    padding-left: 1rem;
    border: 0.07rem solid #ccc;
  }

  #item-description {
    width: 25rem;
    color: #000;
  }

  #item-price {
    width: 8rem;
    color: #000;
  }

  .income-selected-border {
    border: 2px solid #4db6ac;
    color: #4db6ac;
  }

  .expense-selected-border {
    border: 2px solid #e64a19;
    color: #e64a19;
  }

  .check-mark {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: 0 0.5rem;
    cursor: pointer;
  }
</style>
