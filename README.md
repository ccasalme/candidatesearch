# Candidate Search App

## Description
The **Candidate Search App** is a web application that allows recruiters to search for potential candidates using the GitHub API. Users can browse through candidates, save promising profiles, and manage a list of saved candidates. The app is built with React, TypeScript, and uses local storage to persist saved candidates.

## Features
✔ **Candidate Browsing:** View a random GitHub user's details upon page load.  
✔ **Candidate Search:** Enter a GitHub username to fetch specific user data.  
✔ **Save Candidates:** Click the `+` button to add a candidate to the saved list.  
✔ **Skip Candidates:** Click the `-` button to skip a candidate without saving.  
✔ **Saved Candidates Page:** View and manage saved candidates.  
✔ **Persistent Storage:** Saved candidates remain even after page refresh.  
✔ **Error Handling:** Displays appropriate messages when no candidates are found or available.  

## Example



https://github.com/user-attachments/assets/9de8e0bc-76e0-42c1-bf88-04260d71b085



## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation
To run this project locally, ensure you have **Node.js** installed.

### Steps to Install:
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/candidate-search-app.git
   cd candidate-search-app
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Set Up Your Environment Variables**
   - Create a `.env` file in the root directory.
   - Add your GitHub **Personal Access Token**:
     ```sh
     VITE_GITHUB_TOKEN=your_personal_access_token_here
     ```
   - Ensure `.env` is added to `.gitignore` to prevent accidental exposure.
4. **Start the Development Server**
   ```sh
   npm run dev
   ```

## Usage
1. **Search for Candidates**
   - The homepage loads a random GitHub user.
   - Use the search bar to enter a GitHub username and fetch their details.
2. **Save or Skip Candidates**
   - Click `+` to save a candidate.
   - Click `-` to skip a candidate.
3. **View Saved Candidates**
   - Navigate to the "Potential Candidates" page to see saved profiles.
   - Remove candidates using the `➖` button.

## API Endpoints
The app uses the following GitHub API endpoints:

| Method | Endpoint                        | Description                              |
|--------|--------------------------------|----------------------------------|
| GET    | `https://api.github.com/users?since=randomID` | Fetches random GitHub users. |
| GET    | `https://api.github.com/users/{username}` | Fetches a specific user by username. |

## Contributing
We welcome contributions! Follow these steps:
1. **Fork the repository**
2. **Create a feature branch**
   ```sh
   git checkout -b new-feature
   ```
3. **Commit changes**
   ```sh
   git commit -m "Added new feature"
   ```
4. **Push to the branch**
   ```sh
   git push origin new-feature
   ```
5. **Submit a Pull Request**

## Tests
You can test the application by:
- Running the app and searching for GitHub users.
- Checking that candidates are saved to local storage.
- Verifying that skipped candidates do not persist.

## License
📜 This project is licensed under the **MIT License**. See the `LICENSE` file for details.

🚀 Ready to find top candidates? Start your search now! 🔥

