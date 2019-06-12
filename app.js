// Initallize Github
const github = new Github();

// init UI
const ui = new UI();

// search input
const searchUser = document.querySelector('#searchUser');
searchUser.addEventListener('keyup', e => {
  const userText = e.target.value;

  if (userText !== '') {
    //console.log(userText);
    // Make Http Call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show Alert
        ui.showAlert('User Not Found.', 'alert alert-danger');
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
