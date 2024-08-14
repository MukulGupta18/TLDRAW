# TLDraw Timeline Component

## Project Description

This project implements a timeline component using TLDraw in React and TypeScript. The component allows users to input the number of timeline items they wish to generate. When the "Generate Timeline" button is clicked, the component dynamically creates and displays the specified number of timeline items within a responsive layout.

## Approach

1. **Component Structure:**
   - Used React functional components with hooks (`useState`, `useEffect`, `useRef`) to manage component state and interact with the TLDraw editor.
   - The `TldrawComponent` maintains the number of items to be displayed in the timeline and handles their generation.

2. **Timeline Generation:**
   - **Dynamic Rendering:** The timeline items are positioned horizontally by default. If the number of items exceeds the horizontal space, they automatically wrap to the next line.
   - **Editor Interaction:** Utilized TLDraw's API to create and position text shapes representing each timeline item. Implemented a `handleGenerate` function to clear existing shapes and add new ones based on user input.

3. **Styling:**
   - Applied basic styling to position the timeline items and handle layout using inline styles.

## Challenges Faced

1. **Shape Management:**
   - Ensuring the TLDraw editor correctly clears existing shapes before adding new ones. Needed to account for different methods provided by TLDraw for clearing shapes (`clear` or `reset`).

2. **Dynamic Layout:**
   - Implementing the logic for wrapping timeline items to the next line when they exceed the horizontal space. This required calculating the position of each item based on the total number of items and their dimensions.

3. **Error Handling:**
   - Addressed validation issues related to TLDraw's color constraints. Adjusted the color properties to match TLDraw's expected values to avoid validation errors.

## Getting Started

To set up and run this project locally, follow these steps:

1. **Clone the Repository:**
2. **Install dependencies:**
   ```bash
   npm install
bash
3. **Run the development server:**
  ```bash
   npm run dev
bash

