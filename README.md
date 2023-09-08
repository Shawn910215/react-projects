# react-projects

Notes
---State---
1.Date that a component can hold over time, informations need to remember througout the app's lifecycle.
2.component's memory
3.State variable/piece of state
4.updating the component state triggers React to re-render the component.
5.do not set state manually!

---mechanics of state---
State is preserved throughout re-renders

---react developer tools---

---update state based on current value---
put a callback in the set function:
setStep(step+1) ===> setStep((s)=>s+1)

---We view UI as a reflection of data changing over time---
for data that should not trigger component re-renders, DO NOT USE state. use a regular variable instead.
