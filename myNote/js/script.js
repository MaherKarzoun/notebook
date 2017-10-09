$(document).ready(function(){
	getTime();classTime();
	function getTime(){ 
		var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
			 $("#showTime").html(time);
		
	}
	function classTime(){
		var dt = new Date();
		var c ;
		 $("#background-img").attr('class','');
		 c = (dt.getHours() >= 5 && dt.getHours() < 14 )?"morning" :( (dt.getHours() >= 14 && dt.getHours() < 20) ? "afternoon":"evening" );
		 $("#background-img").addClass(c);
		  $("#background-img h1").html(" Good "+c);

	}

	$(".list-note").on("click", ".cancel", function(){
			console.log( "am clicked ");
		var NHC =$(this).parents(".note").children(".note-header").children("#logo").children(".checked");
		var NBP =$(this).parents(".note").children(".note-body").children("p");
		console.log(NHC.hasClass("hidden"));
		if (NHC.hasClass("hidden") ) {
				NHC.removeClass("hidden");
				NBP.addClass("line-through");
		}else{
			NHC.addClass("hidden");
			NBP.removeClass("line-through");
		}
		
  	});

  	$(".list-note").on("click", ".delete", function(){
  		var note = $(this).parents(".note");
  		var id = note.children(".note-header").children(".note-id").text();
  		$.post("db/db_delete.php",{"id":id},function(response){
  			if (response =="success") {
				note.fadeOut(500);
  			}else{
  				console.log(response+ " , cant delete it .");
  			}

  		});
	});


	function fetchMyNotes(){
		$.get("db/db_fetch.php",function(data){
			$(".list-note ul").html(data);
		})
	} 

	$("#insert").click(function(){
		var text = $("#text-note").val() ;
		$("#text-note").val("") ;
		if (text !="") {
		var periority = $("select[name='Periority']").val()
		$.post("db/db_insert.php",{
			"text":text,
			"periority":periority
		},function(response){
  			if (response =="success") {
				fetchMyNotes();
  			}else{
  				console.log(response+ " , cant insert it .");
  			}

  		});
  		}

	});

	setInterval(getTime ,1000);
	setInterval(classTime ,3600000);
	fetchMyNotes();
});