# .NET-Angular-Messaging-App
A messaging app developed using .NET and Angular


It was originally named DatingApp, and as such, results the difference in naming amongst the file names and code. The UserInterface should be fine however.

When running Angular commands, one should cd into the SPA application. When running .NET commands, one should cd into the API folder.

The commands should be split, so the .NET commands run in one prompt, and the Angular related commands run in another.

Run "dotnet run" to run the server side .NET Core application.

First, run "npm install --save-dev @angular-devkit/build-angular" to install the appropriate packages. If vulnerabilities are found, and you are asked to run an 'audit' command, please do so.

Run "ng serve --open" to run the Angular application, and run it on http://localhost:4200/.

The application has been seeded with data using https://www.json-generator.com/, and it is reseeded every time the .NET application runs, unless data already exists in the database. As such, the database may be dropped without any impairments to the function of the application.

To make the Photo Upload function work, the Cloudinary Settings in the appropriate files must be updated with those of your Cloudinary Account.
