<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="wcs">
      <h3>{{title || 'Will show when you type'}}</h3>
      <app-textfield placeholder="Type something" @input="handleInput"></app-textfield>
      <app-button :data="button" @click="handleClick"></app-button>
    </div>
  </div>
</template>

<script>
import "lit-element-demo";

export default {
  name: "app",
  data: () => {
    return {
      title: "",
      // TODO: need to find a way to pass object from Vue
      button: JSON.stringify({
        label: "Show me",
        action: () => alert("Hello from Vuew")
      })
    };
  },
  methods: {
    handleInput: function({ originalTarget: { value } }) {
      this.title = value;
    },
    handleClick: function() {
      alert("Click from Vue");
    }
  }
};
</script>

<style>
body,
html {
  height: 100%;
}

.wcs {
  margin-top: 2rem;
  text-align: center;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
</style>
