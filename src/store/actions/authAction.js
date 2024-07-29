import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { auth, storage } from "../Firebaseconfig"

const signUpSuccess = (user) => {
    return {
        type: "SIGNUP_SUCCESS",
        payload: user
    }
}
const signUpError = (error) => {
    return {
        type: "SIGNUP_ERROR",
        payload: error
    }
}
const loginSuccess = (user) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: user
    }
}
const loginError = (error) => {
    return {
        type: "LOGIN_ERROR",
        payload: error
    }
}

const logOutSuccess = () => {
    return {
        type: "LOGOUT_SUCCESS",
    }
}

const logOutError = (error) => {
    return {
        type: "LOGOUT_ERROR",
        payload: error
    }
}

const RecordUpdated = (record) => {
    return {
        type: "LOGOUT_ERROR",
        payload: record
    }
}

const RecordError = (record) => {
    return {
        type: "LOGOUT_ERROR",
        payload: record
    }
}

// Create New User
export const signUpAsync = (data) => {

    return (dispatch) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCr) => {
                console.log("userCr", userCr.user)
                dispatch(signUpSuccess(userCr.user))
            })
            .catch((error) => {
                console.log("ERROR", error.message)
                dispatch(signUpError(error.message))
            })
    }
}

// Login With Existing User
export const loginAsync = (data) => {

    return (dispatch) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCr) => {
                console.log("userCr", userCr.user)
                dispatch(loginSuccess(userCr.user))
            })
            .catch((error) => {
                console.log("ERROR", error.message)
                dispatch(loginError(error.message))
            })
    }
}

// SignIn Through Google
export const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    return (dispatch) => {
        signInWithPopup(auth, googleProvider)
            .then((userCr) => {
                console.log("userCr", userCr.user)
                dispatch(loginSuccess(userCr.user))
            })
            .catch((error) => {
                console.log("ERROR", error.message)
                dispatch(loginError(error.message))
            })
    }
}

// SignOut a User
export const signOutUser = () => {

    return (dispatch) => {
        signOut(auth).then(() => {
            console.log("UserSignOut")
            dispatch(logOutSuccess())
        }).catch((error) => {
            console.log("ERROR", error.message)
            dispatch(logOutError(error.message))
        });
    }
}

export const uploadFile = (file) => {
    return async (dispatch) => {
        try {
            const storageRef = ref(storage, file.name);
            const snapshot = await uploadBytes(storageRef, file);
            console.log("File uploaded successfully:", snapshot);

            getDownloadURL(ref(storage, file.name))
                .then((url) => {
                    console.log("URL", url);
                }).catch((error) => {
                    console.log("Error Fetching File URL!", error.message)
                })
        }
        catch (error) {
            console.error("Error uploading file:", error);
        }
    }
}