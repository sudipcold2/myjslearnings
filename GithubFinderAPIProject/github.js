/*
    Client ID
    99115757ee979a0616ea123
    Client Secret
    4c650b564168f6896376a06a7c9a55639ae659039635
*/

class GitHub {
    constructor(){
        this.client_id = '99115757ee979a0616ea123';
        this.client_secret = '4c650b564168f6896376a06a7c9a55639ae659039635';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&sort=${this.repos_sort}&client_secret=${this.client_secret}`);

            const repoResponse = await fetch(
                `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }

}