const API_URL = {
    usersList: 'https://jsonplaceholder.typicode.com/users'
}


$('#get-users').on('click', () => {
    // console.log(new Date);
    let tblRows = '';
    jQuery.get(API_URL.usersList, (users) => {
        // console.log({data});
        users.forEach((user) => {
            // console.log(user);
            tblRows += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.address}</td>
                    <td> 
                
                    <button type="button" class="btn user-detail btn-success" data-id="${user.id}" data-bs-toggle="modal"
                     data-bs-target="#exampleModal">
  
                    Show</button>
                    </td>
                </tr>
            `;
        });
        $('#users-tbl>tbody').html(tblRows);
    });

});

$(document).on('click', '.user-detail', function () {
    // console.log($(this).data('id'));
    let uid = $(this).data('id'),
        userDetailAPI = API_URL.usersList + '/' + uid;

    $.get(userDetailAPI, (user) => {
        let userInfo = `
        <table class="table table-bordered">
            <tr>
                <td colspan = "2" class="text-center"><img width="50%" src="./uid.png" draggable="false"></td>
            </tr>
            <tr>
            <th>Full Name</th>
            <td>${user.name}</td>
            </tr>
            <tr>
            <th>user Name</th>
            <td>${user.username}</td>
            </tr>
            <tr>
            <th>Email</th>
            <td>${user.email}</td>
            </tr>
            <th>Address</th>
            <td>${user.address}</td>
            </tr>
        </table>
        `;
        $('.modal-body').html(userInfo);

    });




});

