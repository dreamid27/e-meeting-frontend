<template>
  <!--Begin:: App Aside-->
  <div class="kt-grid__item kt-app__toggle kt-app__aside" id="kt_user_profile_aside">
    <!--begin:: Widgets/Applications/User/Profile1-->
    <div class="kt-portlet">
      <div class="kt-portlet__head kt-portlet__head--noborder">
        <div class="kt-portlet__head-label">
          <h3 class="kt-portlet__head-title"></h3>
        </div>
      </div>
      <div class="kt-portlet__body kt-portlet__body--fit-y">
        <!--begin::Widget -->
        <div class="kt-widget kt-widget--user-profile-1">
          <div class="kt-widget__head">
            <div class="kt-widget__media">
              <img src="~assets/media/users/100_1.jpg" alt="image" />
            </div>
            <div class="kt-widget__content">
              <div class="kt-widget__section">
                <div class="kt-widget__username">
                  {{profileData && profileData.first_name || 'Akhi'}}
                </div>
                <span class="kt-widget__subtitle">{{profileData && profileData.manhaj == 'salaf' ? 'Sudah Mengenal Salaf' : profileData && profileData.manhaj == 'unsalaf' ? 'Baru Mengenal Salaf' : 'Bukan Salaf' }}</span>
              </div>

              <div class="kt-widget__action">
                <button type="button" class="btn btn-info btn-sm">{{profileData && profileData.in_relation == 1  ? 'Sedang Ta\'aruf' : 'Masih Ikthiar'}}</button>
              </div>
            </div>
          </div>
          <div class="kt-widget__body">
            <div class="kt-widget__content">
              <div class="kt-widget__info">
                <span class="kt-widget__label">Email:</span>
                <div>
                  <span class="kt-widget__data">muh.alfaris@gmail.com</span>
                  <i class="flaticon2-correct kt-font-success"></i>
                </div>
              </div>
              <div class="kt-widget__info">
                <span class="kt-widget__label">No Hp:</span>
                <div>
                  <span class="kt-widget__data">+62 81910373275</span>
                  <i class="flaticon2-correct kt-font-success"></i>
                </div>
              </div>
              <div class="kt-widget__info">
                <span class="kt-widget__label">Domisili:</span>
                <span class="kt-widget__data">{{profileData && profileData.domisili_city }}</span>
              </div>
            </div>
            <div class="kt-widget__items">
              <template v-for="(item, idx) in profileMenus">
              <nuxt-link :key="idx"
                :to="item.url"
                class="kt-widget__item" 
                :class="{'kt-widget__item--active': item.url ===  ('/profile/' + activeMenu) }"
              >
                <span class="kt-widget__section">
                  <span class="kt-widget__icon">
                    <!-- <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      class="kt-svg-icon"
                    >
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                        <path
                          d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                          id="Mask"
                          fill="#000000"
                          fill-rule="nonzero"
                          opacity="0.3"
                        />
                        <path
                          d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                          id="Mask-Copy"
                          fill="#000000"
                          fill-rule="nonzero"
                        />
                      </g>
                    </svg> -->
                    <i :class="item.icon" />
                  </span>
                  <span class="kt-widget__desc">{{item.name}}</span>
                </span>
              </nuxt-link>
              </template>
            </div>
          </div>
        </div>
        <!--end::Widget -->
      </div>
    </div>
    <!--end:: Widgets/Applications/User/Profile1-->
  </div>
  <!--End:: App Aside-->
</template>

<script>
import DashboardService from "~/service/dashboardService.js";

export default {
  props: ['activeMenu'],
  data() {
    return {
      profileMenus: [
        { 
          name: 'Overview',
          url: '/profile',
          icon: 'flaticon2-user'
        },
        { 
        name: 'Informasi Personal',
        url: '/profile/informasi-personal',
        icon: 'flaticon2-user'
      },
      { 
        name: 'Gambaran Fisik',
        url: '/profile/gambaran-fisik',
        icon: 'flaticon2-pie-chart-3'
      },
      { 
        name: 'Gambaran Diri',
        url: '/profile/gambaran-diri',
        icon: 'flaticon2-menu-4'
      },
      { 
        name: 'Data Keluarga',
        url: '/profile/data-keluarga',
        icon: 'flaticon2-group'
      },
      { 
        name: 'Pendidikan',
        url: '/profile/pendidikan',
        icon: 'flaticon2-open-text-book'
      },
      { 
        name: 'Pengalaman',
        url: '/profile/pengalaman',
        icon: 'flaticon2-line-chart'
      },
      { 
        name: 'Ibadah',
        url: '/profile/ibadah',
        icon: 'flaticon2-shield'
      }]
    }
  },
  computed: {
    profileData() {
      return this.$store.getters['profile/getMyProfile'];
    }
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

