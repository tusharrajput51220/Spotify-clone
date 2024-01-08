export const initialState={
    user: null,
    playLists: [],
    playing: false,
    item: null,
    // token: 'BQBAsLrMeyK76I2t5--7Jep0xN81ex1JwcfTfIZP0C6y6Zr4l8C7OuHP0PoO96LEKNnrYcwEg-p7vAy3eIakWushYm0Wi6zjKNEXPU7Jk3V5Vi7Pz8NrhvTqPiaGEAsBuFoVB_CrTGWuCZZOT__HQRqWMuc3FB90bJyHRHUNs9p_9VdNuh9PwLE13HXfJ_NMEQWwcVd8uJUYETbBtz3O'
    // token: null
}
const reducer = (state,action) => {
    // console.log(action)
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }    
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }    
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }    
        default:
            return state    
    }
}
export default reducer