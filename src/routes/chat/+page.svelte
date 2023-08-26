<script>
// @ts-nocheck

    import {onMount} from 'svelte';
    import Pusher from 'pusher-js';

  

const pusher = new Pusher({
  appId: "APP_ID",
  key: "APP_KEY",
  secret: "APP_SECRET",
  cluster: "APP_CLUSTER",
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world",
});

    let username = 'username';
    let message = '';
    let messages = [];

    const pusher = new Pusher({
  appId: "1659188",
  key: "f03e960ee316d44a2f10",
  secret: "dbb23b000c3cc9a52968",
  cluster: "ap2",
});

var privateChannel = pusher.subscribe("privateChannelName");
    onMount(() => {
        Pusher.logToConsole = true;

        const pusher = new Pusher('', {
            cluster: ''
        });

        const channel = pusher.subscribe('chat');
        channel.bind('message', data => {
            messages = [...messages, data];
        });
    })

    const submit = async () => {
        await fetch('http://localhost:8000/api/messages', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                message
            })
        });

        message = '';
    }
</script>
<body>
    

<div class="container">
    <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
        <div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
            <input class="fs-5 fw-semibold" bind:value={username}/>
        </div>
        <div class="list-group list-group-flush border-bottom scrollarea">
            {#each messages as msg}
                <div class="list-group-item list-group-item-action py-3 lh-tight">
                    <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">{msg.username}</strong>
                    </div>
                    <div class="col-10 mb-1 small">{msg.message}</div>
                </div>
            {/each}
        </div>
    </div>
    <form on:submit|preventDefault={submit}>
        <input class="form-control" placeholder="Write a message" bind:value={message}/>
    </form>
</div>
</body>

