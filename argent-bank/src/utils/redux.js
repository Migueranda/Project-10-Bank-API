import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    pwd: null,
    signedIn: false, 
    api_login: 'idle',
    token: null,
    api_profil:'idle',
    firstName: '',
    lastName:'',
    getProfileExec: false,
    profileChanged: false,
    errorMessage: false,
}

const apiBaseUrl = 'http://localhost:3001/api/v1/user'

// ------------------------------------------
// API : login Utilisateur
// ------------------------------------------
export const signIn = createAsyncThunk(
    'user/signin',
    async (signInData, thunkAPI)=>{
        const response = await fetch(`${apiBaseUrl}/login`, // first arg : Endpoint
            // 2nd arg : params
            {
            method: 'POST',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify({ email: signInData.email, password: signInData.password})
            })
        const data = response.json()
        return data   
    }
)

// -------------------------------------------
// API : User profile
// -------------------------------------------
export const getProfile = createAsyncThunk(    
    'user/profile',
    async(tokenData, thunkAPI) => {
        const response = await fetch(`${apiBaseUrl}/profile`,
        {
            method: 'Post',
            headers: {'Authorization' : `Bearer ${tokenData}`},
        })
        const data = response.json()
        return data
    }
)
//  --------------------------------------------
//Edit UserName ------------------------------
//----------------------------------------------

export const setProfile = createAsyncThunk(
    'user/editName',
    async(userData, thunkAPI) => {
        console.log('user data name')     
        console.log(userData.firstName, userData.lastName)
        console.log('Json chaine de caractère',JSON.stringify({ firstName: userData.firstName, lastName: userData.lastName}))
        const response = await fetch(`${apiBaseUrl}/profile`,
        {
            method: 'Put',
            headers: {'Content-Type':'application/json', 'Authorization' : `Bearer ${userData.token}`},
            body: JSON.stringify({ firstName: userData.firstName, lastName: userData.lastName})
        })        
        const data = response.json()
        console.log('first data set profile', data)
        return data
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // action sign out de l'utilisateur
         signOut: (state, action) => {
            console.log("-- signOut")
            state = initialState
            return state // pourquoi faut-il retourner le "state" pour qu'il soit pris en compte ? 
        }
    },
    extraReducers: (builder) => {
        // ----------------------------------------------------------------------------
        // -- Intégration de l'action externe signIn dans la slice user ---------------
        // ----------------------------------------------------------------------------
        builder.addCase(signIn.pending, (state, action) => {
            state.api_login = 'pending'
            state.errorMessage = false
        })
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.api_login = 'fulfilled'
            // Succès
            if( action.payload.status === 200 ){
                state.signedIn = true
                state.token = action.payload.body.token
            }
            // Erreur
            if( action.payload.status === 400 ){
                
                state.errorMessage = 'Username or Password invalid'
               
            }
        })
        builder.addCase(signIn.rejected, (state, action) => {
            state.api_login = 'rejected'
        })
        // ----------------------------------------------------------------------------
        // -- Intégration de l'action externe getProfile dans la slice user -----------
        // ----------------------------------------------------------------------------
        builder.addCase(getProfile.pending, (state, action) => {
            state.api_profil = 'pending'
            state.getProfileExec = true
        })
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.api_profil = 'fulfilled'
    
            if( action.payload.status === 200 ){ // If status 200 => user logged in !
                state.getProfile = true
                state.firstName =  action.payload.body.firstName
                state.lastName =  action.payload.body.lastName   
                state.editUserName = true   
            }
        })
        builder.addCase(getProfile.rejected, (state, action) => {
            state.api_profil = 'rejected'
        })

        // ----------------------------------------------------------------------------
        // -- Intégration de l'action externe editUsername dans la slice user -----------
        // ----------------------------------------------------------------------------
        builder.addCase(setProfile.pending, (state, action) => {
            state.profileChanged = false 
        })

        builder.addCase(setProfile.fulfilled, (state, action) => {
            state.setProfile = 'fulfilled'
    
            if( action.payload.status === 200 ){ // If status 200 => user logged in !
                state.firstName =  action.payload.body.firstName
                state.lastName =  action.payload.body.lastName   
                state.profileChanged = true   
            }
        })

        builder.addCase(setProfile.rejected, (state, action) => {
        })

    },    
});

export const {signOut} = userSlice.actions
export const {editUser} = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})
