 $(document).ready(function(){
  $("#extensionshot").mouseenter(function(){
  	var width=$(this).width()*1.2+"px";
  	var height=$(this).height()*1.2;

  	$(this).removeClass("normalshot");
  	$(this).addClass("entershot");
  	
  });
  $("#extensionshot").mouseleave(function(){
  	$(this).removeClass("entershot");
  	$(this).addClass("normalshot");
  });
});