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
           "image": base_url+"DSC_0010_01.jpg"
       },
       {
           "name":  "Ram Sundaram",
           "post":  "Treasurer",
           "image": base_url+"DSC_0042_01.jpg"
       },
       {
           "name":  "Santhosh",
           "post":  "Head, OC",
           "image": base_url+"DSC_0016_01.jpg"
       },
       {
           "name":  "Veena",
           "post":  "Head, OC",
           "image": base_url+"DSC_0005_01.jpg"
       },
       {
           "name":  "Anirudh",
           "post":  "Head, Content",
           "image": base_url+"DSC_0014_01.jpg"
       },
       {
           "name":  "Abilash",
           "post":  "Head, Design",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Varsha",
           "post":  "Manager",
           "image": base_url+"DSC_0039_01.jpg"
       },
       {
           "name":  "Umair",
           "post":  "Manager",
           "image": base_url+"DSC_0033_01.jpg"
       },
       {
           "name":  "Akaash",
           "post":  "Manager",
           "image": base_url+"DSC_0026_01.jpg"
       },
       {
           "name":  "Snehith",
           "post":  "Manager",
           "image": base_url+"DSC_0045_01.jpg"
       },
       {
           "name":  "Naveen",
           "post":  "Manager",
           "image": base_url+"DSC_0103_01.jpg"
       },
       {
           "name":  "Nandini",
           "post":  "Manager",
           "image": base_url+"DSC_0101_01.jpg"
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
			"image": base_url + "DSC_0031_01.jpg"
		},
		{
			"name":  "Tanvi",
			"post":  "Web Developer",
			"image": base_url + "DSC_0021_01.jpg"
		},
		{
			"name":  "Santosh",
			"post":  "App Developer",
			"image": base_url + "DSC_0047_01.jpg"
		},
		{
			"name":  "Sudarshan",
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
           "image": base_url+"IMG_8506.jpg"
       },
       {
           "name":  "Adil",
           "post":  "Content Writer",
           "image": base_url+"IMG_8454.jpg"
       },
       {
           "name":  "Ipsita",
           "post":  "Content Writer",
           "image": base_url+"IMG_8385.jpg"
       },
       {
           "name":  "Aindrila",
           "post":  "Content Writer",
           "image": base_url+"IMG_8408.jpg"
       },
       {
           "name":  "Swagata",
           "post":  "Content Writer",
           "image": base_url+"IMG_8423.jpg"
       },
       {
           "name":  "Harini",
           "post":  "Content Writer",
           "image": base_url+"IMG_8403.jpg"
       },

       {
           "name":  "Pooja",
           "post":  "Organizer",
           "image": base_url+"IMG_8500.jpg"
       },
               {
           "name":  "Sanjana",
           "post":  "Organizer",
           "image": base_url+"IMG_8406.jpg"
       },
       {
           "name":  "Ananthanarayanan",
           "post":  "Organizer",
           "image": base_url+"IMG_8409.jpg"
       },
       {
           "name":  "Deepti",
           "post":  "Organizer",
           "image": base_url+"IMG_8482.jpg"
       },
       {
           "name":  "Subash",
           "post":  "Organizer",
           "image": base_url+"IMG_8412.jpg"
       },
       {
           "name":  "Aman",
           "post":  "Organizer",
           "image": base_url+"IMG_8464.jpg"
       },
       {
           "name":  "Anand",
           "post":  "Organizer",
           "image": base_url+"IMG_8453.jpg"
       },
       {
           "name":  "Vijay",
           "post":  "Organizer",
           "image": base_url+"IMG_8434.jpg"
       },
       {
           "name":  "Evlin",
           "post":  "Organizer",
           "image": base_url+"IMG_8430.jpg"
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
           "image": base_url+"IMG­­­_8414.jpg"
       },
       {
           "name":  "Kishore",
           "post":  "Organizer",
           "image": base_url+"IMG­­­_8504.jpg"
       },
       {
           "name":  "Nitin",
           "post":  "Organizer",
           "image": base_url+"IMG­­­_8469.jpg"
       },
       {
           "name":  "Raj",
           "post":  "Organizer",
           "image": base_url+"IMG­­­_8459.jpg"
       },
       {
           "name":  "Riddhi",
           "post":  "Organizer",
           "image": base_url+"IMG­_8510.jpg"
       },
       {
           "name":  "Sanju",
           "post":  "Organizer",
           "image": base_url+"IMG­_8424.jpg"
       },
       {
           "name":  "Swayamprava",
           "post":  "Organizer",
           "image": base_url+"IMG_8512.jpg"
       },
       {
           "name":  "Rahul",
           "post":  "Organizer",
           "image": base_url+"IMG_8383.jpg"
       },
       {
           "name":  "Adarsh",
           "post":  "Organizer",
           "image": base_url+"IMG_8438.jpg"
       },
       {
           "name":  "Ayush",
           "post":  "Organizer",
           "image": base_url+"IMG_8415.jpg"
       },
       {
           "name":  "Diya",
           "post":  "Organizer",
           "image": base_url+"IMG_8508.jpg"
       },
       {
           "name":  "Kartikey",
           "post":  "Organizer",
           "image": base_url+"IMG_8485.jpg"
       },
       {
           "name":  "Michelle",
           "post":  "Organizer",
           "image": base_url+"IMG_8441.jpg"
       },
	{
           "name":  "Raj",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Rengadeva",
           "post":  "Organizer",
           "image": base_url+"IMG_8422.jpg"
       },
       {
           "name":  "Sahil",
           "post":  "Organizer",
           "image": base_url+"IMG_8419.jpg"
       },
       {
           "name":  "Savita",
           "post":  "Organizer",
           "image": base_url+"IMG_8432.jpg"
       },
       {
           "name":  "Uttish",
           "post":  "Organizer",
           "image": base_url+"IMG_8427.jpg"
       },
       {
           "name":  "Vijay",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "George",
           "post":  "Organizer",
           "image": base_url+"IMG_8401.jpg"
       },
       {
           "name":  "Kathirvel",
           "post":  "Organizer",
           "image": base_url+"IMG_8377.jpg"
       },
       {
           "name":  "Aquif",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Achyut",
           "post":  "Organizer",
           "image": base_url+"IMG_8379.jpg"
       },
       {
           "name":  "Ajay",
           "post":  "Organizer",
           "image": base_url+"IMG_8392.jpg"
       },
       {
           "name":  "Deeraj",
           "post":  "Organizer",
           "image": base_url+"IMG_8384.jpg"
       },
       {
           "name":  "Dhwani",
           "post":  "Organizer",
           "image": base_url+"IMG_8394.jpg"
       },
       {
           "name":  "Karthik",
           "post":  "Organizer",
           "image": base_url+"IMG_8475.jpg"
       },
       {
           "name":  "Nandhini",
           "post":  "Organizer",
           "image": base_url+"IMG_8396.jpg"
       },
       {
           "name":  "Shallypreethika",
           "post":  "Organizer",
           "image": base_url+"IMG_8398.jpg"
       },
       {
           "name":  "Tamagno",
           "post":  "Organizer",
           "image": base_url+"IMG_8428.jpg"
       },
       {
           "name":  "Amritha",
           "post":  "Organizer",
           "image": base_url+"IMG_8491.jpg"
       },
       {
           "name":  "Vamsi",
           "post":  "Organizer",
           "image": base_url+"IMG_8444.jpg"
       },
       {
           "name":  "Jaypal",
           "post":  "Organizer",
           "image": base_url+"IMG_8467.jpg"
       },
       {
           "name":  "Kunal",
           "post":  "Organizer",
           "image": base_url+"IMG_8478.jpg"
       },
       {
           "name":  "Saimothish",
           "post":  "Organizer",
           "image": base_url+"IMG_8382.jpg"
       },
       {
           "name":  "Neel",
           "post":  "Organizer",
           "image": base_url+"IMG_8477.jpg"
       },
       {
           "name":  "Venkat",
           "post":  "Organizer",
           "image": base_url+"IMG_8511.jpg"
       },
       {
           "name":  "Raghuveer",
           "post":  "Organizer",
           "image": base_url+"IMG_8411.jpg"
       },
       {
           "name":  "Kshiteesh",
           "post":  "Organizer",
           "image": base_url+"IMG_8495.jpg"
       },
       {
           "name":  "Saeed",
           "post":  "Organizer",
           "image": base_url+"IMG_8416.jpg"
       },
       {
           "name":  "Harsh Vora",
           "post":  "Organizer",
           "image": base_url+"IMG_8418.jpg"
       },
       {
           "name":  "Karthi",
           "post":  "Organizer",
           "image": base_url+"IMG_8387.jpg"
       },
       {
           "name":  "Meghna",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Sahithi",
           "post":  "Organizer",
           "image": base_url+"IMG_8407.jpg"
       },
       {
           "name":  " Vishnu",
           "post":  "Organizer",
           "image": base_url+"IMG_8516.jpg"
       },
       {
           "name":  "Shailesh",
           "post":  "Organizer",
           "image": base_url+"IMG_8517.jpg"
       },
       {
           "name":  "Santhosh",
           "post":  "Organizer",
           "image": base_url+"IMG_8380.jpg"
       },
       {
           "name":  "Tarun",
           "post":  "Organizer",
           "image": base_url+"IMG_8461.jpg"
       },
       {
           "name":  "Vaibhav",
           "post":  "Organizer",
           "image": base_url+"IMG_8417.jpg"
       },
       {
           "name":  "Yash",
           "post":  "Organizer",
           "image": base_url+"IMG_8443.jpg"
       },
       {
           "name":  "Ragland",
           "post":  "Designer",
           "image": base_url+"IMG_8420.jpg"
       },
       {
           "name":  "Sathwik",
           "post":  "Designer",
           "image": base_url+"IMG_8375.jpg"
       },
       {
           "name":  "Aakash",
           "post":  "Designer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Amogh",
           "post":  "Designer",
           "image": base_url+"IMG_8371.jpg"
       },
       {
           "name":  "Yagnesh",
           "post":  "Designer",
           "image": base_url+"IMG_8374.jpg"
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
