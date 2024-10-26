import type { Config } from 'tailwindcss'

const config: Config =
{
  content:
  [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme:
  {
    extend:
    {
      colors:
      {
        light:
        {
          background: '#ffffff',
        },
        dark:
        {

        },
      },
    },
  },
  plugins:
  [
		({ addBase }: { addBase: any }) =>
		addBase({
			'*':
      {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      'html':
      {
        scrollBehavior: 'smooth',
      },
		}),
	],
}

export default config
