let schedules = [];

loadSchedules();

function addSchedule(){

    let time =
        document.getElementById("time").value;

    let place =
        document.getElementById("place").value;

    let transport =
        document.getElementById("transport").value;

    let cost =
        document.getElementById("cost").value;

    let note =
        document.getElementById("note").value;

    if(time === "" || place === ""){

        alert("請輸入時間與景點");

        return;
    }

    let schedule = {

        time,
        place,
        transport,
        cost,
        note
    };

    schedules.push(schedule);

    saveSchedules();

    renderSchedules();

    clearForm();
}

function renderSchedules(){

    let list =
        document.getElementById("scheduleList");

    list.innerHTML = "";

    schedules.forEach((item,index)=>{

        list.innerHTML += `

        <div class="schedule-card">

            <h3>${item.time} - ${item.place}</h3>

            <p>
                🚆 交通：
                ${item.transport}
            </p>

            <p>
                💴 費用：
                ${item.cost} 円
            </p>

            <p>
                📝 備註：
                ${item.note}
            </p>

            <button
                class="delete-btn"
                onclick="deleteSchedule(${index})">

                刪除

            </button>

        </div>

        `;
    });
}

function deleteSchedule(index){

    schedules.splice(index,1);

    saveSchedules();

    renderSchedules();
}

function clearForm(){

    document.getElementById("time").value="";

    document.getElementById("place").value="";

    document.getElementById("transport").value="";

    document.getElementById("cost").value="";

    document.getElementById("note").value="";
}

function saveSchedules(){

    localStorage.setItem(
        "day1Schedules",
        JSON.stringify(schedules)
    );
}

function loadSchedules(){

    let data =
        localStorage.getItem(
            "day1Schedules"
        );

    if(data){

        schedules =
            JSON.parse(data);

        renderSchedules();
    }
}