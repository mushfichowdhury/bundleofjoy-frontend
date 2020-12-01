import { combineReducers } from 'redux'

const defaultState = {
    user: null,
    diapers: [],
    feedings: [],
    naps: [],
    entries: [],
    children: []
}

function userLoginReducer(state=defaultState.user, action) {
    switch (action.type) {
        case "LOGIN_USER":
            if (action.payload.user) {
                return action.payload
            }
            return state
        case "LOGOUT":
            localStorage.clear()
            return null
        default:
            return state;
    }
}

function diapersReducer(state = defaultState.diapers, action) {
    switch (action.type) {
        case "GET_DIAPERS":
            return action.payload
        case "ADD_DIAPER":
            return [...state, action.payload]
        case "EDIT_DIAPER":
            let newArray = state.filter(diaperChange => diaperChange.id !== action.payload.id)
            return [...newArray, action.payload]
        default:
            return state
        }
};

function feedingsReducer(state = defaultState.feedings, action) {
    switch (action.type) {
        case "GET_FEEDINGS":
            return action.payload
        case "ADD_FEEDING":
            return [...state, action.payload]
        case "EDIT_FEEDING":
            let newArray = state.filter(feeding => feeding.id !== action.payload.id)
            return [...newArray, action.payload]
        default:
            return state
        }
};

function napsReducer(state = defaultState.naps, action) {
    switch (action.type) {
        case "GET_NAPS":
            return action.payload
        case "ADD_NAP":
            return [...state, action.payload]
        case "EDIT_NAP":
            let newArray = state.filter(nap => nap.id !== action.payload.id)
            return [...newArray, action.payload]
        default:
            return state
        }
};

function entriesReducer(state = defaultState.entries, action) {
    switch (action.type) {
        case "GET_ENTRIES":
            return action.payload
        case "ADD_ENTRY":
            return [...state, action.payload]
        case "EDIT_ENTRY":
            let newArray = state.filter(entry => entry.id !== action.payload.id)
            return [...newArray, action.payload]
        default:
            return state
        }
};

function childrenReducer(state = defaultState.children, action) {
    switch (action.type) {
        case "GET_CHILDREN":
            return action.payload
        case "ADD_CHILD":
            return [...state, action.payload]
        default:
            return state
        }
};

const rootReducer = combineReducers({
    user: userLoginReducer,
    diapers: diapersReducer,
    feedings: feedingsReducer,
    naps: napsReducer,
    entries: entriesReducer,
    children: childrenReducer
})

export default rootReducer