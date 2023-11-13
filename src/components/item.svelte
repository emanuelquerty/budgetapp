<script>
  import { debug } from "svelte/internal";

  import { scale } from "svelte/transition";
  import { income } from "../store";
  export let description = "";
  export let price = 0;
  export let itemType = "";

  $: percentage = ((price / $income) * 100).toFixed(2);
  $: selectedClass = function getSelectedClass() {
    return itemType === "income" ? "income-selected" : "expense-selected";
  };

  console.log(percentage);
</script>

<div class="container" in:scale>
  <div class="description">{description}</div>
  <div class="price {selectedClass()}">
    <span class="price-amount">
      {itemType === "income" ? "+ " : "- "}
      {price.toFixed(2)}
    </span>
    {#if itemType !== "income"}
      <span class="price-percentage-to-icome">
        {percentage}%
      </span>
    {/if}
  </div>
</div>

<style>
  .container:last-child {
    border-bottom: 0.07rem solid #aaa;
  }

  .container {
    display: flex;
    justify-content: space-between;
    border-top: 0.07rem solid #aaa;
    padding: 0.8rem;
  }
  .description {
    text-transform: capitalize;
  }

  .income-selected {
    color: #4db6ac;
  }

  .expense-selected {
    color: #e64a19;
  }

  .price-amount {
    margin-right: 1rem;
  }

  .price-percentage-to-icome {
    background-color: #ffcdd2;
    padding: 0 0.5rem;
    border-radius: 0.2rem;
  }
</style>
