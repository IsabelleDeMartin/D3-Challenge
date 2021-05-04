// @TODO: YOUR CODE HERE!
var width = parseInt(d3.select("#scatter").style("width"));
var height = width - width / 3.9;
var margin = 10;
var label = 50;
width = width - margin - margin


var svg = d3.select("#scatter").append("svg").attr("width", width + margin + margin).attr("height", height + margin + margin).attr("class", "chart").append("g").attr("transform", "translate(" + margin + "," + margin + ")");
//set the circle radius 
var circleR = 10;


//xaxis
svg.append("g").attr("class", "xText");
var xText = d3.select(".xText");
xText.attr("transform", "translate(" + ((width - label) / 2 + label) + ", " + (height - margin) + ")");
xText.append("text").attr("y", 0).attr("data-name", "poverty").attr("data-axis", "x").attr("class", "aText active x ").text("In Poverty %");


//yaxis 
var ytextX = margin;
var ytextY = (height + label) / 2 - label;

svg.append("g").attr("class", "yText");
var yText = d3.select(".yText");
yText.attr("transform", "translate(" + ytextX + ", " + ytextY + ")rotate(-90)");
yText.append("text").attr("y", 0).attr("data-name", "obesity").attr("data-axis", "y").attr("class", "aText active y ").text("Obese %");

//read data 
d3.csv("./assets/data/data.csv").then(function (data) {



    //xaxis 
    var x = d3.scaleLinear().domain([8, 30]).range([margin + label, width - margin]);
    svg.append("g").attr("transform", "translate(0," + (height - margin - label) + ")").call(d3.axisBottom(x));

    //yaxis
    var y = d3.scaleLinear().domain([19, 40]).range([height, 0]);
    svg.append("g").attr("transform", "translate(" + (margin + label) + "," + (0 - margin - label) + ")").call(d3.axisLeft(y));

    // dots 
    svg.append("g").selectAll("dot").data(data).enter().append("circle").attr("cx", function (p) { return x(p.poverty); })
        .attr("cy", function (p) { return y(p.obesity); }).attr("r", 8).style("fill", "blue")








});