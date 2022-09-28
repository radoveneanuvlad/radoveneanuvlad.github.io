var submitButton = document.getElementById("btn_about");
submitButton.addEventListener("click", function(e){
    window.location.href='about.html';
});

var submitButton = document.getElementById("btn_home");
submitButton.addEventListener("click", function(e){
    window.location.href='index.html';
});

var submitButton = document.getElementById("btn_portfolio");
submitButton.addEventListener("click", function(e){
    window.location.href='portfolio.html';
});

var submitButton = document.getElementById("btn_contact");
submitButton.addEventListener("click", function(e){
    window.location.href='contact.html';
});

var submitButton = document.getElementById("buton_portf");
submitButton.addEventListener("click", function(e){
    window.open('https://github.com/radoveneanuvlad');
});


function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var mesaj = document.getElementById("mesaj").value;
    var error_mesaj = document.getElementById("error_mesaj");
    
    error_mesaj.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_mesaj.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_mesaj.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_mesaj.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_mesaj.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }

  var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

  function sendEmail(){
        Email.send({
        Host : "smtp.gmail.com",
        Username : "cookiecoding12@gmail.com",
        Password : "Sprite12311",
        To : 'sugpula1243@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form",
        Body : "And this is the body"
    }).then(
        message => alert("trimis")
    );
  }




  var w = 960, h = 500;

			var labelDistance = 0;
  
var vis = d3.select("body").append("svg:svg").attr("width", w).attr("height", h).style("float","left");
      var output = d3.select("body").append("div");

			var nodes = [];
var languages = {};
languages["Love"] = ["Java", "C++", "Objective C"];
languages["Fun"] = ["Bash","Perl","Slightly Pythonic :P"];
languages["Intense Hatred"] = ["Visual Basic"];
languages["Like"] = ["Javascript","PHP"];

			var labelAnchors = [];
			var labelAnchorLinks = [];
			var links = [];

for(var i in languages){
    var node = {
					label : i,
          category: "yes"
				};
				nodes.push(node);
				labelAnchors.push({
					node : node
				});
				labelAnchors.push({
					node : node
				});
for(var j = 0; j < languages[i].length; j++) {
				var node = {
					label : languages[i][j],
          category: "no"
				};
				nodes.push(node);
				labelAnchors.push({
					node : node
				});
				labelAnchors.push({
					node : node
				});
			};

} 

var count1 = 0;
var count2 = 1;
for(var i in languages){
  for(var j = 0; j < languages[i].length; j++){
    links.push({
							source : count1,
							target : count2,
							weight : Math.random()
		});
    count2++;
  }
  count1 = count2;
  count2 = count1 + 1;
}
			for(var i = 0; i < nodes.length; i++) {
				
				labelAnchorLinks.push({
					source : i * 2,
					target : i * 2 + 1,
					weight : 1
				});
			};

			var force = d3.layout.force().size([w, h]).nodes(nodes).links(links).gravity(1).linkDistance(50).charge(-3000).linkStrength(function(x) {
				return x.weight * 10
			});


			force.start();

			var force2 = d3.layout.force().nodes(labelAnchors).links(labelAnchorLinks).gravity(0).linkDistance(0).linkStrength(8).charge(-100).size([w, h]);
			force2.start();

			var link = vis.selectAll("line.link").data(links).enter().append("svg:line").attr("class", "link").style("stroke", "#CCC");

var categoryData = force.nodes().filter(function(d){if(d.category == "yes"){return d;}});

var leafData = force.nodes().filter(function(d){if(d.category != "yes"){return d;}});

var node = vis.selectAll("g.node").data(force.nodes()).enter().append("svg:g").attr("class", "node");
vis.selectAll("g").filter(function(d){
  if(d.category == "yes"){return d;}
}).append("svg:circle").attr("r", 8).style("fill", "#555").style("stroke", "#DD4B39").style("stroke-width", 4);


vis.selectAll("g").filter(function(d){
  if(d.category == "no"){return d;}
}).append("svg:circle").attr("r", 5).style("fill", "#DD4b39").style("stroke", "#FFF").style("stroke-width", 3)
.on("mouseover", function(d){
  output.text(d.label).attr("class","animated fadeInLeft");
})
.on("mouseout", function(){
  output.text("").attr("class","animated fadeOutRight")
});
	node.call(force.drag);



				
	
			var anchorLink = vis.selectAll("line.anchorLink").data(labelAnchorLinks)//.enter().append("svg:line").attr("class", "anchorLink").style("stroke", "#999");

			var anchorNode = vis.selectAll("g.anchorNode").data(force2.nodes()).enter().append("svg:g").attr("class", "anchorNode");
			anchorNode.append("svg:circle").attr("r", 0).style("fill", "#FFF");
				anchorNode.append("svg:text").text(function(d, i) {
				return i % 2 == 0 ? "" : d.node.label
			}).style("fill", "#555").style("font-family", "Arial").style("font-size", 12);

			var updateLink = function() {
				this.attr("x1", function(d) {
					return d.source.x;
				}).attr("y1", function(d) {
					return d.source.y;
				}).attr("x2", function(d) {
					return d.target.x;
				}).attr("y2", function(d) {
					return d.target.y;
				});

			}

			var updateNode = function() {
				this.attr("transform", function(d) {
					return "translate(" + d.x + "," + d.y + ")";
				});

			}


			force.on("tick", function() {

				force2.start();

				node.call(updateNode);

				anchorNode.each(function(d, i) {
					if(i % 2 == 0) {
						d.x = d.node.x;
						d.y = d.node.y;
					} else {
						var b = this.childNodes[1].getBBox();

						var diffX = d.x - d.node.x;
						var diffY = d.y - d.node.y;

						var dist = Math.sqrt(diffX * diffX + diffY * diffY);

						var shiftX = b.width * (diffX - dist) / (dist * 2);
						shiftX = Math.max(-b.width, Math.min(0, shiftX));
						var shiftY = 5;
						this.childNodes[1].setAttribute("transform", "translate(" + shiftX + "," + shiftY + ")");
					}
				});


				anchorNode.call(updateNode);

				link.call(updateLink);
				anchorLink.call(updateLink);

			});
      