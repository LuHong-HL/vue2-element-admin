<template>
  <div class="navbar">
    <hamburger
      :is-active="isActive"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    ></hamburger>
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-dropdown trigger="click" class="avatar-container">
        <div class="avatar-wrapper">
          <img
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            class="user-avatar"
          />
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>
            <router-link to="/">Home</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <a
              href="https://github.com/LuHong-HL/vue2-element-admin"
              target="_blank"
              >Github</a
            >
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">
            <span>Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
    },
    logout() {
      console.log('退出登录')
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
.right-menu {
  float: right;
  height: 100%;
  line-height: 50px;

  .avatar-container {
    margin-right: 30px;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
