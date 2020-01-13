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
    console.log(data)
    let currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes()

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes

    $('#msg').append(`<div class='message'><h3 class='tag is-large is-primary'>${data.user}</h3> ${data.content.content} ${time} </div>`);
    $('#text_field').val('');
  }
});
