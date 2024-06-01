export const authEndpoint="https://accounts.spotify.com/authorize";
const redurectUri="http://localhost:3000/";
// const clientId="3bf8f4b8f8374405b59a346095ce8d0a";
const clientId="31e2lrlkxc6mfsbo3jwro3vrhoay"
const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]
export const getTokenFromUrl= () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts=item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    }, {})
}
export const loginUri=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redurectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`
// https://accounts.spotify.com/authorize?client_id=3bf8f4b8f8374405b59a346095ce8d0a&redirect_uri=http://localhost:3000/&response_type=token&show_dialog=true
