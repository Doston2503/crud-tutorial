let users = [
    {
        firstName: "Doston",
        lastName: "Rajabov",
        bio: "Man frontend dasturchiman va soha bo'yicha 5 yillik tajribaga egaman"
    },
    {
        firstName: "San'at",
        lastName: "Sadiyev",
        bio: "Man frontend dasturchiman va hozirda moliya institutida 1-kursdan yiqilish arafasidaman !"
    },
];
let updateIndex = -1;

function drawUserInfo() {
    document.querySelector('#user-list').innerHTML = '';
    for (let i = 0; i < users.length; i++) {
        document.querySelector('#user-list').innerHTML += `
        <div class="col-xl-3 my-3">
            <div class="card h-100">
                <div class="card-header text-center text-white bg-dark">
                    <h4>${users[i].lastName + " " + users[i].firstName}</h4>
                </div>
                <div class="card-body">
                    <b>
                        ${users[i].bio}
                    </b>
                </div>
                <div class="card-footer d-flex justify-content-between">
                <button onclick="deleteUser(${i})" class="btn btn-danger w-50">delete</button>
                <button onclick="updateUser(${i})" class="btn btn-warning w-50 ms-3">update</button>
</div>
            </div>
        </div>
        
        `
    }

}

drawUserInfo();

let registerBtn = document.querySelector('#registerBtn');

registerBtn.addEventListener('click', function () {

    let firstName = document.forms['registerForm']['firstName'].value;
    let lastName = document.forms['registerForm']['lastName'].value;
    let bio = document.forms['registerForm']['bio'].value;

    if (firstName.trim().length > 0 && lastName.trim().length > 0) {

        let newUser = {
            firstName,
            lastName,
            bio
        };
        if (updateIndex >= 0) {
            users[updateIndex] = newUser;
            document.querySelector('#registerBtn').innerHTML = "Ro'yhatdan o'tish";
            updateIndex = -1
        } else {
            users.push(newUser);
        }

        drawUserInfo();
        document.forms['registerForm'].reset();


    } else {
        alert("Ism va familiyani kiritish majburiy !!")
    }

});


function deleteUser(index) {

    users.splice(index, 1);
    drawUserInfo()

}

function updateUser(id) {
    document.forms['registerForm']['firstName'].value = users[id].firstName;
    document.forms['registerForm']['lastName'].value = users[id].lastName;
    document.forms['registerForm']['bio'].value = users[id].bio;
    updateIndex = id;
    document.querySelector('#registerBtn').innerHTML = "O'zgartirish"
}