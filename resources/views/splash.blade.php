@extends('base')

@section('links')
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="{{asset('css/splash.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Berkshire+Swash|Merienda+One|Pacifico" rel="stylesheet">
@endsection

@section('scripts')
    <script type="text/javascript" src="{{asset('js/hammer.min.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/jquery.hammer.js')}}"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script type="text/javascript" src="{{asset('js/splash.js')}}"></script>
@endsection

@section("main")
<div id="top">
	<div id="logo"><div id="logo-container">  <img alt="logo" onclick="$('audio')[0].play();" src="{{asset('splash-assets/logo.png')}}">  </div> </div>
	<div id="tagline1">
		<div id="tagline-container1">
			Carved
		</div>
	</div>
	<div id="tagline2">
		<div id="tagline-container2">
			in
		</div>
	</div>
	<div id="tagline3">
		<div id="tagline-container3">
			Stone!
		</div>
	</div>
</div>

<div id="main">
			<audio id="audio" src="{{asset('splash-assets/clocksound.ogg')}}" ></audio>
		</div>
	</div>
</div>


<div id="bottom">

	<div id="rock">
		<img id="leftrockimg" alt="rock falling down" src="{{asset('splash-assets/left_rock.png')}}">
		<img id="rightrockimg" alt="rock falling down" src="{{asset('splash-assets/right_rock.png')}}">
		<img id="fullrockimg" alt="rock falling down" src="{{asset('splash-assets/full_rock.png')}}">
	</div>
	<script>
		$(document).ready(function(){
		console.log("worked");
		var leftDest = "45%",
			rightDest = "55%";
		
		var w = $(window).width();
		if (w <= 600) {
			leftDest = "40%";
			rightDest = "60%";			
		}
		if (w <= 400) {
			leftDest = "20%";
			rightDest = "8::q0%";
		}
		function foo () {
			$("#fullrockimg").hide();
			$("#leftrockimg").animate({
				left: leftDest,
			}, 900, "easeOutQuart");
			$("#rightrockimg").animate({
				left: rightDest,
			}, 900, "easeOutQuart");
		}
		$("#rock").animate({
			bottom: '0px'
		}, 1500, 'easeOutBounce');
		setTimeout(foo, 1050);
	});
	</script>
</div>
@endsection
