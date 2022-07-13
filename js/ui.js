
$(function(){  
	 
	var now = 0;

	   
	$(".chat-floating-wrap").on('touchstart',function(event){
		 now = new Date().getSeconds();
	});

	$(".chat-floating-wrap").on('touchend',function(event){
		var endTouch = new Date().getSeconds() - now; 
		if(Number(endTouch) > .8){ //롱 터치 발생   
			$(".chat-floating-wrap").removeClass("closed").addClass("open");
		}
	}); 

	 
	$(".chat-floating-wrap").addClass("load");

	var removeLoad = setTimeout(function(){
		if($(".chat-floating-wrap").hasClass("load")){
			$(".chat-floating-wrap").removeClass("load").addClass("closed");
		} 
	},4000);

	$(".btn-close-msg").click(function(){ 
		if($(".chat-floating-wrap").hasClass("load")){
			$(".chat-floating-wrap").removeClass("load").addClass("closed");
		}else if($(".chat-floating-wrap").hasClass("open")){
			$(".chat-floating-wrap").removeClass("open").addClass("close")
		}
	});

	$(".btn-skin").click(function(){ 
		$(".chat-floating-wrap").removeClass("open").addClass("skin-switch"); 
	});

	$(".btn-chatbot").click(function(){ 
		if($(".chat-floating-wrap").hasClass("skin-switch")) {
			$(".chat-floating-wrap").removeClass("skin-switch").removeClass("open") 
		}else if($(".chat-floating-wrap").hasClass("load")){
			$(".chat-floating-wrap").removeClass("load");
		}
	});

	$(".skin-switch .btn-skin").click(function(){ 
		$(".chat-floating-wrap").removeClass("skin-switch");  
	}); 

	$(".btn-msg").click(function(e){ 
		e.preventDefault();
	}); 

}); 


  
  
  



