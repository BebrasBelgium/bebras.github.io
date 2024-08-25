<script setup lang="ts">
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
import AnimatedNumber from '../components/AnimatedNumber.vue'
import InfoBox from '../components/InfoBox.vue'

import { useData } from 'vitepress'
const { frontmatter, theme } = useData()
</script>

<template>
  <div id="jumbotron">
    <div id="welcome" class="vp-doc main">
      <h1>Bebras Belgium</h1>
      <Content />

      <div id="actions" class="sidepanels sidepanels-3">
        <div>
          <span>💻</span>
          <span>{{ frontmatter.actions.test_platform }}</span>
          <VPButton :text="frontmatter.actions.test" href="https://bebras.ugent.be/contest/login" target="_blank" />
        </div>

        <div></div>
        <div></div>
      </div>
    </div>

    <div id="sideinfo">
      <InfoBox>
        <img id="logo" src="/images/bebras-belgium-logo.png" />
        <h2>Bebras Challenge {{ frontmatter.challenge.current_edition }}</h2>
        <p>{{ frontmatter.challenge.pre }}</p>
        <div id="dates">{{ frontmatter.challenge.dates }}</div>
      </InfoBox>

      <InfoBox>
        <h2>{{ theme.homePage.statsTitle }}</h2>
        <p>{{ frontmatter.stats.pre }}</p>
        <div id="stats">
          <AnimatedNumber v-for="data in ['schools', 'pupils', 'tasks']"
            :label="theme.homePage[data] ?? data"
            :value="frontmatter.stats[data]"
            :option="{ duration: 500 }"
          />
        </div>
      </InfoBox>
    </div>
  </div>
</template>

<style scope>
#jumbotron {
  padding: 64px;
  display: flex;
  gap: 20px;
}
#sideinfo {
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
#actions > div {
  padding: 10px;
  text-align: center;
}
#actions > div > span:nth-child(1) {
  display: block;
  font-size: 40px;
  padding-bottom: 20px;
}
#actions > div > span:nth-child(2) {
  padding-bottom: 10px;
  display: block;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
  text-align: center;
}
#logo {
  float: right;
}
#dates {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}
#stats {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 10px 0;
}
#stats > div {
  display: flex;
  flex-direction: column;
}
</style>
