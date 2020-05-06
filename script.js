// token meteo bfee7c1645b37e84c1d89579d871e184077d01bf90fe13c3ba8ec54804ddb9a0
//
// https://api.meteo-concept.com/api/forecast/0?token=bfee7c1645b37e84c1d89579d871e184077d01bf90fe13c3ba8ec54804ddb9a0
var codeInsee = '75120';
var token = 'bfee7c1645b37e84c1d89579d871e184077d01bf90fe13c3ba8ec54804ddb9a0';

// $.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=bfee7c1645b37e84c1d89579d871e184077d01bf90fe13c3ba8ec54804ddb9a0&insee=75120`, function(reponse){
//   console.log(`La reponse est ${reponse.forecast.tmax}`);
// });

document.querySelector('button').addEventListener('click', function() {
  $.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=bfee7c1645b37e84c1d89579d871e184077d01bf90fe13c3ba8ec54804ddb9a0&insee=75120`, function(reponse){
    document.querySelector('#tmax').value = `${reponse.forecast.tmax}`;
  });
});
