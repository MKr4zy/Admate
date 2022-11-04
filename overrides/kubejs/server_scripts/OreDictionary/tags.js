// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

onEvent('tags.blocks', e => {
    e.add('minecraft:climbable', ['minecraft:chain'])
    e.add('minecraft:mineable/axe', ['integrateddynamics:menril_log_stripped', 'integrateddynamics:menril_wood_stripped'])
    e.add('minecraft:logs', ['integrateddynamics:menril_log_stripped', 'integrateddynamics:menril_wood_stripped'])
  })
  
  onEvent('tags.items', e => {
    e.add('forge:ores/quartz', ['byg:blue_nether_quartz_ore', 'byg:brimstone_nether_quartz_ore'])
    e.add('forge:ores/gold', ['byg:blue_nether_gold_ore', 'byg:brimstone_nether_gold_ore'])
    e.add('forge:raw_ores/cobalt', 'tconstruct:raw_cobalt');
    e.add('forge:dusts/netherite', 'alltheores:netherite_dust');
    // Pam's Harvestcraft
    e.add('forge:vegetables', ['pamhc2crops:rutabagaitem', 'pamhc2crops:scallionitem', 'pamhc2crops:turnipitem', 'pamhc2crops:tomatoitem', 'pamhc2crops:cucumberitem', 'pamhc2crops:lettuceitem', 'pamhc2crops:bellpepperitem', 'pamhc2crops:onionitem', 'pamhc2crops:chilipepperitem', 'pamhc2crops:artichokeitem', 'pamhc2crops:chickpeaitem', 'pamhc2crops:asparagusitem', 'pamhc2crops:cornitem', 'pamhc2crops:broccoliitem', 'pamhc2crops:brusselsproutitem', 'pamhc2crops:caulifloweritem', 'pamhc2crops:cabbageitem', 'pamhc2crops:celeryitem', 'pamhc2crops:eggplantitem', 'pamhc2crops:spinachitem', 'pamhc2crops:rhubarbitem'])
    e.add('forge:leafyvegetables', ['pamhc2crops:scallionitem', 'pamhc2crops:lettuceitem', 'pamhc2crops:artichokeitem', 'pamhc2crops:asparagusitem', 'pamhc2crops:cornitem',  'pamhc2crops:brusselsproutitem', 'pamhc2crops:caulifloweritem', 'pamhc2crops:cabbageitem', 'pamhc2crops:celeryitem',  'pamhc2crops:spinachitem', 'pamhc2crops:rhubarbitem'])
    e.add('forge:salad_ingredients', ['pamhc2crops:scallionitem', 'pamhc2crops:turnipitem', 'pamhc2crops:tomatoitem', 'pamhc2crops:cucumberitem', 'pamhc2crops:lettuceitem', 'pamhc2crops:bellpepperitem', 'pamhc2crops:onionitem', 'pamhc2crops:chilipepperitem', 'pamhc2crops:artichokeitem', 'pamhc2crops:chickpeaitem', 'pamhc2crops:asparagusitem', 'pamhc2crops:cornitem', 'pamhc2crops:broccoliitem', 'pamhc2crops:caulifloweritem', 'pamhc2crops:cabbageitem', 'pamhc2crops:celeryitem', 'pamhc2crops:eggplantitem', 'pamhc2crops:spinachitem', 'pamhc2crops:rhubarbitem'])

  })
  