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
           "name":  "Bhargava Mangalagiri",
           "post":  "Chairman",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Ram Sundaram Swaminathan",
           "post":  "Treasurer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Santhosh Kumar",
           "post":  "Head, OC",
           "image": base_url+" maleplaceholder.jpg"
       },
       {
           "name":  "Veena",
           "post":  "Head, OC",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Anirudh Banerjee",
           "post":  "Head, Content",
           "image": base_url+" maleplaceholder.jpg"
       },
       {
           "name":  "Abilash C",
           "post":  "Head, Design",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Salai Varshaa K",
           "post":  "Manager",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Umair Chorghay",
           "post":  "Manager",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Akaash Preetham",
           "post":  "Manager",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Snehith Galla",
           "post":  "Manager",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Naveen Vaidya",
           "post":  "Manager",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Nandini Ranganathan",
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
			"name":  "Akshay Pai",
			"post":  "Web Developer",
			"image": base_url + "maleplaceholder.jpg"
		},
		{
			"name":  "Tanvi Kumar",
			"post":  "Web Developer",
			"image": base_url + "femaleplaceholder.jpg"
		},
		{
			"name":  "Santosh Kumar",
			"post":  "App Developer",
			"image": base_url + "maleplaceholder.jpg"
		},
		{
			"name":  "Sudarshan",
			"post":  "App Developer",
			"image": base_url + "maleholder.jpg"
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
           "name":  "S Aravind",
           "post":  "Content Writer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Adil Abdul Nazar",
           "post":  "Content Writer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Ipsita Panda",
           "post":  "Content Writer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Aindrila Ganguly",
           "post":  "Content Writer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Swagata Das",
           "post":  "Content Writer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Harini G Anand",
           "post":  "Content Writer",
           "image": base_url+"femaleplaceholder.jpg"
       },

       {
           "name":  "Pooja Devulapally",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
               {
           "name":  "Sanjana Ramesh",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Ananthanarayanan Potti",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Deepti Kannan",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Subash Aravindan P",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Aman Mishra",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Anand Soman",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Vijay Kumar Chitrala",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Evlin Bosco Kurumthottam",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Nilesh Gope",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "R Madhav Krishnan ",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Srinivas Rajagopalan",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Kishore V",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Nitin More",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Raj Kuvar Yadav",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Riddhi Gupta",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Sanju George Oomen",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Swayamprava Satpathy",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Rahul V S",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Adarsh Nunna",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Ayush Tiwari",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Diya Dileep",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Kartikey Shankarro",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Michelle Marianne",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Raj Kumar Bhagat",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Rengadeva T R",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Sahil Mittal",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Savita Vinayaga Moorthi",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Uttish Narayan",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Vijay Kiran Vinod",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "George Joseph Alapatt",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Kathirvel Rajan B",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Mohd Aquif",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Achyut Ramkumar",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Ajay Shankar S",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Deeraj Eswar R",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Dhwani Shah",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Karthik S",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Nandhini Swaminathan",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Shallypreethika Mani",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Tamagno Sarkar",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Amritha Suresh",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Vamsi Krishna Batchu",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Jaypal Singh R",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Kunal Yadav",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Saimothish",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Neel Samadder",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Venkat Subramanian R M ",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Raghuveer Vinnakota",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Kshiteesh Bandhuvula",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Saeed Anwar P A",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Harsh Vora",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Karthi Saran",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Meghna Saxena",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "Sahithi P S L",
           "post":  "Organizer",
           "image": base_url+"femaleplaceholder.jpg"
       },
       {
           "name":  "P S Vishnu Shankar ",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "P Shailesh Bhagwan Rao",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Santhosh Kumaar R",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Tarun Mogram",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Vaibhav Ashok Malani",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Yash Prakash",
           "post":  "Organizer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Ragland Asir",
           "post":  "Designer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Sathwik Kumar",
           "post":  "Designer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "S. Sri Aakash",
           "post":  "Designer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Amogh Jahagirdar",
           "post":  "Designer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Yagnesh L Pazhaniyappan",
           "post":  "Designer",
           "image": base_url+"maleplaceholder.jpg"
       },
       {
           "name":  "Mohamed Mohasin",
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
