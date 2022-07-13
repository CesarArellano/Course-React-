import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FirebaseAuth } from './config';
export const googleProvider = new GoogleAuthProvider();

interface GoogleSignInRespProps {
  ok?: boolean;
  uid?: string;
  displayName?: string | null;
  email?: string | null;
  photoURL?: string | null;
  errorMessage?: string | unknown;
}

export const signInWithGoogle = async (): Promise<GoogleSignInRespProps> => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    }
  } catch ( error:any ) {
    const errorMessage = `${ error.message }`;
    console.log(errorMessage);
    return { 
      ok: false,
      errorMessage
    };
  }
}