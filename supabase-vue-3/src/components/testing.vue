<template>
    <div class="popup">
        <div class="popup-inner">
            <slot/>
            <button id="close">close</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.popup{
    position:fixed;
}
</style>