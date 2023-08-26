<script>
	








						
	
	import './styles.css';
	import '../app.css';
</script>

<div class="overflow-y-scroll no-scrollbar ">
	

	<header class="bg-slate-900" >
		<slot />
	</header>

	<body class= " w-screen bg-slate-900 overflow-y-scroll no-scrollbar">
		
		
		<div class="mt-14 grid grid-rows gap-5 content-center overflow-y-scroll no-scrollbar">
			
		
		<h1 >
			<span class="text-5xl font-semibold bg-white bg-clip-text text-transparent box-decoration-clone">
				Introducing</span>
		</h1>
		<h1 class="h-1">
			<span class=" text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent box-decoration-clone">
					 serverless chatter
			</span>
		</h1>
		<h1 class="grid ml-10 place-items-center ">
			<span class=" text-2xl mt-20 font-normal bg-gray-200 bg-clip-text text-transparent box-decoration-clone">
					 chat with your friends
			</span>
		</h1>
		<h1 class="grid ml-10 place-items-center ">
			<span class=" text-2xl font-normal bg-gray-200 bg-clip-text text-transparent box-decoration-clone">
					anywhere anytime
			</span>
		</h1>
		<div class="mt-10 grid place-items-center" data-sveltekit-preload-data="off">
			<a href="/homepage"  class= "btn btn-wide border-white  bg-transparent text-white hover:bg-slate-700 underline-offset-0">
				Chat Now 
				


			</a>
		
			 
		
	</div>
	
</body>
	
</div>

<!-- <style>
	

	/* footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	} */



	/* @media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style> -->
