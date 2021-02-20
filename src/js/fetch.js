fetch ('https://api.github.com/users/patrykstefanowicz/repos?sort=created')
.then (resp => resp.json())
.then (resp => {
  for (let repo of resp) {
    const {name , html_url} = repo;
    const repositoryList = document.querySelector('.repository--js');
    const myTemplate = `<li>${name} <a class="repository__link" href="${html_url}" title= "link do repozytorium ${name} na Githuba"> link do GitHuba</a>
    </li>`;
    repositoryList.innerHTML += myTemplate;}
  })
  .catch(error => {
    console.log('nie udało się pobrać');
  })
