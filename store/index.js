import ProfileService from '~/service/profileService';

export const mutations = {
  SET_LOADING(state, data) {
      console.log('loading', data)
      state.isLoading = data;
  }
}

export const actions = {
  async nuxtServerInit ({commit, state}, { req }) {
    if (state.auth.loggedIn) {
      const profileService = new ProfileService(this.$axios, this.$auth);
      const objModel = await profileService.getMyProfile();
      commit('profile/SET_DATA_USER',  objModel.data);
    }
  }
}

export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return state.auth.user
    },
    isLoading(state) {
      return state.isLoading;
    }
}