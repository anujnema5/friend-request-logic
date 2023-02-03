const totalUser = [
    { name: "User-1", img: "https://www.photowhoa.com/2015/wp-content/uploads/2016/08/male-models-photos-poses-sample-683x1024-1.jpg", status: "Stranger", Bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa ratione incidunt nostrum, atque doloremque." },

    { name: "User-2", img: "https://i.pinimg.com/236x/ff/e5/c7/ffe5c7867c2b9529b62a529ffcc567aa--mens-suits-gorgeous-men.jpg", status: "Stranger", Bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa ratione incidunt nostrum, atque doloremque." },

    { name: "User-3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQVqiqSPIRqj_dX91HwD28sAe52pEjJhfaN8bAlmFqB9SWRVeKlgDR2OQOY1VsLyOZ7o&usqp=CAU", status: "Stranger", Bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa ratione incidunt nostrum, atque doloremque." },
]



const main = document.querySelector("#main");


totalUser.forEach((item, index) => {
    const butter = `
            <img src=${item.img} alt=${item.name} />
            <h1>${item.name}</h1>
            <h3>${item.status} </h3>
            <p> ${item.Bio} </p>
            <button class="buttonAdd">Add Friend</button>
            `;
    userBox = document.createElement("div");
    userBox.className = `card card-${index}`;
    userBox.innerHTML = butter;
    main.appendChild(userBox);
});

let bts = document.querySelectorAll("button");


bts.forEach((bt, index) => {
    let status = document.querySelector(`.card-${index} h3`);
    var flag = 0;
    bt.addEventListener("click", () => { 
        if(flag==0) {       
        bt.innerHTML = "Requesting..."

        setTimeout(() => {
        status.innerHTML = "Friends";
        status.style.color = "Green";
        status.style.fontSize = "24px";
        bt.innerHTML = "Remove Friend"
        bt.style.backgroundColor = "redlight"
        flag = 1;
        }, 2000);

    } else {
        status.innerHTML = "Strangers Again"
        status.style.color = "rgb(0, 96, 134)";
        status.style.fontSize = "21px";
        bt.innerHTML = "Add Friend"
        bt.style.backgroundColor = "rgba(85, 207, 255, 0.411)"
        flag = 0;
    }
    })

})
