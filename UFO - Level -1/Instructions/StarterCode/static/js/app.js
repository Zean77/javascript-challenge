// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to append one table row `tr` for each ufo report object
tableData.forEach(report => {
    console.log(report)
    var row = tbody.append("tr");
    // Use `Object.entries` to find each report value
    Object.entries(report).forEach(([key,value]) => {
        console.log(key,value);
        // Use d3 to append 1 cell per ufo  report value (datetime, city, state, country, shape, ....)
        var cell = row.append("td");
        cell.text(value);
    });
});

// Refer to the button
var filter_btn = d3.select("#filter-btn");

// Refer to the table body where data will be stored
var output = d3.select("tbody");

// set up instruction for button once clicked
filter_btn.on("click", function(){
    // clear the output
    output.html("");
    d3.event.preventDefault();

    // use D3 to get input from user
    var input = d3.select("#datetime").property("value");

    // match input data with appropriate data in the source and filtered out as output
    var filtered_date = tableData.filter(row =>row.datetime === input);

    // print out the filtered data
    console.log(filtered_date);

    // Use d3 to append one table row `tr` for each ufo report object
    filtered_date.forEach(report=> {
        var row = tbody.append("tr");

        // Use `Object.entries` to find each report value
        Object.entries(report).forEach(([key,value])=>{
            var cell = row.append("td");

            // show all data value of filtered data
            cell.text(value);
        });
    });
});

