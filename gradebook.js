// TODO: Fetch data from the PostgreSQL Database (to be Implemented later)
function fetchGradeData(){
    //This function will query the PostgreSQL Database and return grade data
    console.log("Fetching grade data...");
}

// TODO: Populate the table with grade data
function populateGradebook(data) {
    // This Function will take the fetched grade data and populate the table
    console.log("Populating gradebook with date:", data);
}

//TODO Remove THis
//Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
//End Remove