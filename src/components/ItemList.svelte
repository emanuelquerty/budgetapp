<script>
  import { incomeList, expensesList } from "../store";
  import Item from "./item.svelte";
</script>

<div class="wrapper">
  <div class="income-list">
    <h2>Income</h2>
    {#each $incomeList as item (item.id)}
      <Item
        description={item.itemDescription}
        price={item.itemPrice}
        itemType="income"
      />
    {/each}
  </div>
  <div class="expense-list">
    <h2>Expenses</h2>
    {#each $expensesList as item (item.id)}
      <Item
        description={item.itemDescription}
        price={item.itemPrice}
        itemType="expense"
      />
    {/each}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    padding-top: 3rem;
  }

  h2 {
    text-transform: uppercase;
    font-weight: normal;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .income-list {
    margin-right: 3.5rem;
  }

  .income-list h2 {
    color: #4db6ac;
  }

  .expense-list h2 {
    color: #e64a19;
  }

  .income-list,
  .expense-list {
    width: 35%;
  }
</style>
