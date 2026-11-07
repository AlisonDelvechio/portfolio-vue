// Gera src/icons/icons.json só com os ícones usados no site, para que o
// @iconify/vue não precise buscá-los na API do Iconify em tempo de execução.
// Ao usar um ícone novo, adicione-o à lista abaixo e rode: npm run icons
import { writeFileSync } from 'node:fs'
import { getIcons } from '@iconify/utils'
import { icons as mdi } from '@iconify-json/mdi'
import { icons as iconoir } from '@iconify-json/iconoir'

const used = {
  mdi: [
    'arrow-left', 'arrow-left-bold', 'arrow-right-bold', 'arrow-up', 'calendar',
    'code-tags', 'email-outline', 'github', 'linkedin', 'monitor-cellphone',
    'moon-waning-crescent', 'office-building', 'open-in-new', 'white-balance-sunny',
  ],
  iconoir: ['component'],
}

const sets = { mdi, iconoir }
const collections = Object.entries(used).map(([prefix, names]) => {
  const subset = getIcons(sets[prefix], names, true)
  if (!subset) throw new Error(`Ícone ausente em ${prefix}: ${names.join(', ')}`)
  const missing = names.filter((name) => !subset.icons[name])
  if (missing.length) throw new Error(`Ícone ausente em ${prefix}: ${missing.join(', ')}`)
  return subset
})

writeFileSync(new URL('../src/icons/icons.json', import.meta.url), JSON.stringify(collections) + '\n')
console.log(`icons.json: ${collections.map((c) => `${c.prefix} (${Object.keys(c.icons).length})`).join(', ')}`)
