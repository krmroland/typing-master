export const updateSummary = data => ({
    type: "UPDATE-SUMMARY",
    data
});
export const updateTime = data => ({
    type: "UPDATE-TIME",
    data
});

export const resetSummary = () => ({ type: "RESET-SUMMARY" });
