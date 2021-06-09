<template>
  <div class="navbar">
    <hamburger
      :is-active="isActive"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    ></hamburger>
    <breadcrumb class="breadcrumb-container" />
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'Navbar',
  components: {
    Hamburger,
    Breadcrumb
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleSideBar() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
.breadcrumb-container {
  float: left;
}
</style>
