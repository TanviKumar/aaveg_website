$(document).ready(function () {
	setCore();
	setTeam();
	setWeb();
	$(".web-image").hover(function () {
		var headers = $(".code");
		for (var i = headers.length - 1; i >= 0; i--) {
			headers[i].style.transition = "all 0.3s";
			headers[i].style.color="#45C938";
		}

	});
	$(".web-image").mouseleave(function () {
		var headers = $(".code");
		for (var i = headers.length - 1; i >= 0; i--) {
			headers[i].style.transition = "all 1s";
			headers[i].style.color="white";
		}
	});
});
function setCore() {
	var source = $('#display-core').html();
	var template = Handlebars.compile(source);
	var base_url = SITE_BASE_URL + '/profile-images/'
	var core=[
       {
           "name":  "Bhargava",
           "post":  "Chairman",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Ram Sundaram",
           "post":  "Treasurer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Santhosh",
           "post":  "Head, OC",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Veena",
           "post":  "Head, OC",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Anirudh",
           "post":  "Head, Content",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Abilash",
           "post":  "Head, Design",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Salai",
           "post":  "Manager",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Umair",
           "post":  "Manager",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Akaash",
           "post":  "Manager",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Snehith",
           "post":  "Manager",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Naveen",
           "post":  "Manager",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Nandini",
           "post":  "Manager",
           "image": base_url+"femaleplaceholder.jpg"
       },
   ];
	
	var info={};
	info['core'] = core;
	var html = template(info);
	$('#main-container').append(html);
}

function setWeb() {
	var source = $('#display-web').html();
	var template = Handlebars.compile(source);
	var base_url = SITE_BASE_URL + '/profile-images/'
	var core = [
		{
			"name":  "Akshay",
			"post":  "Web Developer",
			"image": base_url + "maleplaceholder.jpg"
		},
		{
			"name":  "Tanvi",
			"post":  "Web Developer",
			"image": base_url + "femaleplaceholder.jpg"
		},
		{
			"name":  "Santosh",
			"post":  "App Developer",
			"image": base_url + "maleplaceholder.jpg"
		},
		{
			"name":  ",
			"post":  "App Developer",
			"image": base_url + "maleplaceholder.jpg"
		},
	];
	var info={};
	info['core'] = core;
	var html = template(info);
	$('#main-container').append(html);
}


function setTeam() {
	var source = $('#display-team').html();
	var template = Handlebars.compile(source);
	var base_url = SITE_BASE_URL + '/profile-images/';
	var team=[
       {
           "name":  "Aravind",
           "post":  "Content Writer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Adil",
           "post":  "Content Writer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Ipsita",
           "post":  "Content Writer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Aindrila",
           "post":  "Content Writer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Swagata",
           "post":  "Content Writer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Harini",
           "post":  "Content Writer",
           "image": base_url+"femaleplaceholder.jpg"
       },

       {
           "name":  "Pooja",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
               {
           "name":  "Sanjana",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Ananthanarayanan",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Deepti",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Subash",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Aman",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Anand",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Vijay",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Evlin",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Nilesh",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Madhav",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Srinivas",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Kishore",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Nitin",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Raj",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Riddhi",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Sanju",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Swayamprava",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Rahul",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Adarsh",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Ayush",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Diya",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Kartikey",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Michelle",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Raj",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Rengadeva",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Sahil",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Savita",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Uttish",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Vijay",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "George",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Kathirvel",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Aquif",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Achyut",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Ajay",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Deeraj",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Dhwani",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Karthik",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Nandhini",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Shallypreethika",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Tamagno",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Amritha",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Vamsi",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Jaypal",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Kunal",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Saimothish",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Neel",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Venkat",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Raghuveer",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Kshiteesh",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Saeed",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Harsh Vora",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Karthi",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Meghna",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Sahithi",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  " Vishnu",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Shailesh",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Santhosh",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Tarun",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Vaibhav",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Yash",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Ragland",
           "post":  "Designer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Sathwik",
           "post":  "Designer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Aakash",
           "post":  "Designer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Amogh",
           "post":  "Designer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Yagnesh",
           "post":  "Designer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Mohasin",
           "post":  "Designer",
           "image": base_url+"maleplaceholder.jpg"
       },

   ];
	team=shuffle(team);
	var info={};
	info['team'] = team;
	var html = template(info);
	$('#main-container').append(html);
}
function shuffle(array) {
  // var currentIndex = array.length, temporaryValue, randomIndex;
  // while (0 !== currentIndex) {
  //   randomIndex = Math.floor(Math.random() * currentIndex);
  //   currentIndex -= 1;
  //   temporaryValue = array[currentIndex];
  //   array[currentIndex] = array[randomIndex];
  //   array[randomIndex] = temporaryValue;
  // }
  array.sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  return array;
}
