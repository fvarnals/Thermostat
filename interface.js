window.onload = function() {
  alert( "welcome" );
};

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature_increase').click(function(){
    thermostat.increase();
    updateTemperature();
  });

  $('#temperature_decrease').click(function(){
    thermostat.decrease();
    updateTemperature();
  });

  $('#temperature_reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#power_saving_on').click(function() {
  thermostat.powerSavingModeOn();
  $('#power-saving-status').text('on')
  updateTemperature();
})

  $('#power_saving_off').click(function() {
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.currentUsage());
    updateimage();
    // $('body').attr('class', thermostat.currentUsage());
  }

  function updateimage() {
    if(thermostat.currentUsage() === 'high-usage') {
      $('#greta').attr("src", "https://www.euractiv.com/wp-content/uploads/sites/2/2019/02/Greta_Thunberg_pissed-800x450.jpg");
    }
    else if (thermostat.currentUsage() === 'medium-usage') {
      $('#greta').attr("src", "https://i.guim.co.uk/img/media/bebb8c5677ea8addac562dca36b0ac4e9987b4a4/0_0_4684_2810/master/4684.jpg?width=1920&quality=85&auto=format&fit=max&s=721f3e7e8a10104722d09914ea1c443c");
    }
    else {
      $('#greta').attr("src", "https://ichef.bbci.co.uk/news/800/cpsprodpb/3F86/production/_108026261_greta-thunberg.jpg");
    }
  };
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    });
});
