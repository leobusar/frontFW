// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false, 
  firebase: { 
  	apiKey: "AIzaSyDggGOm3po9EkA3-41jjhzyVUGenSH4OSk",
    authDomain: "todoexample-20aa9.firebaseapp.com",
    databaseURL: "https://todoexample-20aa9.firebaseio.com",
    projectId: "todoexample-20aa9",
    storageBucket: "todoexample-20aa9.appspot.com",
    messagingSenderId: "425919130815"
	}
};
