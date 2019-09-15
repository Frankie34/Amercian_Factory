<template>
<el-container>
  <el-col :span="5" class="aside">
    <h5>Default colors</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Manufacture">
          <el-menu-item index="1-1" @click="ManuView = !ManuView">Working Process</el-menu-item>
          <el-menu-item index="1-2" @click="showAll = true" >Finish Work</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Insurer">
          <el-menu-item index="1-3" @click="InsuView = !InsuView">Disability identification</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Regulator">
          <el-menu-item index="1-5" @click="ReguView = !ReguView">Admin Portal</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Worker">
          <el-menu-item index="1-7" @click="WorkerView = !WorkerView">Recieve Payment</el-menu-item>
        </el-menu-item-group>
        </el-submenu>
    </el-menu>
  </el-col>
  <el-container class="mainBox">
    <el-header> </el-header>
    <img src="../assets/money.jpg"  alt="payment"  v-if="WorkerView"/>
    <el-container class="contentBox" v-if="ManuView">
      <el-steps :active="active" align-center class="topBox">
        <el-step title="Step 1" description="Washing"></el-step>
        <el-step title="Step 2" description="Merge"></el-step>
        <el-step title="Step 3" description="Heating"></el-step>
        <el-step title="Step 4" description="Steam Pressure"></el-step>
      </el-steps>
      <el-button @click="showAll = false;next()"> Go </el-button>
    </el-container>
    <el-container class="sideBox" v-if="InsuView">
      <el-timeline class="block">
        <el-timeline-item timestamp="2019/9/12" placement="top" v-if="showAll || active > 3">
          <el-card>
            <h4>Process Update: "Steam Pressure"</h4>
            <p> * Tom Get Injured *</p>
            <p>Sean committed 2019/9/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/3" placement="top" v-if="showAll || active > 2">
          <el-card>
            <h4>Process Update: "Heating"</h4>
            <p>Tom committed 2019/9/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/2" placement="top" v-if="showAll || active > 1">
          <el-card>
            <h4>Process Update: "Merge"</h4>
            <p>Tom committed 2019/9/2 20:46</p>
          </el-card>
        </el-timeline-item>
         <el-timeline-item timestamp="2019/9/1" placement="top" v-if="showAll || active > 0">
          <el-card>
            <h4>Process Update: "Washing"</h4>
            <p>Tom committed 2019/9/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <el-timeline class="block">
        <el-timeline-item timestamp="2019/9/12" placement="top" v-if="showAll || active > 3">
          <el-card>
            <h4>Block Update: "Injured Commit."</h4>
            <p> * Tom Get Injured *</p>
            <p> Payment Process Start</p>
            <p>Sean committed 2019/9/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/3" placement="top" v-if="showAll || active > 2">
          <el-card>
            <h4>Block Update: "Heating Done"</h4>
            <p>Tom committed 2019/9/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/2" placement="top" v-if="showAll || active > 1">
          <el-card>
            <h4>Block Update: "Merge Done"</h4>
            <p>Tom committed 2019/9/2 20:46</p>
          </el-card>
        </el-timeline-item>
         <el-timeline-item timestamp="2019/9/1" placement="top" v-if="showAll || active > 0">
          <el-card>
            <h4>Block Update: "Washing Done"</h4>
            <p>Tom committed 2019/9/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-container>
    <el-container class="sideBox" v-if="ReguView">
      <digi-block class="block" title="Perform." percent="95%"/>
      <digi-block class="block" title="Quality." percent="84%"/>
    </el-container>
    <chart
          v-if="ReguView"
          :options="bar"
          :init-options="initOptions"
          ref="bar"
          theme="ovilia-green"
          autoresize
        />
      <chart
          v-if="ReguView"
          :options="bar"
          :init-options="initOptions"
          ref="bar"
          theme="dark"
          autoresize
        />
      <p v-if="seconds <= 0"><small>Loaded.</small></p>
      <p v-else><small>Data coming in <b>{{ seconds }}</b> second{{ seconds > 1 ? 's' : '' }}...</small></p>
      <p><el-button v-if="ReguView" @click="refresh" :disabled="seconds > 0">Refresh</el-button></p>
  </el-container>
    <el-container>
    <el-header></el-header>
    <el-header class="stageTitle" v-if="ManuView">Quality Control</el-header>
    <el-header class="stageTitle" v-if="ReguView">Efficiency & More Data</el-header>
    <el-header class="stageTitle" v-if="InsuView">Insurance Process</el-header>
    <el-timeline v-if="ManuView" class="topBox">
        <el-timeline-item timestamp="2019/9/12" placement="top" v-if="showAll || active > 3">
          <el-card>
            <h4>Process Update: "Steam Pressure"</h4>
            <p>Tom committed 2019/9/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/3" placement="top" v-if="showAll || active > 2">
          <el-card>
            <h4>Process Update: "Heating"</h4>
            <p>Tom committed 2019/9/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/2" placement="top" v-if="showAll || active > 1">
          <el-card>
            <h4>Process Update: "Merge"</h4>
            <p>Tom committed 2019/9/2 20:46</p>
          </el-card>
        </el-timeline-item>
         <el-timeline-item timestamp="2019/9/1" placement="top" v-if="showAll || active > 0">
          <el-card>
            <h4>Process Update: "Washing"</h4>
            <p>Tom committed 2019/9/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <chart
          class="otherBox"
          v-if="ReguView"
          :options="pie"
          :init-options="initOptions"
          autoresize
        />
      <!-- <chart
            :options="map"
            :init-options="initOptions"
            ref="map"
            autoresize
          /> -->
      <chart
            v-if="ReguView"
            :options="scoreRadar"
            :init-options="initOptions"
            autoresize
          />
      <digi-block class="block" title="Efficiency." percent="75%" v-if="ReguView"/>
      <digi-block class="block" title="Quantity." percent="50%" v-if="ReguView"/>
    </el-container>
</el-container>
</template>

<script>
import DigiBlock from './DigiBlock.vue'
import qs from 'qs'
import ECharts from './ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/dataset'
import 'echarts/map/js/world'
import 'zrender/lib/svg/svg'

import getBar from './data/bar'
import pie from './data/pie'
import polar from './data/polar'
import scatter from './data/scatter'
import map from './data/map'
import { c1, c2 } from './data/connect'
import store from './store'

// built-in theme
import 'echarts/theme/dark'

// custom theme
import theme from './theme.json'

// Map of China
import chinaMap from './china.json'

// registering map data
ECharts.registerMap('china', chinaMap)

// registering custom theme
ECharts.registerTheme('ovilia-green', theme)


export default {
  name: 'HomePage',
  components: {
    DigiBlock,
    chart: ECharts
  },
  data() {
    let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }
      return {
          cnt:0,
          showAll: true,
          active:1,
          pie,
          map,
          msg: 'hello',
          active: 0,
          ManuView: false,
          InsuView: false,
          ReguView: false,
          WorkerView: false,
          bar: getBar(),
          scores: [
      { name: 'Washing Worker', max: 20, value: 19 },
      { name: 'Superviser', max: 20, value: 9 },
      { name: 'Heating Worker', max: 20, value: 18 },
      { name: 'Steaming Pressure Worker', max: 20, value: 16 },
      { name: 'SDE', max: 20, value: 16 },
      { name: 'SDE II', max: 20, value: 20 }
    ],
      }
  },
  computed : {
    scoreRadar () {
      return {
        title: {
          text: 'Human Resource'
        },
        tooltip: {},
        radar: {
          indicator: this.scores.map(({ name, max }) => {
            return { name, max }
          })
        },
        series: [
          {
            name: 'Labor Counts',
            type: 'radar',
            data: [{ value: this.scores.map(({ value }) => value) }]
          }
        ]
      }
    }
  },
  methods: {
    next() {
        if (this.active++ > 4) this.active = 0;
    },
    refresh () {
      // simulating async data from server
      this.seconds = 3
      let bar = this.$refs.bar
      bar.showLoading({
        text: 'Loading…',
        color: '#4ea397',
        maskColor: 'rgba(255, 255, 255, 0.4)'
      })
      let timer = setInterval(() => {
        this.seconds--
        if (this.seconds === 0) {
          clearTimeout(timer)
          bar.hideLoading()
          this.bar = getBar()
        }
      }, 1000)
    },
    next() {
            if (this.active++ > 2) this.active = 0;
          },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style>
.stageTitle {
  font-size: 30px;
}
figure {
  display: inline-block;
  position :relative;
  margin: 2em auto;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 8px;
  box-shadow: 0 0 45px rgba(0, 0, 0, .2);
  padding: 1.5em 2em;
  min-width: calc(40vw + 4em);
}
.topBox {
  margin-top: 40px;
}
.echarts {
  width: 1000px;
  height: 500px;
}
.mainBox {
  background-color: none;
}
.contentBox {
  display: inline-block;
  margin-top: 40px;
  width: 70%;
}
.sideBox {
  margin-left: 20px;
  margin-top: 40px;
  width: 70%;
}
.otherBox {
  margin-top: 40px;
}
.el-header {
background-color: #474a57;
color: #B3C0D1;
text-align: left;
line-height: 60px;
}

.el-aside {
background-color: #343640;
color: #D3DCE6;
text-align: center;
line-height: 50px;
}

.el-main {
background-color: #474a57;
color: #D3DCE6;
text-align: center;
line-height: 700px;
}
</style>

