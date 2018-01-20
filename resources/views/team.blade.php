@extends('base')

@section('links')
    <link rel="stylesheet" type="text/css" href="{{asset('css/team.css')}}">
@endsection

@section('scripts')
    <script type="text/javascript" src="{{asset('js/team.js')}}"></script>
@endsection

@section('main')

<script type="text/template" id="display-core">
<h1>CORE</h1>
  @{{#each core}}
  <div class="single-person"> 
      <img src="@{{image}}" class="img-circle profile-image">
      <h2>@{{name}}</h2>
      <h4>@{{post}}</h4>
  </div>
@{{/each}}
</br>
</script>

<script type="text/template" id="display-team">
<h1>TEAM</h1>
  @{{#each team}}
  <div class="single-person-team"> 
      <img src="@{{image}}" class="img-circle center-block profile-image-team">
      <h3>@{{name}}</h2>
      <h5>@{{post}}</h4>
  </div>
@{{/each}}

</script>
<script type="text/template" id="display-web">
<h1 class="code">WEB TEAM</h1>
  @{{#each core}}
  <div class="single-person"> 
      <img src="@{{image}}" class="img-circle profile-image web-image">
      <h2 class="code code-font">@{{name}}</h2>
      <h4 class="code code-font">@{{post}}</h4>
  </div>
@{{/each}}
</br>
</script>


<div class="container" id="main-container">
  <br><br><br>
  <div class="jumbotron">
    <h1 class="display-3">The Team!</h1>
    <p class="lead"> This fest wouldn't have been possible if it weren't for these young and ambitious enthusiasts who have continuously strived to make this extravaganza greater than ever before. Let’s introduce you to the newest Aaveg Family!<br><br><br><br>
    <!-- We thank <a target="_blank" href="https://www.facebook.com/blurrindia/">Blurr India</a> for these incredible photos! Meet the Aaveg Family.</p>
    <hr class="my-2"> -->
    <p><b>Faculty Advisor:</b> Sreekanth Sir: With continuous support and inspiration since Aaveg’s inception, Sreekanth Sir has been the backbone of the fest.</p>
    <!-- <hr class="my-2"> -->
    <p><b>Core:</b> Everything needs a support because without support everything falls apart. A fundamental part of the Aaveg family, these 12 workaholics strive to guide the freshers to achieve their full potential.</p>
    <!-- <hr class="my-2"> -->
    <p><b>OC: </b>The name says it all. From ideation to rulebooks to ambience, this team of dedicated individuals are behind what you see during the fest.</p>
    <!-- <hr class="my-2"> -->
    <p><b>Design:</b> With a full palette of colours and pictures, this team have drawn up some of the most amazing, vibrant and innovative posters. We need not mention their work, as you should see it for yourself.</p>
    <!-- <hr class="my-2"> -->
    <p><b>Content:</b> A team of creative writers and speakers, they wield words as their tools in order to be Aaveg’s link to the audience.</p>
    <p><b>Web Ops:</b> From this page itself to the Aaveg app, this team provides the basis for Aaveg to reach out via the digital world.</p><br>
    <p class="lead">
      <a class="btn btn-primary btn-lg" target="_blank" href="https://www.facebook.com/aaveg.nitt" role="button">Visit us on Facebook!</a>
    </p>
  </div>
  <div id="facad-container">
    <img class="profile-image img-circle" src="{{asset('profile-images/sreekanth_sir.jpg')}}">
      <h1>Dr. Sreekanth</h2>
      <h2>Faculty Advisor</h2>
      <br><br>
  </div>
</div>
<footer class="footer" style="background-color: black;">
      <div class="container">
        <p class="text-muted code" style="font-size:20px">Made with ❤ by Aaveg Web Team</p>
      </div>
</footer>
@endsection
