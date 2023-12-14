# Alerts Dashboard

This project is an Alerts Dashboard application that displays alerts and allows users to search through the alerts based on various criteria such as free text, vehicle number, and date range.

## Overview

The Alerts Dashboard app is built using React.js. It fetches alert data from an external API and presents it in a user-friendly interface.

## Features

- View a list of alerts fetched from the API.
- Search alerts using free text, vehicle number, and date range.
- Mark alerts as false alarms.

## Project Structure

- `src/components/AlertList.js`: Renders the list of alerts.
- `src/components/SearchBar.js`: Handles the search functionality.
- `src/components/AlertComponent.js`: Displays individual alert details.

## Installation

To run this project locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.

## Usage

- Upon launching the app, the alerts will be fetched and displayed.
- Use the search bar to filter alerts based on text, vehicle number, or date range.
- Click on the "Mark as False Alarm" button to mark an alert as a false alarm.

## Dependencies

This project relies on React.js and other packages managed through npm.
