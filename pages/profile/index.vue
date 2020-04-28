<template>
  <div class="wrapper">
  </div>


  <!-- <div class="kt-grid__item kt-grid__item--fluid kt-app__content">
    <div class="row">
      <div class="col-xl-12">
        <mw-portlet isContinueSaving="isContinueSaving">
          <template v-slot:title>Overview</template>
          <template v-slot:body>
            <div class="kt-form kt-form--label-right">
              <div class="kt-section kt-section--first">
                <div class="kt-section__body">
                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">Avatar</label>
                    <div class="col-lg-9 col-xl-6">
                      <div class="kt-avatar kt-avatar--outline" id="kt_user_avatar">
                        <div
                          class="kt-avatar__holder"
                          style="background-image: url(&quot;http://keenthemes.com/metronic/preview/default/custom/user/assets/media/users/100_1.jpg&quot;);"
                        ></div>
                        <label
                          class="kt-avatar__upload"
                          data-toggle="kt-tooltip"
                          title
                          data-original-title="Change avatar"
                        >
                          <i class="fa fa-pen"></i>
                          <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
                        </label>
                        <span
                          class="kt-avatar__cancel"
                          data-toggle="kt-tooltip"
                          title
                          data-original-title="Cancel avatar"
                        >
                          <i class="fa fa-times"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">
                      Email
                    </label>
                    <div class="col-lg-9 col-xl-6">
                      <input class="form-control" type="text" value="muh.alfaris@gmail.com" disabled />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">
                      No Hp
                    </label>
                    <div class="col-lg-9 col-xl-6">
                      <div class="form-group">
                        <input class="form-control" type="text" value="+62 81910373275 " disabled />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </mw-portlet>
      </div>
    </div>
  </div> -->
</template>

<script>
import Logo from "~/components/Logo.vue";
import DashboardService from "~/service/dashboardService.js";
import SideMenu from "~/components/Profile/SideMenu";
import Content from "~/components/Profile/Content";
import ProfileService from "~/service/profileService";
import cities from "~/assets/data/cities.json";
import province from "~/assets/data/province.json";
import Portlet from "~/components/Profile/Portlet";

export default {
  layout: "dashboard",
  middleware: "auth",
  components: {
    "profile-sidemenu": SideMenu,
    "profile-content": Content,
    "mw-portlet": Portlet
  },
  async asyncData({ params, $axios, $auth, route }) {
    try {
      const profileService = new ProfileService($axios, $auth);
      const objModel = await profileService.getMyProfile();
      return { profileData: objModel.data };
    } catch (error) {
      console.error(error);
    }
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

