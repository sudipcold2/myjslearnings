const github = new GitHub;
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== ''){
        //console.log(userText);
        
        github.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert
                console.log('Not Found');
                ui.showAlert('User not found', ' alert alert-danger')
            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        //clear profile
        ui.clearProfile();
    }
});