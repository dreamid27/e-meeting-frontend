<template>
  <div
    class="kt-content kt-content--fit-top kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
    id="kt_content"
  >
    <!-- begin:: Subheader -->
    <div class="kt-subheader kt-grid__item" id="kt_subheader">
      <div class="kt-container">
        <div class="kt-subheader__main">
          <h3 class="kt-subheader__title">Frequently Asked Questions</h3>

          <div class="kt-subheader__breadcrumbs">
            <a href="#" class="kt-subheader__breadcrumbs-home">
              <i class="flaticon2-shelter"></i>
            </a>
            <span class="kt-subheader__breadcrumbs-separator"></span>
            <a href class="kt-subheader__breadcrumbs-link">Dashboard</a>
            <span class="kt-subheader__breadcrumbs-separator"></span>
            <a href class="kt-subheader__breadcrumbs-link">Default Dashboard</a>
          </div>
        </div>
      </div>
    </div>
    <!-- end:: Subheader -->

    <!-- begin:: Content -->
    <div class="kt-container kt-grid__item kt-grid__item--fluid">
        <div class="kt-portlet">
          <div class="kt-portlet__body">
            <div class="kt-infobox">
              <div class="kt-infobox__body">
                <div class="row">
                  <div class="col-lg-3">
                    <mw-sidemenu :initData="faqItems" :activeMenu="activeHash" />
                  </div>
                  <div class="col-lg-9">
                    <mw-content :initData="contentFaq" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- end:: Content -->
  </div>
</template>

<script>
import SideMenu from '~/components/Faq/SideMenu';
import Content from '~/components/Faq/Content';
export default {
  layout: "dashboard",
  middleware: "auth",
  components: {
    'mw-sidemenu': SideMenu,
    'mw-content': Content
  },
  watch: {
    $route(to, from) {
      this.activeHash = to.hash ? to.hash.replace('#', '') : 'umum';
      this.contentFaq = this.faqItems.find(obj => obj.slug === this.activeHash).items;
    }
  },
  data() {
    return {
      faqItems: [
        {
          type_question: 'Umum',
          slug: 'umum',
          items: [
            {
              title: 'Apakah Taaruf di www.mawaddahindonesia.com dipungut biaya ?',
              desc: 'Gratiss! Tidak dipungut biaya.'
            },
            {
              title: 'Bagaimana caranya ikut taaruf ?',
              desc: 'Klik halaman Taaruf, kemudian klik sign up , kemudian baca persyaratan yg ditentukan. Jika setuju, isi biodata.'
            },
            {
              title: 'Apakah setelah taaruf harus menggunakan jasa walimah Mawaddah Indonesia ?',
              desc: 'Tidak harus. Setiap member bebas memilih jasa walimah.'
            },
            {
              title: 'Berapa lama proses taaruf ?',
              desc: 'Kami dari tim Mawaddah menyarankan agar tidak berlama-lama dalam berta’aruf, setelah saling sepakat untuk khitbah maka estimasi dari khitbah menuju ke pernikahan bisa hanya 3 Bulan. Karena celah syaiton dan celah fitnah akan timbul jika terlalu lama berta’aruf.'
            },
            {
              title: 'Bagaimana Proses Taaruf nya ?',
              desc: '<ol><li>Diawali dengan pengisian biodata secara lengkap dan detail</li><li>Lalu mengajukan ta\'aruf ataupun di ajukan ta\'aruf. untuk mengajukan ta\'aruf bisa mencari pasangan ta’aruf dimenu kanan "Calon Pasangan Ta\'aruf" dan jika diajukan ta\'aruf bisa dilihat di atas kanan icon lingkaran yang ditengah.</li><li>Jika sudah masuk dalam proses ta\'aruf, silahkan ajukan 11 pertanyaan berikut dengan jawabannya pada menu diatas “Ajukan Pertanyaan”.</li> </ol>'
            },
            {
              title: 'Apa saja batasan dalam taaruf di Mawaddah Indonesia ?',
              desc: 'Batasan-batasan untuk bertanya di dialog, tidak bertanya aib massa lalu, tidak bertanya kontak pribadi / email / sosial media. Silahkan bertanya yang penting-penting saja, yang sekiranya bisa meyakinkan untuk lanjut ke tahap berikutnya.'
            },
            {
              title: 'Kenapa selalu gagal upload foto ?',
              desc: 'Dicek kembali ukuran fotonya. Jangan lebih dari 1 Mb, dan pixels gambar dibawah 1000x1000.'
            },
            {
              title: 'Bagaimana cara mengisi menu nadzor ?',
              desc: 'KLik di menu nadzor, isi tanggal dan tempat pelaksanaan. Jika Akhwat setuju, Akhwat harus mengisikan no mahrom. Ikhwan berkomunikasi dengan wali akhwat utk pelaksanaan nadhor.'
            },
            {
              title: 'Apakah akhwat bercadar harus mengupload fotonya ?',
              desc: 'Tidak harus. Namun jika tidak ada foto, akan mempengaruhi pasangan taaruf untuk menentukan langkah lanjut atau mundur.'
            }
          ]
        },
        {
          type_question: 'Syariat',
          slug: 'syariat',
          items: [ 
            {
              title: 'Bolehkah bertanya tentang aib masa lalu ?',
              desc: 'Ahsan tidak bertanya tentang aib masa lalu.'
            },
            {
              title: 'Bagaimana proses nadhor ?',
              desc: 'Isikan menu nadhor, akhwat isikan no mahrom, dan ikhwan hubungi wali akhwat. Untuk pelaksanaan nadhor, ahsan dilakukan di rumah akhwat. Boleh dilakukan di tempat umum, dengan syarat akhwat harus didampingi walinya. Tidak boleh bertemu berduaan.'
            },
            {
              title: 'Bagaimana kelanjutan setelah nadhor ?',
              desc: 'Setelah Nadhor berlangsung, lakukan istikharah, Mantapkan hati terhadap calon yang telah di Nadhor. Jika memutuskan untuk lanjut, bisa hubungi admin untuk meminta nomor dari Mahrom. Atau bisa langsung hubungi wali mahrom akhwat untuk berkomunikasi lebih lanjut. Atau jika memutuskan untuk tidak lanjut bisa langsung klik pilihan “Mundur dari ta’aruf”.'
            },
            {
              title: 'Siapa saja yang disebut mahrom ?',
              desc: 'MAHROM = AYAH/KAKAK/ADIK LAKI-LAKI, ATAU SAUDARA KANDUNG DARI AYAH/IBU LAKI-LAKI. SEMUA HARUS SUDAH BALIGH DAN BISA DIJADIKAN WALI NIKAH.'
            },
            {
              title: 'Apa itu Taaruf ?',
              desc: 'Ta’aruf adalah proses saling mengenal antara dua orang lawan jenis yang ingin menikah. Jika diantara mereka berdua ada kecocokan maka bisa berlanjut ke jenjang pernikahan, namun, jika tidak, maka proses berhenti dan tidak berlanjut.'
            },
            {
              title: 'Bagaimana Tata Cara Taaruf sesuai syariat ?',
              desc: 'dijelaskan oleh Syekh Utsaimin rahimahullah dalam Syarhul Mumti’ XII/22 sebagai berikut: \
              <ul><li>[1]. Tidak berkhalwat (berdua-duan) dengan seorang wanita tatkala memandangnya. Untuk menjauhi khalwat ketika nazhar, maka ia bisa melihat wanita yang ingin ia pinang ditemani wali si wanita atau jika tidak mampu maka ia bisa bersembunyi dan melihat wanita tersebut di tempat di mana ia sering melalui tempat tersebut.</li>\
              <li>[2]. Hendaknya memandang dengan tanpa syahwat, karena nazhar (memandang) wanita ajnabiyah karena syahwat diharamkan. Selain itu, tujuan dari melihat calon istri adalah untuk mengetahui kondisinya bukan untuk menikmatinya.</li>\
              <li>[3]. Hendaknya ia memiliki prasangka kuat bahwa sang wanita akan menerima lamarannya.</li>\
              <li>[4]. Hendaknya ia memandang kepada apa yang biasanya nampak dari tubuh sang wanita, seperti muka dan telapak tangan.</li>\
              <li>[5]. Hendaknya ia benar-benar bertekad untuk melamar sang wanita. Yaitu hendaknya pandangannya terhadap sang wanita itu merupakan hasil dari keseriusannya untuk maju menemui wali wanita tersebut untuk melamar putri mereka. Adapun jika ia hanya ingin berputar-putar melihat-lihat para wanita satu per satu, maka hal ini tidak diperbolehkan.</li>\
              <li>[6]. Hendaknya sang wanita yang dinazhar tidak berhias, memakai wangi-wangian, memakai celak, atau yang sarana-sarana kecantikan yang lainnya.</li><ul>\
              </ul></ul>'
            },
          ]
        }
      ],
      activeHash: '',
      contentFaq: []
    }
  },
  mounted() {
    this.activeHash = this.$route.hash ? this.$route.hash.replace('#', '') : 'umum';
    this.contentFaq = this.faqItems.find(obj => obj.slug === this.activeHash).items;
    var de = 'dsdsdsads'
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

