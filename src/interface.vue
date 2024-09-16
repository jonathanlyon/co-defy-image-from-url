<template>
	<span v-if="isLoading">Loading</span>
    <v-input v-model="imageUrl" placeholder="Enter image URL">
    </v-input>

    <div v-if="imageUrl" class="image-wrapper">
        <img :src="imageUrl" alt="Entered image" />
    </div>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';

    const props = defineProps<{ value?: string | null }>();
    const emit = defineEmits(['input']);

    const imageUrl = ref<string | null>(null);

    watch(() => props.value, setImageUrl);
    watch(imageUrl, emitInputValue);

    function setImageUrl() {
        if (!props.value) return;
        imageUrl.value = props.value;
    }

    function emitInputValue() {
        if (props.value === imageUrl.value) return;
        emit('input', imageUrl.value);
    }
</script>

<style scoped>
    .image-wrapper {
        margin-top: 4px;
        border-radius: var(--theme--border-radius);
        border: var(--theme--border-width) solid var(--v-input-border-color, var(--theme--form--field--input--border-color));
        overflow: hidden;
    }

    .image-wrapper img {
        width: 100%;
        height: auto;
        display: block;
    }
</style>