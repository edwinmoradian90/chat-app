import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log('connected')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received: function (data) {
    console.log('received data');
    let currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes()

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes

    $('#msg').append(`<div class='message'>${data.content} ${time} </div>`);
    $('#text_field').val('');
  }
});
