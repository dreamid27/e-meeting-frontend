import ProfileService from '~/service/profileService';

export const state = () => ({
    _dataUser: null,
    myProfile: null,
    isContinueSaving: false,
    section: ''
  })

export const mutations = {
    SET_DATA_USER(state, data) {
        const objUser = {};
        objUser['fullName'] = data.full_name;
        objUser['firstName'] = data.first_name;
        objUser['lastName'] = data.last_name;
        objUser['inRelation'] = data.in_relation == 1;
        state._dataUser = objUser;
    },
    SET_MY_PROFILE(state, data) {
        state.myProfile = data;
    },
    SET_ISCONTINUE_SAVING(state, data) {
        state.isContinueSaving = data;
    },
    SET_SECTION(state, data) {
        state.section = data;
    }
}

export const actions = {
    async setMyProfile({ commit }, data) {
        try {
            commit('SET_LOADING', true, {root: true});
            const profileService = new ProfileService(this.$axios, this.$auth);
            const profileData = await profileService.updateProfile(data);
            commit('SET_MY_PROFILE', profileData.data);
            commit('SET_LOADING', false, {root: true});
            return profileData;
        } catch (error) {
            throw new Error(error);
        }
    },
    setIsContinueSaving({ commit }, data) {
        try {
            commit('SET_ISCONTINUE_SAVING', data);
        } catch (error) {
            throw new Error(error);
        }
    },
    setSection({ commit }, data) {
        try {
            commit('SET_SECTION', data);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const getters = {
    getProfile(state) {
        return state._dataUser;
    },
    getMyProfile(state) {
        return state.myProfile;
    },
    isContinueSaving(state) {
        return state.isContinueSaving;
    },
    getSection(state) {
        return state.section;
    }
}