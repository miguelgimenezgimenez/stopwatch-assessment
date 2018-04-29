# Description 

the project can be seen at http://stopwatch.miguelgimenez.tech/


I have done all the questions although only asked to do the first 2.

The first 2 questions are in the ***master*** branch , while the undo-redo with redux is in the ***feat-undo-redo*** branch.

Due to the synchronous nature of JS, the main challenge of this assessment was to keep the main times and lap times tables and stopwatches in perfect sync.  
That is the reason why I have come with 2 different solutions, none of which are perfect, one implemented in the ***master*** branch and the other one in the ***feat-undo-redo*** branch

**Solution 1: ( master branch):**

In this solution main times and lap times for the table are stored in different variables and calculated independently. This means the time records are stored by calling 2 different callbacks since the timers are different components. 
Since this calls are synchronoust that means that one time record will be stored after the other one, some times causing a small discrepancy between the lap time and main time (this is easy to see on first record since lap time and main time should be exactly the same). But the main times displayed in the  depend only on the main timer, so there is no error accumulation in the maintime table records  (unlike solution 2).

sample:
| 00| 10.97 | 10.98  | 

Here both Results should be exactly the same.
The good thing about this solution is that the main times from the table are always in sync with the main time.
If you add lap times you would get an error accumulation every time you store a lap, but lap times and main times displayed in the table will never be more than 1ms of difference between the lap times in the watch. Thats why i believe this is a better solution.

sample:
####70.03####
#####09.03#####
| 10| 10.97 | 60.97 |
| 11| 09.03 | 70.03 | 

Here main times are synced


**Solution 2: ( feat-undo-redo branch):**

In this solution the main times for the table are calculated by adding laptimes , in this solution is harder to see the discrepancy since
if you add lap times they will always give the result of the main times from the table.
The problem with this solution is that the discrepancy between the main times displayed on the table will grow between the ones displayed in the watch everytime you add a lap.


Hypothetical sample (assuming lap and stop where pressed at the same time ):
####70.13####
#####09.03#####
| 10| 10.97 | 60.97 |
| 11| 09.03 | 70.03 | 

here there  is a discrepancy of 1 tenth of a second between maintime in the table and maintime in the watch.


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

