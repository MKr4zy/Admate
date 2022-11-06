onEvent('recipes', event => {
    
   // Philosophers Stone
    event.remove({output: 'projecte:philosophers_stone'})
    event.shaped('projecte:philosophers_stone', [
        'SDS',
        'DND',
        'SDS'
    ], {
        S: 'alltheores:steel_dust',
        D: 'alltheores:diamond_dust',
        N: 'minecraft:nether_star'
    })

   // Transmutation Table
   event.remove({output: 'projecte:transmutation_table'})
   event.shaped('projecte:transmutation_table', [
       'OQO',
       'QPQ',
       'OQO'
   ], {
       O: 'minecraft:obsidian',
       Q: 'minecraft:quartz_block',
       P: 'projecte:philosophers_stone'
   })

   // Energy Collector MK1
   event.remove({output: 'projecte:collector_mk1'})
   event.shaped('projecte:collector_mk1', [
       'SGS',
       'SDS',
       'SFS'
   ], {
       G: 'minecraft:glass',
       S: 'minecraft:glowstone',
       D: 'minecraft:diamond_block',
       F: 'ironfurnaces:emerald_furnace'
   })

   // Removing some OP stuff
   event.remove({output: 'projectexpansion:infinite_fuel'})
   event.remove({output: 'projectexpansion:infinite_steak'})
})

