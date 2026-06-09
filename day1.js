let schedules = [];

function addSchedule(){

    let time = document.getElementById("time").value;
    let place = document.getElementById("place").value;
    let transport = document.getElementById("transport").value;
    let cost = document.getElementById("cost").value;
    let note = document.getElementById("note").value;

    if(time === "" || place === ""){
        alert("請輸入時間與景點");
        return;
    }

    schedules.push({
        time, place, transport, cost, note
    });

    renderSchedules();
}

function renderSchedules(){

    let list = document.getElementById("scheduleList");

    list.innerHTML = "";

    schedules.forEach((item)=>{

        list.innerHTML += `
        <div class="schedule-card">
            <h3>${item.time} ${item.place}</h3>
            <p>🚆 ${item.transport}</p>
            <p>💴 ${item.cost} 円</p>
            <p>📝 ${item.note}</p>
        </div>
        `;
    });
}
function openForm(){

    const form =
        document.querySelector(".form-card");

    if(form.style.display === "block"){

        form.style.display = "none";

    }else{

        form.style.display = "block";

    }
}
document.querySelectorAll(".spot-title")
.forEach(button=>{

    button.addEventListener("click",()=>{

        const content =
            button.nextElementSibling;

        if(content.style.display==="block"){

            content.style.display="none";

        }else{

            content.style.display="block";

        }

    });

});

/* ⭐⭐⭐ 關鍵：第一次載入要渲染 */
renderSchedules();