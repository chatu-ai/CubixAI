/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#55AD73',
          deep: '#2E8B57',
          soft: '#E8F5EE',
          ink: '#0F1F17',
        },
        surface: {
          base: '#F8FAF9',
          card: '#FFFFFF',
          muted: '#F1F4F2',
        },
        ink: {
          primary: '#0F1F17',
          secondary: '#5C6B63',
          tertiary: '#6E7A73',
        },
        line: '#E5EBE7',
        gold: '#C9A961',
      },
      fontFamily: {
        sans: [
          'Inter',
          '"HarmonyOS Sans SC"',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,31,23,0.04), 0 2px 8px rgba(15,31,23,0.04)',
        'card-hover': '0 2px 4px rgba(15,31,23,0.04), 0 12px 28px rgba(15,31,23,0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2E8B57 0%, #23794A 100%)',
      },
    },
  },
  plugins: [],
}
