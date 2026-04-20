export const useDarkMode = () => {
  const isDark = useState('isDark', () => true)

  useHead({
    htmlAttrs: {
      class: computed(() => isDark.value ? 'dark' : ''),
    },
  })

  const toggle = () => {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
}
