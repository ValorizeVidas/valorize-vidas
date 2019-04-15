<template>
  <div class="home">
    <AddressesList />
  </div>
</template>

<script>
import AddressesList from '@/components/AddressesList.vue'

export default {
  name: 'Addresses',
  components: {
    AddressesList
  }
}
</script>
