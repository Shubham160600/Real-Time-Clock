# Real-Time Clock

A simple web application that displays the current date and time, including milliseconds, in real-time. This project utilizes HTML, CSS, and JavaScript to create a visually appealing clock.

## Overview

This project features a real-time clock that updates every millisecond. It displays the current date in a formatted manner along with the time, showing hours, minutes, seconds, and milliseconds.

## Output:

![image](https://github.com/user-attachments/assets/941c9d0b-5727-4d91-8d35-0e1d209f1c6a)

## Features

- **Real-Time Updates:** The clock updates every millisecond to provide accurate time.
- **Formatted Display:** The date is displayed in a user-friendly format (e.g., "March 15, 2025").
- **Responsive Design:** The layout is centered on the screen and adjusts to different screen sizes.
- **Stylish UI:** The clock has a modern design with a dark background and contrasting colors.

## Technologies Used

- **HTML5:** For structuring the web page.
- **CSS3:** For styling the clock and layout.
- **JavaScript:** For updating the time and date dynamically.

## Usage Instructions

1. Clone or download this repository.
2. Open `index.html` in your preferred web browser.
3. The current date and time will be displayed in real-time.

## Code Explanation

### HTML (`index.html`)

The HTML structure includes:
- A `div` element for displaying the date.
- A `div` element for displaying the time.
- Links to the CSS file for styling and JavaScript file for functionality.

### CSS (`styles.css`)

The CSS styles include:
- A dark background color for the body.
- Centered text with padding around the clock.
- A border and shadow effect to enhance visibility.

### JavaScript (`script.js`)

The JavaScript code includes:
- A function `updateClock()` that retrieves the current date and time using the `Date` object.
- Formatting functions to add zero padding to numbers less than 10 (for hours, minutes, seconds) and less than 100 (for milliseconds).
- The clock updates every millisecond using `setTimeout`.

- ## Future Enhancements

1. **Customization Options:** Allow users to change the clock's appearance (colors, fonts).
2. **Timezone Support:** Add functionality to display time in different time zones.
3. **Alarm Feature:** Implement an alarm feature that allows users to set alarms.

## License

MIT Open Source License

## Author

Shubham Saurabh
