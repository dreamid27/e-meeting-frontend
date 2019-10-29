<template>
  <div class="zeynep">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>

      <li class="has-submenu">
        <a href="#" data-submenu="stores">Stores</a>

        <div id="stores" class="submenu">
          <div class="submenu-header" data-submenu-close="stores">
            <a href="#">Main Menu</a>
          </div>

          <label>Stores</label>

          <ul>
            <li>
              <a href="#">Istanbul</a>
            </li>

            <li>
              <a href="#">Mardin</a>
            </li>

            <li>
              <a href="#">Amed</a>
            </li>
          </ul>
        </div>
      </li>

      <li class="has-submenu">
        <a href="#" data-submenu="categories">Categories</a>

        <div id="categories" class="submenu">
          <div class="submenu-header" data-submenu-close="categories">
            <a href="#">Main Menu</a>
          </div>

          <label>Categories</label>

          <ul>
            <li class="has-submenu">
              <a href="#" data-submenu="electronics">Electronics</a>

              <div id="electronics" class="submenu">
                <div class="submenu-header" data-submenu-close="electronics">
                  <a href="#">Categories</a>
                </div>

                <label>Electronics</label>

                <ul>
                  <li>
                    <a href="#">Camera & Photo</a>
                  </li>

                  <li>
                    <a href="#">Home Audio</a>
                  </li>

                  <li>
                    <a href="#">Tv & Video</a>
                  </li>

                  <li>
                    <a href="#">Computers & Accessories</a>
                  </li>

                  <li>
                    <a href="#">Car & Vehicle Electronics</a>
                  </li>

                  <li>
                    <a href="#">Portable Audio & Video</a>
                  </li>

                  <li>
                    <a href="#">Headphones</a>
                  </li>

                  <li>
                    <a href="#">Accessories & Supplies</a>
                  </li>

                  <li>
                    <a href="#">Video Projectors</a>
                  </li>

                  <li>
                    <a href="#">Office Electronics</a>
                  </li>

                  <li>
                    <a href="#">Wearable Technology</a>
                  </li>

                  <li>
                    <a href="#">Service Plans</a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a href="#">Books</a>
            </li>

            <li>
              <a href="#">Video Games</a>
            </li>

            <li>
              <a href="#">Computers</a>
            </li>
          </ul>
        </div>
      </li>

      <li>
        <a href="#">Contact</a>
      </li>

      <li>
        <a href="#">About</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped src="./index.scss" />
