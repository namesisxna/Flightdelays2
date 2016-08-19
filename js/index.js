$(document).ready(function(){
var url = 'https://raw.githubusercontent.com/danwainwright/Flightdelays2/master/convertcsv%20(1).json';
$.getJSON(url, function(response){  
  $('#flights').DataTable({
    'data' : response,
    'columns': [
      {'data' : 'reporting_airport'},
      {'data' : 'origin_destination_country'},
      {'data' : 'origin_destination'},
      {'data' : 'airline_name'},
      {'data' : 'average_delay_mins'},
      {'data' : 'reporting_period'},
    ]
  });
});
})
