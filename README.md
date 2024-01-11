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

---State vs. Props---
State: internal data; owned by component.,make components interactive
Props:External data; owned by parent component;used by parent to configure child component

---Thinking In React---
Break the UI into components and establish the component tree
Build a static version in React(without state)
Think about State:when to use| local vs. global|Where to place each piece of state
Establish data flow: One-way|Child-to-parent communication|Accessing global state

---Fundamentals of State management---
Local State:
used only by one or few components
Global State:
many components might need

---share state with simbling component---
need to lift state up to parent component.
use setMethod in child component to update state in parent component.

---Derived state---
state that is computed from an existing piece of state or from props

Part2
p4:---Component Size Matters---
\*if the size of a component is huge
-Too many responsibilities
-Might need too many props
-Hard to reuse
-Complex code, hard to understand

\*if the size is too small
-end up with 100s of mini-components
-Confusing codebase
-Too abstracted(Creating something new to hide the implementation details of that thing)

\* Generally, we need to find the right balance between too specific and too broad.

\* How to splict a UI into Components?
-Logical separation of content/layout
-Some are reusable
-Low complexity
-Personal coding style

-Whne in doubt, start with a relatively big component, then split it into smaller components as it becomes necessary(unless you're sure you need to reuse).

-creating a new component means creating a new abstraction, try not to create new compnents too early.
-Name a component accoring to what it does or what it displays. do not afraid of using long component names.
-Co-locate related components inside the same file. Do not separate components into different files too early

P6: Component categories

\*Stateless/presentational components
-No State
-can receive props and simply present received data or other content
-Usually small and reusable

\*Stateful components
-Have State
-Can still be reusable

\*structural components
-Pages,layouts,or screens of the app
-result of composition
-can be huge and non-reusable(but don't have to)

P6: Prop Drilling

\* need to pass some props through several nested child components in order to get that data to deeply nested components.

P7: Componnent Composition

\* if we nest a child component into a parent component directly, we cannot❌ reuse the parent again. but if we pass it as children components between open and close tag, we can✅ still reuse the parent component.

\* we can use this to fix prop drilling problems

P11: Use explicit prop as alternative
-just use an customised name like {element} instead of {children}. then in the parent component, pass the prop explicitly, example:
<Box element={<MovieList movies={movies}>}/>
