<template>
  <div>
    <div v-for="(val,index) in item" :key="index" @click="handleMemberClick(val,index,$event)">
    </div>
  </div>
</template>
