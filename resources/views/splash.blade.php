@extends('base')

@section('links')
    <link href="https://fonts.googleapis.com/css?family=Berkshire+Swash|Merienda+One|Pacifico" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="{{asset('css/splash.css')}}">

@endsection

@section('scripts')
	<script language="javascript" src="{{asset('js/p5.dom.js')}}"></script>
	<script language="javascript" src="{{asset('js/p5.js')}}"></script>	

@endsection

@section("main")

<script type="text/javascript" src="{{asset('js/frontend.js')}}"></script>

@endsection
