const apiKey = 'c5272407f4b34b8d96e757aa485ab2655f7e7f581b8c907bbd986df8dd0e7f9e';
let leagueKey = '';
const countriesURL = `https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=${apiKey}`;
const leaguesURL = `https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${apiKey}`;
const countrySelect= document.getElementById('country-select');
const leagueSelect= document.getElementById('league-select');
const teamSelect= document.getElementById('team-select');

getCountries();

let countryList = [];
let leagueList = [];
let teamList = [];

async function getCountries() {
    const response = await fetch(countriesURL);
    if (response.ok) {
        countryList = await response.json();
        addCounties(countryList.result);
    }
}

async function getLeagues() {
    const response = await fetch(leaguesURL);
    if (response.ok) {
        leagueList = await response.json();
        addLeagues(leagueList.result);
    }
}

async function getTeams() {
    const teamsURL = `https://apiv2.allsportsapi.com/football/?&met=Teams&leagueId=${document.getElementById('leagueKey').textContent}&APIkey=${apiKey}`;
    const response = await fetch(teamsURL);
    if (response.ok) {
        teamList = await response.json();
        addTeams(teamList.result);
    }
}

function addCounties(countryList) {
    reset(leagueSelect);
    countryList.forEach(country => {
        let option = document.createElement('option');
        option.textContent = country.country_name;
        countrySelect.appendChild(option);
    })
}

function addLeagues(leagueList) {
    reset(leagueSelect);
    reset(teamSelect);
    leagueList.forEach(league => {
        if(league.country_name == countrySelect.value){
            let option = document.createElement('option');
            let key = document.createElement('p');
            key.setAttribute('id', 'leagueKey');
            key.setAttribute('display', 'none');
            key.textContent = league.league_key;
            option.textContent = league.league_name;
            option.appendChild(key);
            leagueKey = league.league_key;
            leagueSelect.appendChild(option);
        }
    })
}

function addTeams(teamList) {
    reset(teamSelect);
    teamList.forEach(team => {
        let option = document.createElement('option');
        option.textContent = team.team_name;
        teamKey = team.team_key;
        teamSelect.appendChild(option);
    })
}

async function reset(select) {
    select.innerHTML = '';
}