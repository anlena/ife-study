$(function($) {

});

$("button").on("click", function() {
	$.getJSON("data/3.json",function(data) {
		var data2 = data.data_2;
		for(var item of data2){
//			var dataStr = JSON.parse(item)
			console.log(JSON.stringify(item));
//			var li = document.createElement("li");
//			li.innerHTML = '<p>这是<a> '+ item.ID + '</a><a> '+ item.Name + '</a></p>';
//			document.getElementById("box").appendChild(li);

			var tr = document.createElement("tr");
			tr.innerHTML = '<tr><td>' +item.ID +'</td><td>'+item.Name+'</td><td>'+item.goods_short_desc2+'</td></tr>'
			document.getElementsByTagName("table")[0].appendChild(tr);
		}
	})
})