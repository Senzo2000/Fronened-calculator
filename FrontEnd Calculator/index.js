
var body = document.querySelector("body");



function del(){
			var value=document.getElementById('screen').value;
			document.getElementById('screen').value = value.substr(0,value.length-1);
		}

        var theme1 = document.getElementById('theme1');
		theme1.addEventListener('click',function(){
			body.classList.add('theme1');
			body.classList.remove('theme2');
            body.classList.remove('theme3');
		
		})

        var theme2 = document.getElementById('theme2');
        theme2.addEventListener("click", function(){

            console.log("Changing to theme2");
            body.classList.add('theme2');
            body.classList.remove('theme1');
            body.classList.remove('theme3')

        })


        var theme3 = document.getElementById('theme3');
       theme3.addEventListener("click", ()=>{
        console.log('CHANGING TO THEME 3');
         body.classList.add('theme3');
        body.classList.remove('theme2');
        body.classList.remove('theme1');
       })