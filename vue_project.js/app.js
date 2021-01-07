
var product = {
    "nama": " rida barang",
    "desription": "tester dan tester lagi",
    'price': "90000"
}
    var app = new Vue({
        el: '#app',
        data:product
    });




    var app2 = new Vue({
        el: '#app-2',
        data: {
          message: 'You loaded this page on ' + new Date().toLocaleString()
        }
      })

      var app3 = new Vue({
        el: '#app-3',
        data: {
          seen: true
        }
      })