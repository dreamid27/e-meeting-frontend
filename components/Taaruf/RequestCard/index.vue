<template>
    <div class="kt-portlet">
        <div class="kt-portlet__body">
          <div class="kt-widget kt-widget--user-profile-3">
            <div class="kt-widget__top">
              <div
                class="kt-widget__pic kt-widget__pic--danger kt-font-danger kt-font-boldest kt-font-light kt-hidden"
              >JM</div>
              <div class="kt-widget__content">
                <div class="kt-widget__head">
                  <a href="#" class="kt-widget__username">
                    Jason Muller
                    <i class="flaticon2-correct kt-font-success"></i>
                  </a>

                  <div class="kt-widget__action">
                    <button type="button" class="btn btn-label-success btn-upper" @click="submitRequest(true)">Terima</button>&nbsp;
                    <button type="button" class="btn btn-brand btn-upper" @click="submitRequest(false)">Mundur</button>
                  </div>
                </div>

                <div class="kt-widget__subhead">
                  <a href="#">
                    <i class="flaticon2-new-email"></i>jason@siastudio.com
                  </a>
                  <a href="#">
                    <i class="flaticon2-calendar-3"></i>PR Manager
                  </a>
                  <a href="#">
                    <i class="flaticon2-placeholder"></i>Melbourne
                  </a>
                </div>

                <div class="kt-widget__info">
                  <div class="kt-widget__desc">
                    I distinguish three main text objektive could be merely to inform people.
                    <br />A second could be persuade people.You want people to bay objective
                  </div>
                  <div class="kt-widget__progress">
                    <div class="kt-widget__text">Progress</div>
                    <div class="progress" style="height: 5px;width: 100%;">
                      <div
                        class="progress-bar kt-bg-success"
                        role="progressbar"
                        style="width: 65%;"
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="kt-widget__stats">78%</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="kt-widget__bottom">
              <div class="kt-widget__item">
                <div class="kt-widget__icon">
                  <i class="flaticon-piggy-bank"></i>
                </div>
                <div class="kt-widget__details">
                  <span class="kt-widget__title">Earnings</span>
                  <span class="kt-widget__value">
                    <span>$</span>249,500
                  </span>
                </div>
              </div>

              <div class="kt-widget__item">
                <div class="kt-widget__icon">
                  <i class="flaticon-confetti"></i>
                </div>
                <div class="kt-widget__details">
                  <span class="kt-widget__title">Expenses</span>
                  <span class="kt-widget__value">
                    <span>$</span>164,700
                  </span>
                </div>
              </div>

              <div class="kt-widget__item">
                <div class="kt-widget__icon">
                  <i class="flaticon-pie-chart"></i>
                </div>
                <div class="kt-widget__details">
                  <span class="kt-widget__title">Net</span>
                  <span class="kt-widget__value">
                    <span>$</span>782,300
                  </span>
                </div>
              </div>

              <div class="kt-widget__item">
                <div class="kt-widget__icon">
                  <i class="flaticon-file-2"></i>
                </div>
                <div class="kt-widget__details">
                  <span class="kt-widget__title">73 Tasks</span>
                  <a href="#" class="kt-widget__value kt-font-brand">View</a>
                </div>
              </div>

              <div class="kt-widget__item">
                <div class="kt-widget__icon">
                  <i class="flaticon-chat-1"></i>
                </div>
                <div class="kt-widget__details">
                  <span class="kt-widget__title">648 Comments</span>
                  <a href="#" class="kt-widget__value kt-font-brand">View</a>
                </div>
              </div>

              <div class="kt-widget__item">
                <div class="kt-widget__icon">
                  <i class="flaticon-network"></i>
                </div>
                <div class="kt-widget__details">
                  <div class="kt-section__content kt-section__content--solid">
                    <div class="kt-media-group">
                      <a
                        href="#"
                        class="kt-media kt-media--sm kt-media--circle"
                        data-toggle="kt-tooltip"
                        data-skin="brand"
                        data-placement="top"
                        title
                        data-original-title="John Myer"
                      >
                        <img src="~assets/media/users/100_1.jpg" alt="image" />
                      </a>
                      <a
                        href="#"
                        class="kt-media kt-media--sm kt-media--circle"
                        data-toggle="kt-tooltip"
                        data-skin="brand"
                        data-placement="top"
                        title
                        data-original-title="Alison Brandy"
                      >
                        <img src="~assets/media/users/100_10.jpg" alt="image" />
                      </a>
                      <a
                        href="#"
                        class="kt-media kt-media--sm kt-media--circle"
                        data-toggle="kt-tooltip"
                        data-skin="brand"
                        data-placement="top"
                        title
                        data-original-title="Selina Cranson"
                      >
                        <img src="~assets/media/users/100_11.jpg" alt="image" />
                      </a>
                      <a
                        href="#"
                        class="kt-media kt-media--sm kt-media--circle"
                        data-toggle="kt-tooltip"
                        data-skin="brand"
                        data-placement="top"
                        title
                        data-original-title="Micheal York"
                      >
                        <img src="~assets/media/users/100_3.jpg" alt="image" />
                      </a>
                      <a
                        href="#"
                        class="kt-media kt-media--sm kt-media--circle"
                        data-toggle="kt-tooltip"
                        data-skin="brand"
                        data-placement="top"
                        title
                        data-original-title="Micheal York"
                      >
                        <span>+5</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import DashboardService from "~/service/dashboardService.js";
import PartnerService from '../../../service/partnerService';

export default {
    props: ['initData'],
    methods: {
      submitRequest(isAccept) {
        const statusCode = isAccept ? 1 : -1; //1 terima //2 tolak
        const partnerService = new PartnerService(this.$axios, this.$auth);
        console.log(this.initData._id)
        partnerService.postSetStatusTaaruf({id: this.initData._id, status: statusCode}).then(x => console.log(x));
      }
    }
};
</script>
<style lang="scss" scoped src="./index.scss" />

