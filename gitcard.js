const getGitHubInfo = function () {
    var usuario = document.getElementById("usuario-github").value;
    var url = 'https://api.github.com/users/' + usuario;


    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            const usuarioImg = ajax.avatar_url;
            const repos = ajax public_repos;
            const gists = ajax.public_gists;
            const follow = ajax.followers;
            document.getElementById("github-card").src = usuarioImg;
            document.getElementById("repositorio").innerHTML = "<strong>" +repos+"</strong>"Repos;
			document.getElementById("gists).innerHTML")."<strong>" +gists+ "</strong>"Repos;
			document.getElementById("followersnnerHTML ")."<strong>" +follow+ "</strong>"Repos;
        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};
