import './home.less';
import $ from 'jquery';

axios
  .get('/api/stores/nearby', {
    parmes: {
      lat: '30.584355',
      lon: '114.298572',
      limit: 10,
      locale: 'ZH',
      redius: 3000,
    },
  })
  .then(function (res) {
    console.log(res);
  });
