import { writable, derived } from "svelte/store";

export const income = writable(0.00);

export const expenses = writable(0.00);

export const incomeList = writable([]);

export const expensesList = writable([]);

export const remainingBudget =  derived([income, expenses], ([$income, $expenses]) => {
    return $income - $expenses;
});

export const expensesToIncomePercentage = derived([income, expenses], ([$income, $expenses]) => {
    if ($expenses === 0 && $income === 0) return 0;
    return ($expenses / $income) * 100;
});

