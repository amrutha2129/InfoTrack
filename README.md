# InfoTrack

Implementation of a SERP Ranker.

## Specs

To gain a better understanding of your technical, design and logic skills, we would like you to create a project using the technologies of your choice (preferably backend in .NET, C#, front end in React ) with the following requirements. 

### Task 
The CEO from InfoTrack is very interested in SEO and how this can improve Sales. Every morning he logs in to google.com.au and types in the same key words “online title search” and counts down to see where and how many times their company, www.infotrack.com.au sits on the list. 

Seeing the CEO do this every day, a smart software developer at InfoTrack decides to write a small application for him that will automatically perform this operation and return the result to the screen. 
They design and code some software that receives a string of keywords, and a string URL. This is then processed to return a string of numbers for where the resulting URL is found in Google. For example; “1, 10, 33” or “0”. 

The CEO would like the application to be a web based application with a “Go” button that returns the results back to the frontend, for easy use. 
The CEO is only interested if their URL appears in the first 100 results. 

## Prerequisites

Microsoft Visual Studio 2019 with ASP.Net Core 2.0.

## Running the project

* Load the project in MS Visual Studio 2019,
* Run the project,
* On opening of the application in the browser, enter the search keywords in the first text box eg: Online Title Search,
* Enter the complete website URL for which you want to check the SERP rank in the second text box eg: https://www.infotrack.com.au,
* Press the Go button,
* SERP rank (an integer array of ranks) will be displayed in the SERP rank section below the button.
