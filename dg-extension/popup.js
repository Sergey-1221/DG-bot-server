const Btn = document.getElementById("send-message");
Btn.addEventListener("click",() => {    
    let input = document.getElementById("input-message");
    let value = input.value;
    input.value = "";
    send_message(value);
});

const help_Btn = document.querySelectorAll(".btn-message");

 for (let i = 0; i < help_Btn.length; i++) {
     help_Btn[i].addEventListener("click", function() {
        send_message(this.textContent);
     });
 }

function send_message(mess){
    let wind = document.getElementById("window");
    wind.insertAdjacentHTML("beforeend", `
        <div class="alert alert-secondary message-received message">`+mess+`</div>
    `);

    const xhttp = new XMLHttpRequest();

    var formData = new FormData(document.forms.person);

    formData.append("text", mess);
    xhttp.onload = function() {
        wind.insertAdjacentHTML("beforeend", `
            <div class="alert alert-success message-sent message">`+this.responseText+`</div>
        `);
        
    }
    xhttp.open("POST", "http://31.129.105.164:7000", true);
    xhttp.send(formData);
}