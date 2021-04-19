<template>
  <div class="w-5/6 mx-auto bg-yellow-50 text-center mt-4 shadow-lg p-6 relative">
    <slot></slot>
    <router-link to="/">
      <button class="absolute top-2 right-2">
        <base-hover-block>
          <span class="material-icons">
            close
          </span>
        </base-hover-block>
      </button>
    </router-link>
  </div>
</template>
