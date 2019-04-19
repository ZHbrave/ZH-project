class Login{
	constructor(btn){
		this.btn=document.querySelector(btn);
		this.container=document.querySelector("#container")
		this.bindEvents()
	}
	bindEvents(){
		let _this=this;
		this.btn.onclick=function(){
		_this.container.innerHTML='<h4>用户登录</h4>'+
			'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
			'<p><label>用户名：<input id="username" type="text"></label></p>'+
			'<p><label>发　布：<textarea id="release" ></textarea></label></p>'+
			'<p><button id="loginBtn" class="logonBtn" type="button">发布</button></p>';
			tools.showCenter(_this.container);
			_this.modal = document.createElement("div");
			_this.modal.className = "modal";
			document.body.appendChild(_this.modal);
		}
		this.container.onclick = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;
			switch(target.id) {
				case "loginBtn":
					let username = document.querySelector("#username").value;
					let release = document.querySelector("#release").value;
					var p = document.createElement("p");
					p.innerHTML = release;
					document.body.appendChild(p)
					var oldDate=new Date();
					_this.oldDate=oldDate.getTime();
				case "closeBtn" :
					_this.container.style.display = "none";
					_this.modal.remove();
			}	
		} 
			let ul=document.createElement("ul")
			let li1=document.createElement("li")
			let li2=li1.cloneNode()
			li1.innerHTML="撤回"
			li2.innerHTML="取消"
		document.body.oncontextmenu=function(e){
			e = e || event;
			var target=e.target||e.srcElement;
			if (e.preventDefault) {
			e.preventDefault();
			} else {
			window.event.returnValue = false;
			}
			document.body.appendChild(ul)
			ul.appendChild(li1)
			ul.appendChild(li2)
			var left=e.clientX;
			var top=e.clientY;
			ul.style.left=left+"px";
			ul.style.top=top+"px"
			li1.onclick=function(){
				if(confirm("确认撤回吗？")){
					var newDate=new Date();
					_this.newDate=newDate.getTime()
					var disTime=(_this.newDate-_this.oldDate)/1000;
					var lastTime=10
					if(disTime<lastTime){
						target.remove()
					}else{
						alert("超过时间不能删除")
					}
				}
			}
			li2.onclick=function(){
				ul.remove()
			}
			document.onclick=function(){
				ul.remove()
			}
		}
	}
}
