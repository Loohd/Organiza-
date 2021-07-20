export const initialState = {
    avatar: '',
    habits: [],
    goals: [],
};

export default UserReducer = (state, action) => {
    switch(action.type) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar};
        break;
        default:
            return state;
    }
}