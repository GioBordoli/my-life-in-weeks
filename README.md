# My Life in Weeks

## Overview

"My Life in Weeks" is a minimalist web application designed to provide a unique visual representation of your lifespan. It helps you visualize the passage of time by displaying your life in a grid of units, which can be configured as days, weeks, months, or years. The application highlights the time you've already lived, your current position, and the time you have remaining based on a hypothetical lifespan.

## Features

*   **Configurable Time Units:** View your life in days, weeks, months, or years.
*   **Customizable Lifespan:** Set your own hypothetical lifespan to see how it impacts your remaining time.
*   **Visual Progress Tracking:** A grid of cells visually fills up as time passes, offering a clear and impactful representation of your journey.
*   **Current Time Highlight:** The current day/week/month/year is distinctly highlighted in the grid.
*   **Future Time Visualization:** Future time units are colored differently to provide a sense of what lies ahead.
*   **Summary Statistics:** Displays your current age, units lived, and units remaining.
*   **Local Storage Persistence:** Your birth date, chosen time unit, and lifespan are saved locally in your browser, so you don't have to re-enter them on subsequent visits.
*   **Responsive Design:** The user interface adapts to different screen sizes, ensuring a good experience on both desktop and mobile devices.

## Architecture

### Frontend

The application's frontend is built using modern web technologies to ensure a fast, responsive, and maintainable user interface:

*   **React with TypeScript:** Provides a robust and scalable framework for building interactive UIs, with TypeScript adding type safety for improved code quality.
*   **Vite:** A next-generation frontend tooling that offers an extremely fast development experience with features like instant server start and lightning-fast Hot Module Replacement (HMR).
*   **CSS:** Custom CSS is used for styling, including Flexbox and CSS Grid for layout, and media queries for responsive design.

**Component Structure:**

*   `App.tsx`: The main application component, managing the overall state (birth date, time unit, lifespan) and orchestrating the other components.
*   `Controls.tsx`: Handles user inputs for birth date, time unit selection, and hypothetical lifespan.
*   `LifeGrid.tsx`: Renders the core visual grid, dynamically adjusting based on the selected time unit and highlighting lived, current, and future periods.
*   `Summary.tsx`: Displays key statistics about the user's life, such as age, units lived, and units remaining.

### Deployment

The application is containerized and deployed to Google Cloud for scalable and reliable hosting:

*   **Docker:** The application is packaged into a Docker image, ensuring consistent environments across development and deployment.
*   **Nginx:** A lightweight web server used within the Docker container to efficiently serve the static React build files.
*   **Google Cloud Run:** A fully managed serverless platform that automatically scales the containerized application up or down based on traffic, providing a cost-effective and highly available solution.

## How to Use

1.  **Enter Your Birth Date:** Use the date picker to input your birth date.
2.  **Select Time Unit:** Choose whether you want to see your life in days, weeks, months, or years.
3.  **Set Lifespan:** Adjust the hypothetical lifespan (in years) to see how it affects your remaining time.

The grid and summary statistics will update automatically based on your inputs.

## Local Development

To run the application locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/GioBordoli/my-life-in-weeks.git
    cd my-life-in-weeks
    ```
2.  **Navigate to the client directory:**
    ```bash
    cd client
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Deployment to Google Cloud Run

The application is deployed to Google Cloud Run using the provided `Dockerfile` and `nginx.conf`. The deployment process involves:

1.  Building the React application for production (`npm run build`).
2.  Building a Docker image that includes Nginx to serve the static files.
3.  Pushing the Docker image to Google Container Registry.
4.  Deploying the image to a Cloud Run service, which handles automatic scaling and serving.

For detailed deployment steps, refer to the `gcloud` commands used during the deployment process.