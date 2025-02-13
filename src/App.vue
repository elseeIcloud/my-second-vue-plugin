<template>
  <header>
    <div class="content">
      <img alt="DRUID logo" class="logo" src="./assets/logo.png" width="128" height="128" />
      <div class="wrapper">
        <Example msg="DRUID Plugin Example" />
      </div>
    </div>
  </header>
</template>

<script>
import Example from './components/Example.vue';

export default {
  components: {
    Example,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
}

.logo {
  display: block;
  width: 128px;
  height: 128px;
}

.wrapper {
  display: flex;
  align-items: center;
}
</style>
