# Installation 
## Prerequisites 
node 18 (node 18.16 on my system)

## Installation and Running 

1. Open a command prompt and run the following
   ```sh
   $ git clone https://github.com/hectovs/github-api.git <repo-name-of-your-choice>
   ```
2. At the root of the project, create a file called .env 
3. Go to (https://github.com/settings/tokens), making sure you are logged in. 
    1. Generate a new token there (it does not need any of the scope checkboxes ticked).
    2. Copy this token to your clipboard
4. In the .env file, add the following
   ```env
   REACT_APP_GITHUB_PAT=<YOUR TOKEN> 
   ``` 
5. Save the env file  
6. Open a command prompt 
   ```sh
   $ npm install && npm start
   ```

## Usage 
At the moment you can search a user's repositories and filter by repository name but you cannot search purely by repository name. 

## Technologies used 
- [create-react-app](https://create-react-app.dev/)
- [Material UI components](https://mui.com/)
