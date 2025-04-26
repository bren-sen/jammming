# My JAMMMING app

This project is part of the Codecademy React course. 
It uses the **authorization code flow with PKCE** recommended by Spotify since the *implicit grant* id deprecated.

## Getting started

### 1 In the project directory, run:

### `HOST=127.0.0.1 npm start`

Runs the app in the development mode.\
Open [http://127.0.0.1:3000](http://127.0.0.1:3000) to view it in your browser.
This is important since `npm start` alone would open [http://localhost:3000] and this is no longer an acceptable uri:
> localhost is not allowed as redirect URI.  
>[https://developer.spotify.com/documentation/web-api/concepts/redirect_uri]


### 2 Create an app in the Spotify for developers dashboard

Go to your Spotify for developers dashboard and click: create app
You'll have to give your app a name and give at least 1 redirect URI

#### - Fill in your redirect URI

Use [http://127.0.0.1:3000/] this needs to match exactly the url at line 9 of *SpotifyAuth.js*  
`const redirectUrl = 'http://127.0.0.1:3000/';  // your redirect URL `

Your app should now show on your dashboard, click on it and:

#### - Get your client ID

You'll find it in the first tab *Basic Information*   
You'll need to paste your client ID at line 9 of *SpotifyAuth.js*  
`const clientId = '******************************'; // your clientId`

#### - Manage Users

While the app is in development mode, you can have up to 25 users, **but** you need to register each user beforehand.  
Head to the *User Management* tab and add your name and email address associated with your spotify account.

### 3 Ready to go

In the Jammming app, click on Login and you should be redirected to Spotify to grant authorisation to access your user info and create playlist.  
You can add/remove what authorisation is granted by modifying line 14 of *SpotifyAuth.js*  
It's currently set as follow:  
`const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';`

> That's all folks

