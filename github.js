class Github {
  constructor() {
    this.client_id = '3132f15943426ea0bed3';
    this.client_Secret = '64157d32b359a57417c2d991104d45fac1c77a8b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_Secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_Secret
      }`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    };
  }
}

//https://api.github.com/users/bradtraversy/repos?per_page=5&sort=created:%20asc&client_id=3132f15943426ea0bed3&client_secret=64157d32b359a57417c2d991104d45fac1c77a8b
