<template>
  <div id="app" class="">
    <el-container>
      <el-header height="80px" style="background-color: #062f49;margin-bottom: 24px;">
        <md-header></md-header>
      </el-header>
      <el-main class="container">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MdHeader from './components/header'
import PcView from './pages/pc-view'
import IView from './pages/iview-view'
export default {
  name: "app",
  components: { MdHeader, PcView, IView }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: #FFFFFF;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", SimSun, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;

  &.is-component {
    overflow: hidden;
  } 
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;

  @when component {
    overflow-y: hidden;

    .main-cnt {
      padding: 0;
      margin-top: 0;
      height: 100%;
      min-height: auto;
    }

    .headerWrapper {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 1500;

      .container {
        padding: 0;
      }
    }
  }
}

a {
  color: #409eff;
  text-decoration: none;
}

code {
  background-color: rgba(230, 162, 60, 0.2);
  padding: 0 4px;
  border: 1px solid rgba(230, 162, 60, 0.5);
  border-radius: 4px;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

code.hljs {
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: solid 1px #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  -webkit-font-smoothing: auto;
}

.main-cnt {
  margin-top: -80px;
  padding: 80px 0 340px;
  box-sizing: border-box;
  min-height: 100%;
}

.container,
.page-container {
  width: 100%;
  padding: 0;
  margin: 0 auto;
}

.page-container {
  padding-top: 55px;

  h2 {
    font-size: 28px;
    color: #1f2d3d;
    margin: 0;
  }
  h3 {
    font-size: 22px;
  }
  h2,
  h3,
  h4,
  h5 {
    font-weight: normal;
    color: #1f2f3d;
    margin: 32px 0 8px;

    &:hover a {
      opacity: 0.4;
    }

    a {
      float: left;
      margin-left: -20px;
      opacity: 0;
      cursor: pointer;

      &:hover {
        opacity: 0.4;
      }
    }
  }

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin: 12px 0;
  }

  .tip {
    padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: #50bfff 5px solid;
    margin: 20px 0;

    code {
      background-color: rgba(255, 255, 255, 0.7);
      color: #445368;
    }
  }

  .warning {
    padding: 8px 16px;
    background-color: #fff6f7;
    border-radius: 4px;
    border-left: #fe6c6f 5px solid;
    margin: 20px 0;

    code {
      background-color: rgba(255, 255, 255, 0.7);
      color: #445368;
    }
  }
}
.demo {
  margin: 20px 0;
}
.page-component__scroll {
  height: calc(100% - 80px);
  margin-top: 80px;

  .el-scrollbar__wrap {
    overflow-x: auto;
  }
}

.page-component {
  box-sizing: border-box;
  height: 100%;
  max-width: calc(100% - 240px);
  flex-grow: 1;

  &.page-container {
    padding: 0;
  }

  .page-component__nav {
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 80px;
    transition: padding-top 0.3s;

    .el-scrollbar__wrap {
      height: 100%;
    }

    &.is-extended {
      padding-top: 0;
    }
  }

  .side-nav {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 0;

    & > ul {
      padding-bottom: 50px;
    }
  }

  .page-component__content {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }

  .content {
    padding: 24px;
    padding-right: 0;
    flex-grow: 2;

    & {
      h3 {
        margin: 55px 0 20px;
      }

      table {
        border-collapse: collapse;
        width: 100%;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 45px;
        line-height: 1.5em;

        strong {
          font-weight: normal;
        }

        td,
        th {
          border-bottom: 1px solid #d8d8d8;
          padding: 15px;
          max-width: 250px;
        }

        th {
          text-align: left;
          white-space: nowrap;
          color: #666;
          font-weight: normal;
        }

        td {
          color: #333;
        }

        th:first-child,
        td:first-child {
          padding-left: 10px;
        }
      }

      ul:not(.timeline) {
        margin: 10px 0;
        padding: 0 0 0 20px;
        font-size: 14px;
        color: #5e6d82;
        line-height: 2em;
      }
    }
  }

  .page-component-up {
    background-color: #fff;
    position: fixed;
    right: 100px;
    bottom: 150px;
    size: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);

    i {
      color: #409eff;
      display: block;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
    }

    &.hover {
      opacity: 1;
    }
  }
  .back-top-fade-enter,
  .back-top-fade-leave-active {
    transform: translateY(-30px);
    opacity: 0;
  }
}


.page-container {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,.28);
  display: flex;
  padding: 24px 0 24px 24px;
  flex-wrap: wrap;
}

.side-nav {
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: -24px;
}

.block_highline {
  /* border:0.5px #4A90E2 solid; */
  background-color: blue;
  opacity: 0.2;
  z-index: 999;
  position: absolute;
  /* box-shadow: 2px 2px 4px 2px #666; */
}
</style>
