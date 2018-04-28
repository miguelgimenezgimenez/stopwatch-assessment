# Description 

the project can be seen at http://stopwatch.miguelgimenez.tech/


I have done all the questions although only asked to do the first 2.

The first 2 questions are in the ***master*** branch , while the undo-redo with redux is in the ***feat-undo-redo*** branch.
Due to the synchronous nature of JS, the main challenge of this assessment was to keep the main times and lap times tables and stopwatches in perfect sync.  

That is the reason why I have come to 2 different solutions, one which I believe is more correct than the other one ( but has a more noticeable discrepancy in time records) and the other one which causes more discrepancies in the times (but harder to notice them).

Solution 1: ( master branch):
In this solution main times and lap times for the table are stored in different variables and calculated independently. This means the time records are stored in different callbacks since the timers are different, and there might be a small discrepancy between the lap time and main time, since one might be stored a ms later than the other one ( easy to track on first record since lap time and main time should be exactly the same). But the main times displayed depend only on the main timer, so there is no error accumulation (unlike solution 2).

Solution 2: ( feat-undo-redo branch):
In this solution the main times for the table are calculatedd by adding laptimes ( so there will not be discrepancy between times in the table),but the maintimes displayed on the table depend only on the lap times , not the main timer, and since every time you store a lap record, (since JS is synchronous  only one operation can be done at the time ) causes to be an error accumulation of about 1ms between the table main times and the stop watch main times.

Although it was allowed to use create-react-app i used a very  simple Webpack (latest version) configuration.


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

