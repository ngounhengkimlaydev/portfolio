<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
useHead({
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Ngoun HengKimlay',
                jobTitle: 'Full-Stack Web Developer',
                url: 'https://ngounhengkimlay.site',
                sameAs: [
                    'https://github.com/ngounhengkimlaydev',
                    'https://www.linkedin.com/in/ngoun-hengkimlay'
                ]
            })
        }
    ]
})
</script>