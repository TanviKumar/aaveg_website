<!DOCTYPE html>
<html>
<head>
	<title>Aaveg</title>
    <link rel="stylesheet" type="text/css" href="{{asset('css/base.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap.min.css')}}">
    <link rel="shortcut icon" type="text/css" href="{{asset('favicon.png')}}">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
    @yield('links')
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="{{asset('js/base.js')}}"></script>
    <script type="text/javascript">
        var SITE_BASE_URL = "{{ url('/')}}";
    </script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-88938333-1', 'auto');
      ga('send', 'pageview');

    </script>
    @yield('scripts')
</head>
<body>
<nav class="navbar navbar-default navbar-fixed-top transparent">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="{{ url('/') }}">
        <img src="{{asset('images/aaveglogo.png')}}" class="logo">
      </a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="{{ url('/about') }}">About Aaveg<span class="sr-only"></span></a></li>
        <li><a href="{{ url('/moonlight') }}">Moonlight<span class="sr-only"></span></a></li>
        <li><a href="{{ url('/scoreboard') }}">Scoreboard<span class="sr-only"></span></a></li>
        <li><a href="{{ url('https://medium.com/aaveg-blog') }}">Blog</a></li>
        <li><a href="{{ url('/events') }}">Events</a></li>
        <li><a href="{{ url('/schedule.pdf') }}">Schedule</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="{{ url('/team') }}">The Team</a></li>
        <li><a target="_blank" href="http://facebook.com/aaveg.nitt">Facebook Page</a></li>
        <li><a type="button" data-toggle="modal" data-target="#myModal">Contact Us</a></li>
      </ul>
    </div>
  </div>
</nav>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Contact Us</h4>
      </div>
      <div class="modal-body">
        Chairperson - <b>Bhargav Mangalgiri</b><br />
        +91 9629882258<br /><br />
        Treasurer - <b>Ram Sundaram Swaminathan</b><br />
        +91 7337355001<br /><br />
        Head, OC - <b>Santosh Kumar</b><br />
        +91 8015809999<br /><br />
        Head, OC - <b>Veena</b><br />
        +91 7550147015<br /><br />
        Head, Content - <b>Anirudh Banerjee</b><br />
        +91 9787553271<br /><br />
        Head, Design - <b>Abilash C</b><br />
        +91 8056166423<br /><br />
        Web Operations - <b>Akshay Pai</b><br />
        +91 9632502454<br /><br />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  @yield('main')
</body>
</html>
