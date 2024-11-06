Gauge Chart Application

This project is a responsive gauge chart built with React, Recharts, and Redux. It visualizes a gauge meter that dynamically displays a value controlled by the Redux state. The gauge chart includes labels, a pointer/needle, and smooth color transitions based on the gauge value.

Features : 
Semi-circular gauge displaying values from 0% to 100%.
Real-time updates based on a Redux state value.
Labels at 0%, 25%, 50%, 75%, and 100%.
Pointer/needle to indicate the current gauge value.
Dark-themed color palette.
Random value generator button (optional).

Tech Stack
React: UI library
Recharts: For creating the gauge chart
Redux: State management for controlling gauge values

Project Structure
slice.js: Redux slice for managing the gauge value.
store.js: Configuration of the Redux store.
src/chart/index.js: Component for rendering the gauge chart.
src/App.js: Main application component where the gauge is display


Code Overview
Redux Store: Configured in store.js with a single slice (gaugeSlice) to manage the gauge value.
GaugeChart Component: Uses Recharts to render a semi-circular gauge with labels and a pointer. The gauge value updates based on the Redux state, and the color transitions smoothly as the value changes.
Button Component: Button that can be used to randomly generate new gauge values.
