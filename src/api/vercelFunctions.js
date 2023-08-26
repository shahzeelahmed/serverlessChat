const Pusher = require("pusher-js/types/src/core/pusher");


const pusher = new Pusher({
  appId: "APP_ID",
  key: "APP_KEY",
  secret: "APP_SECRET",
  cluster: "APP_CLUSTER",
  useTLS: true,
});

const attributes = "subscription_count,user_count";

const res = await pusher.trigger(
  channels,
  "my-event",
  {
    message: "hello world",
  },
  {
    info: attributes,
  }
);

if (res.status === 200) {
  const body = await res.json();
  const channelsInfo = body.channels;
}

var privateChannel = pusher.subscribe("privateChannelName");