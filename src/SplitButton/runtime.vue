<template>
  <div class="card flex justify-content-center">
    <SplitButton label="Small" :model="items" class="p-button-sm mb-2"></SplitButton>
  </div>
</template>

<script>
import SplitButton from 'primevue/splitbutton';

export default {
	data() {
		return {
			items: [
				{
					label: 'Update',
					icon: 'pi pi-refresh',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				},
				{
					label: 'Delete',
					icon: 'pi pi-times',
					command: () => {
						this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
					}
				},
				{
					label: 'Vue Website',
					icon: 'pi pi-external-link',
					command: () => {
						window.location.href = 'https://vuejs.org/'
					}
				},
				{
					label: 'Upload',
					icon: 'pi pi-upload',
					command: () => {
						window.location.hash = "/fileupload"
					}
				}
			]
		}
	}
}

</script>

<style lang="less" scoped>
@import 'primevue/resources/themes/lara-light-blue/theme.css';
@import 'primeicons/primeicons.css';
</style>
