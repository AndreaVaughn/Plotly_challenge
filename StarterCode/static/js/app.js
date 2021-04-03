//1. Use the D3 library to read in `samples.json`.
function init() {
  d3.json('../../samples.json').then((data) => {
    console.log(data)
var filtered_data= data.samples.filter(samples=> samples.id== "940")[0]
var otu_ids= filtered_data.otu_ids.slice(0,10)
var otu_labels = filtered_data.otu_labels.slice(0,10)
var sample_values= filtered_data.sample_values.slice(0,10)
console.log(otu_ids)
console.log(otu_labels)
console.log(sample_values)

var otu_id = otu_ids.map(d => "otu " + d)
console.log('otu_id: ${otu_id}')


var bar_trace = {
    y: otu_id,
    x: sample_values,
    //text: hover,
    type: "bar",
    orientation: "h"
  };
  // create the data variable
  var data = [bar_trace];
  // create the layout variable
  var bar_layout = {
    title: "Top 10 OTUs",
    yaxis: {
      tickmode: "linear"
    },
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 30
    }
  };
  Plotly.newPlot('bar', data, bar_layout);

  var trace1 = {
    x: otu_id,
    y: sample_values,
    mode: "markers",
    marker: {
        size: sample_values,
        color: otu_id
    },
    text: otu_labels

};

// set the layout for the bubble plot
var layout_b = {
    xaxis:{title: "OTU ID"},
    height: 600,
    width: 1000
};

// creating data variable 
var data1 = [trace1];

// create the bubble plot
Plotly.newPlot("bubble", data1, layout_b);   
  
})
}
init()






