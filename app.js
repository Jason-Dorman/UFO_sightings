// from data.js
var tableData = data;

// select the filter button
var filter = d3.select("#filter-btn");

filter.on("click", function() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    // add the summary to the table
    var table  = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    tbody.html("")
    filteredData.forEach(datas => {
        var trow = tbody.append("tr");
        Object.values(datas).forEach(value =>{
            var cell = trow.append("td")
            cell.text(value);
        });
        
    });
    
});
  

