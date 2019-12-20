<template>
  <!--Begin:: App Aside-->
  <div class="kt-grid__item kt-app__toggle kt-app__aside" id="kt_user_profile_aside">
    <!--begin:: Widgets/Applications/User/Profile1-->
    <div class="kt-portlet">
      <div class="kt-portlet__head kt-portlet__head--noborder">
        <div class="kt-portlet__head-label">
          <h3 class="kt-portlet__head-title"></h3>
        </div>
        <div class="kt-portlet__head-toolbar">
          <a href="#" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown">
            <i class="flaticon-more-1"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-md">
            <!--begin::Nav-->
            <ul class="kt-nav">
              <li class="kt-nav__head">
                Export Options
                <span
                  data-toggle="kt-tooltip"
                  data-placement="right"
                  title="Click to learn more..."
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    class="kt-svg-icon kt-svg-icon--brand kt-svg-icon--md1"
                  >
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <rect id="bound" x="0" y="0" width="24" height="24" />
                      <circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                      <rect
                        id="Rectangle-9"
                        fill="#000000"
                        x="11"
                        y="10"
                        width="2"
                        height="7"
                        rx="1"
                      />
                      <rect
                        id="Rectangle-9-Copy"
                        fill="#000000"
                        x="11"
                        y="7"
                        width="2"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>
                </span>
              </li>
              <li class="kt-nav__separator"></li>
              <li class="kt-nav__item">
                <a href="#" class="kt-nav__link">
                  <i class="kt-nav__link-icon flaticon2-drop"></i>
                  <span class="kt-nav__link-text">Activity</span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a href="#" class="kt-nav__link">
                  <i class="kt-nav__link-icon flaticon2-calendar-8"></i>
                  <span class="kt-nav__link-text">FAQ</span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a href="#" class="kt-nav__link">
                  <i class="kt-nav__link-icon flaticon2-telegram-logo"></i>
                  <span class="kt-nav__link-text">Settings</span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a href="#" class="kt-nav__link">
                  <i class="kt-nav__link-icon flaticon2-new-email"></i>
                  <span class="kt-nav__link-text">Support</span>
                  <span class="kt-nav__link-badge">
                    <span class="kt-badge kt-badge--success kt-badge--rounded">5</span>
                  </span>
                </a>
              </li>
              <li class="kt-nav__separator"></li>
              <li class="kt-nav__foot">
                <a class="btn btn-label-danger btn-bold btn-sm" href="#">Upgrade plan</a>
                <a
                  class="btn btn-clean btn-bold btn-sm"
                  href="#"
                  data-toggle="kt-tooltip"
                  data-placement="right"
                  title="Click to learn more..."
                >Learn more</a>
              </li>
            </ul>
            <!--end::Nav-->
          </div>
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
                <a href="#" class="kt-widget__username">
                  Jason Muller
                  <i class="flaticon2-correct kt-font-success"></i>
                </a>
                <span class="kt-widget__subtitle">Head of Development</span>
              </div>

              <div class="kt-widget__action">
                <button type="button" class="btn btn-info btn-sm">chat</button>&nbsp;
                <button type="button" class="btn btn-success btn-sm">follow</button>
              </div>
            </div>
          </div>
          <div class="kt-widget__body">
            <div class="kt-widget__content">
              <div class="kt-widget__info">
                <span class="kt-widget__label">Email:</span>
                <a href="#" class="kt-widget__data">matt@fifestudios.com</a>
              </div>
              <div class="kt-widget__info">
                <span class="kt-widget__label">Phone:</span>
                <a href="#" class="kt-widget__data">44(76)34254578</a>
              </div>
              <div class="kt-widget__info">
                <span class="kt-widget__label">Location:</span>
                <span class="kt-widget__data">Melbourne</span>
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
      profileMenus: [{ 
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
};
</script>
<style lang="scss" scoped src="./index.scss" />

