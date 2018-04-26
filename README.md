# Description 

the project can be seen at http://stopwatch.miguelgimenez.tech/


I have done all the questions although only asked to do the first 2.

The first 2 questions are in the ***master*** branch , while the undo-redo with redux is in the ***feat-undo-redo*** branch.

I used a very simple Webpack (latest version) configuration.


**Install dependencies:**


    $ yarn 
    or 
    $ npm install


**Run project**

    $ nvm use
    $ npm run dev   
    
 
Browser should be opened or  go to ``http://localhost:8080/``



## Architecture:

To Structure the project I have used Atomic design, but since the project is very 
small i have only used molecules and organisms.

### Molecules

Simple components that consist of simple html Elements 

**LapTable**

Table Showing laptimes and maintimes

**Timer**

The component that shows the time using setInterval functions

### Organisms

Components that are composed of molecules and other simple components

**StopWatchContainer**

Container that has all the molecules and buttons that trigger the stopwatch

