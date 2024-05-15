import { defineStore } from 'pinia'

export interface AuthUser extends Record<string, any> {}

export interface AuthState {
    loggedIn: boolean
    user: AuthUser | null
    loading: boolean
    locale: string | null
    accessToken: string | null
    refreshToken: string | null
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): AuthState => {
        const { token, user, locale, refresh_token } = useAuthStorage()

        return {
            loggedIn: !!token.value,
            user: user.value,
            locale: user.value?.locale,
            loading: false,
            accessToken: token.value,
            refreshToken: refresh_token.value
        }
    },
    actions: {
        logout() {
            const { clear } = useAuthStorage()
            clear()

            this.loggedIn = false
            this.user = null
        },
        fetchUser() {

        }
    },
})
